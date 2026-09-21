import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';

interface NavigationContextType {
  path: string;
  queryParams: Record<string, string>;
  navigate: (to: string) => void;
  currentRoute: 'home' | 'about' | 'assessments' | 'assessment-detail' | 'contact' | 'not-found';
  assessmentId?: string;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

function normalizePath(rawPath: string): { path: string; queryParams: Record<string, string> } {
  // Support both standard pathname and hash fallback for resilient routing
  let target = rawPath;
  if (target.startsWith('#')) {
    target = target.slice(1);
  }
  if (!target) {
    target = '/';
  }

  const [pathname, queryString] = target.split('?');
  const cleanPath = pathname || '/';
  
  const queryParams: Record<string, string> = {};
  if (queryString) {
    const searchParams = new URLSearchParams(queryString);
    searchParams.forEach((value, key) => {
      queryParams[key] = value;
    });
  }

  return { path: cleanPath, queryParams };
}

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locationState, setLocationState] = useState(() => {
    // Check if hash has route e.g. #/about
    const hash = window.location.hash;
    if (hash && hash.startsWith('#/')) {
      return normalizePath(hash.slice(1) + window.location.search);
    }
    return normalizePath(window.location.pathname + window.location.search);
  });

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#/')) {
        setLocationState(normalizePath(hash.slice(1) + window.location.search));
      } else {
        setLocationState(normalizePath(window.location.pathname + window.location.search));
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const normalized = normalizePath(to);
    
    // Update browser history
    if (to !== window.location.pathname + window.location.search) {
      try {
        window.history.pushState({}, '', to);
      } catch {
        // Fallback for sandboxed iframes if pushState is restricted
        window.location.hash = to;
      }
    }
    
    setLocationState(normalized);
  };

  const { route, assessmentId } = useMemo(() => {
    const p = locationState.path;
    if (p === '/' || p === '') {
      return { route: 'home' as const };
    }
    if (p === '/about' || p === '/about/') {
      return { route: 'about' as const };
    }
    if (p === '/assessments' || p === '/assessments/') {
      return { route: 'assessments' as const };
    }
    if (p.startsWith('/assessments/')) {
      const id = p.replace('/assessments/', '').replace(/\/$/, '');
      return { route: 'assessment-detail' as const, assessmentId: id };
    }
    if (p === '/contact' || p === '/contact/') {
      return { route: 'contact' as const };
    }
    return { route: 'not-found' as const };
  }, [locationState.path]);

  return (
    <NavigationContext.Provider
      value={{
        path: locationState.path,
        queryParams: locationState.queryParams,
        navigate,
        currentRoute: route,
        assessmentId,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export function useNavigation(): NavigationContextType {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Link: React.FC<LinkProps> = ({ to, children, className, id, onClick, ...rest }) => {
  const { navigate } = useNavigation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    // Allow normal browser tab opening with cmd/ctrl/shift click
    if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className} id={id} {...rest}>
      {children}
    </a>
  );
};
