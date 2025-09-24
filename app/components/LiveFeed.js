import { Zap } from 'lucide-react';

export default function LiveFeed({ events }) {
  return (
    <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg">
      <h3 className="font-bold text-lg mb-4 flex items-center"><Zap className="h-5 w-5 mr-2 text-yellow-400" /> Live Event Feed</h3>
      <ul className="space-y-3 h-48 overflow-y-auto pr-2">
        {events.map((event, index) => (
          <li key={index} className="text-sm text-gray-400 border-l-2 border-slate-700 pl-3">
            <p className="font-medium text-gray-300">{event.message}</p>
            <p className="text-xs text-gray-500">{new Date(event.time).toLocaleTimeString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}