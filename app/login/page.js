/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // --- This is our temporary, fake authentication ---
    if (username === 'admin' && password === 'password') {
      // In a real app, you'd get a token from a server.
      // Here, we just set a flag in the browser's local storage.
      localStorage.setItem('isAuthenticated', 'true');
      
      // Redirect to the dashboard on successful login
      router.push('/dashboard');
    } else {
      setError('Invalid credentials. Please use admin/password.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      
      <div className="w-full max-w-md p-8 space-y-8 bg-slate-800 rounded-2xl shadow-2xl">
        
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            SurakshaDrishti
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            AI-Based Rockfall Prediction System
          </p>
        </div>
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input 
                id="username" 
                name="username" 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-900 text-gray-300 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                placeholder="Username" 
              />
            </div>
            <div>
              <input 
                id="password" 
                name="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-900 text-gray-300 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                placeholder="Password" 
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-400 text-center">{error}</p>}

          <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign in
          </button>

          <p className="text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <Link href="/signup" className="font-medium text-indigo-400 hover:text-indigo-300">
              Sign up
            </Link>
          </p>
         < p className="text-center text-xs text-gray-500 mt-4 px-4">
  *This is a simulated login for demonstration purposes. Please use the pre-filled credentials to access the dashboard.
</p>

<p className="text-center text-sm text-gray-400 mt-6">
  Don't have an account?{' '}
  <Link href="/signup" className="font-medium text-indigo-400 hover:text-indigo-300">
    Sign up
  </Link>
</p>

  <div className="max-w-4xl mx-auto my-8 p-4 bg-yellow-900/50 text-yellow-200 border-l-4 border-yellow-400 rounded-r-lg shadow-lg">
  <div className="flex">
    <div className="flex-shrink-0">
      {/* Optional: Add an Info Icon for better visuals */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-yellow-300 mr-3"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    </div>
    <div>
      <h3 className="font-bold text-yellow-100">A Note for Our Judges</h3>
      <p className="text-sm mt-1">
        This is a **high-fidelity frontend prototype** designed to showcase the complete user interface, user experience, and our vision for the SurakshaDrishti platform. All data displayed (maps, charts, alerts) is **simulated** to demonstrate full functionality.
        <br />
        The core machine learning model has been developed and validated separately, and the backend integration is currently in progress.
      </p>
    </div>
  </div>
</div>

        </form>
        
      </div>
    </div>
  );
}