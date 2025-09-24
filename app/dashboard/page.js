'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// --- IMPORT YOUR UI COMPONENTS ---
import Header from '../components/Header';
import OverallStatus from '../components/OverallStatus';
import KeyMetrics from '../components/KeyMetrics';
import SensorDetail from '../components/SensorDetail';
import LiveFeed from '../components/LiveFeed';
import HistoryLog from '../components/HistoryLog';

// --- IMPORT YOUR FAKE DATA ---
import { SENSOR_DATA, HISTORY_LOGS, LIVE_FEED_EVENTS } from '../lib/mock-data';

// --- DYNAMICALLY IMPORT THE MAP (IMPORTANT FOR NEXT.JS) ---
const InteractiveMap = dynamic(() => import('../components/InteractiveMap'), {
  ssr: false,
});

export default function DashboardPage() {
  const router = useRouter();
  // State for the authentication check
  const [isVerifying, setIsVerifying] = useState(true);

  // --- All the states for your dashboard UI ---
  const [sensors, setSensors] = useState(SENSOR_DATA);
  const [selectedSensor, setSelectedSensor] = useState(null);
  const [liveFeed, setLiveFeed] = useState(LIVE_FEED_EVENTS.slice(0, 5));
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // --- EFFECT 1: CHECK AUTHENTICATION ---
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated !== 'true') {
      router.push('/login');
    } else {
      setIsVerifying(false); // Authentication passed, allow rendering
    }
  }, [router]);

  // --- EFFECT 2: SIMULATE LIVE DATA UPDATES ---
  useEffect(() => {
    // This effect should only run if verification is complete
    if (isVerifying) return; 

    const interval = setInterval(() => {
      setLastUpdated(new Date());
      setLiveFeed(prevFeed => {
        const nextEvent = LIVE_FEED_EVENTS[Math.floor(Math.random() * LIVE_FEED_EVENTS.length)];
        const newFeed = [{...nextEvent, time: new Date()}, ...prevFeed];
        return newFeed.slice(0, 10);
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [isVerifying]); // Re-run if isVerifying changes

  // --- EVENT HANDLERS ---
  const handleSensorSelect = (sensorId) => {
    const sensor = sensors.find(s => s.id === sensorId);
    setSelectedSensor(sensor);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/login');
  };

  // --- DERIVED STATE ---
  const overallStatus = sensors.some(s => s.status === 'Critical')
    ? 'Critical Alert'
    : sensors.some(s => s.status === 'Warning')
    ? 'Warning'
    : 'All Systems Nominal';

  // --- RENDER LOGIC ---
  // While verifying, show a loading screen. This protects the content.
  if (isVerifying) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900">
        <p className="text-white animate-pulse">Verifying Access...</p>
      </div>
    );
  }

  // Once verified, render the full dashboard
  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 font-sans">
      <Header onLogout={handleLogout} />
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

      
      <main className="p-4 sm:p-6 lg:p-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Content Area (Left/Center) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <OverallStatus status={overallStatus} lastUpdated={lastUpdated} />
            <InteractiveMap sensors={sensors} onSensorSelect={handleSensorSelect} />
            <HistoryLog logs={HISTORY_LOGS} />
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <KeyMetrics sensors={sensors} />
            <SensorDetail sensor={selectedSensor} />
            <LiveFeed events={liveFeed} />
          </div>

        </div>
      </main>
    </div>
  );
}