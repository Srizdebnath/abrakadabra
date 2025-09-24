import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SlidersHorizontal } from 'lucide-react';

export default function SensorDetail({ sensor }) {
  if (!sensor) {
    return (
      <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center h-full text-center">
         <SlidersHorizontal className="h-10 w-10 text-slate-500 mb-4" />
        <h3 className="font-bold text-lg text-slate-300">Sensor Details</h3>
        <p className="text-sm text-slate-500">Click a sensor on the map to view its live data and recent trends.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg">
      <h3 className="font-bold text-lg mb-1">{sensor.id} - Details</h3>
      <p className="text-sm text-gray-400 mb-4">{sensor.type} Sensor</p>
      
      <div className="mb-4">
        <p className="text-sm text-gray-400">Current Reading</p>
        <p className="text-3xl font-bold text-white">{sensor.lastReading}</p>
      </div>
      
      <h4 className="text-md font-semibold mb-2 text-gray-300">Recent Trend (Last 4 Hours)</h4>
      <div className="h-48 w-full">
        <ResponsiveContainer>
          <LineChart data={sensor.readings} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} />
            <YAxis stroke="#94a3b8" fontSize={12} />
            <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                labelStyle={{ color: '#cbd5e1' }}
            />
            <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}