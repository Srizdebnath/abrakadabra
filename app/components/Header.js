import Link from 'next/link';
import { ShieldCheck, LogOut } from 'lucide-react';

export default function Header({ onLogout }) {
  return (
    <header className="bg-slate-800/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="h-8 w-8 text-indigo-400" />
            <h1 className="text-xl font-bold text-white tracking-wider">SurakshaDrishti</h1>
            
            {/* THIS IS THE NEW DEMO MODE TAG */}
            <span className="bg-amber-500 text-black text-xs font-bold px-2.5 py-1 rounded-full animate-pulse">
              PROTOTYPE VIEW
            </span>

          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-300 hidden sm:block">Welcome, Mine Supervisor</span>
            <button
              onClick={onLogout}
              className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-slate-700 transition-colors"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}