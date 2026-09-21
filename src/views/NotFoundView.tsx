import React from 'react';
import { Link } from '../context/NavigationContext';
import { ArrowLeft, Home, Layers } from 'lucide-react';

export const NotFoundView: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-2xl border border-[#2b2b2b]/15 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#0c5253] text-white mx-auto flex items-center justify-center font-mono font-bold text-2xl">
          404
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-[#2b2b2b]">Page Not Found</h1>
          <p className="text-sm text-stone-600">
            The page you requested does not exist or has been relocated.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            id="not-found-home-btn"
            className="w-full sm:w-auto px-4 py-2.5 rounded-md bg-[#0c5253] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 tap-target"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/assessments"
            id="not-found-catalog-btn"
            className="w-full sm:w-auto px-4 py-2.5 rounded-md border border-[#2b2b2b] text-[#2b2b2b] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 tap-target"
          >
            <Layers className="w-4 h-4" />
            <span>View Catalog</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
