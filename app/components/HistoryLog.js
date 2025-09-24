import { BookCopy } from 'lucide-react';

export default function HistoryLog({ logs }) {
    return (
        <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center">
                <BookCopy className="h-5 w-5 mr-2 text-indigo-400" />
                System Event Log
            </h3>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead className="text-left text-gray-400">
                        <tr>
                            <th className="p-2">Time</th>
                            <th className="p-2">Event</th>
                            <th className="p-2">Source</th>
                            <th className="p-2 hidden sm:table-cell">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map(log => (
                            <tr key={log.id} className="border-t border-slate-700">
                                <td className="p-2 text-gray-500 whitespace-nowrap">{log.time}</td>
                                <td className={`p-2 font-semibold ${log.event.includes('Alert') ? 'text-status-red' : 'text-gray-300'}`}>{log.event}</td>
                                <td className="p-2 text-gray-400">{log.sensor}</td>
                                <td className="p-2 text-gray-500 hidden sm:table-cell">{log.details}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}