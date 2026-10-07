import React, { createContext, useContext, useMemo } from 'react';
import {
  useLocation,
  useNavigate as useRouterNavigate,
  useSearchParams,
  Link as RouterLink,
} from 'react-router-dom';

export type RouteKey = 'home' | 'about' | 'assessments' | 'assessment-detail' | 'contact' | 'not-found';

interface NavigationContextType {
  path: string;
  queryParams: Record<string, string>;
  navigate: (to: string) => void;
  currentRoute: RouteKey;
  assessmentId?: string;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const routerNavigate = useRouterNavigate();
  const [searchParams] = useSearchParams();

  // Convert searchParams into plain record object
  const queryParams = useMemo(() => {
    const params: Record<string, string> = {};
    searchParams.forEach((val, key) => {
      params[key] = val;
    });
    return params;
  }, [searchParams]);

  // Determine current active route and parameters
  const { currentRoute, assessmentId } = useMemo(() => {
    const rawPath = location.pathname.replace(/\/+$/, '') || '/';

    if (rawPath === '/') {
      return { currentRoute: 'home' as const };
    }
    if (rawPath === '/about') {
      return { currentRoute: 'about' as const };
    }
    if (rawPath === '/assessments') {
      return { currentRoute: 'assessments' as const };
    }
    if (rawPath.startsWith('/assessments/')) {
      const id = rawPath.replace('/assessments/', '');
      return { currentRoute: 'assessment-detail' as const, assessmentId: id };
    }
    if (rawPath === '/contact') {
      return { currentRoute: 'contact' as const };
    }
    return { currentRoute: 'not-found' as const };
  }, [location.pathname]);

  const navigate = (to: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    routerNavigate(to);
  };

  return (
    <NavigationContext.Provider
      value={{
        path: location.pathname,
        queryParams,
        navigate,
        currentRoute,
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

export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Link: React.FC<LinkProps> = ({ to, children, className, id, onClick, ...rest }) => {
  return (
    <RouterLink
      to={to}
      onClick={onClick}
      className={className}
      id={id}
      {...rest}
    >
      {children}
    </RouterLink>
  );
};

