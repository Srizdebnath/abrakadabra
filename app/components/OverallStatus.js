import { AlertTriangle, Shield, CheckCircle } from 'lucide-react';

export default function OverallStatus({ status, lastUpdated }) {
  const statusConfig = {
    'Critical Alert': {
      icon: <AlertTriangle className="h-10 w-10 text-status-red" />,
      bgColor: 'bg-red-500/10',
      textColor: 'text-status-red',
      borderColor: 'border-status-red',
    },
    'Warning': {
      icon: <Shield className="h-10 w-10 text-status-amber" />,
      bgColor: 'bg-amber-500/10',
      textColor: 'text-status-amber',
      borderColor: 'border-status-amber',
    },
    'All Systems Nominal': {
      icon: <CheckCircle className="h-10 w-10 text-status-green" />,
      bgColor: 'bg-green-500/10',
      textColor: 'text-status-green',
      borderColor: 'border-status-green',
    },
  };

  const config = statusConfig[status] || statusConfig['All Systems Nominal'];

  return (
    <div className={`p-6 rounded-lg shadow-lg border-l-4 ${config.borderColor} ${config.bgColor} flex items-center justify-between`}>
      <div className="flex items-center space-x-4">
        {config.icon}
        <div>
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Overall System Status</h2>
          <p className={`text-3xl font-bold ${config.textColor}`}>{status}</p>
        </div>
      </div>
      <div className="text-right">
         <p className="text-xs text-gray-500">Last Update</p>
         <p className="text-sm font-medium text-gray-300">{lastUpdated.toLocaleTimeString()}</p>
      </div>
    </div>
  );
}