import { Wifi, Cpu, AlertCircle, ShieldCheck } from 'lucide-react';

const MetricCard = ({ icon, title, value, color }) => (
  <div className="bg-slate-800 p-4 rounded-lg flex items-center space-x-4">
    <div className={`p-2 rounded-full ${color}/20`}>
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-400">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </div>
);

export default function KeyMetrics({ sensors }) {
  const onlineSensors = sensors.length;
  const criticalAlerts = sensors.filter(s => s.status === 'Critical').length;
  
  return (
    <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg">
      <h3 className="font-bold text-lg mb-4">Key Metrics</h3>
      <div className="grid grid-cols-2 gap-4">
        <MetricCard icon={<Wifi className="h-6 w-6 text-blue-400" />} title="Sensors Online" value={onlineSensors} color="bg-blue-400" />
        <MetricCard icon={<Cpu className="h-6 w-6 text-teal-400" />} title="System Load" value="15%" color="bg-teal-400" />
        <MetricCard icon={<AlertCircle className="h-6 w-6 text-red-400" />} title="Critical Alerts" value={criticalAlerts} color="bg-red-400" />
        <MetricCard icon={<ShieldCheck className="h-6 w-6 text-green-400" />} title="Safety Score" value="98.5%" color="bg-green-400" />
      </div>
    </div>
  );
}