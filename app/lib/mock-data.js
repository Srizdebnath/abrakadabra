// File: app/lib/mock-data.js

export const SENSOR_DATA = [
  // ... (Paste the SENSOR_DATA array from the previous detailed response here)
  { id: 'SN-001', position: [27.1751, 78.0421], status: 'Critical', lastReading: '22.5 mm', type: 'Displacement', readings: [ { time: '12:00', value: 18.2 }, { time: '13:00', value: 19.5 }, { time: '14:00', value: 20.1 }, { time: '15:00', value: 22.5 }, ], }, { id: 'SN-002', position: [27.1720, 78.0423], status: 'Warning', lastReading: '950 με', type: 'Strain', readings: [ { time: '12:00', value: 750 }, { time: '13:00', value: 810 }, { time: '14:00', value: 880 }, { time: '15:00', value: 950 }, ], }, { id: 'SN-003', position: [27.1755, 78.0395], status: 'Nominal', lastReading: '1.8 mm', type: 'Displacement', readings: [ { time: '12:00', value: 1.5 }, { time: '13:00', value: 1.6 }, { time: '14:00', value: 1.7 }, { time: '15:00', value: 1.8 }, ], }, { id: 'SN-004', position: [27.1780, 78.0440], status: 'Nominal', lastReading: '12 kPa', type: 'Pore Pressure', readings: [ { time: '12:00', value: 10 }, { time: '13:00', value: 11 }, { time: '14:00', value: 11.5 }, { time: '15:00', value: 12 }, ], },
];

export const HISTORY_LOGS = [
  // ... (Paste the HISTORY_LOGS array from the previous detailed response here)
  { id: 1, time: '2025-09-24 14:32', event: 'High-Risk Alert Triggered', sensor: 'SN-001', details: 'Displacement exceeded 20mm threshold.' }, { id: 2, time: '2025-09-24 11:15', event: 'System Maintenance', sensor: 'All', details: 'Scheduled sensor recalibration completed.' }, { id: 3, time: '2025-09-23 21:05', event: 'Warning Issued', sensor: 'SN-002', details: 'Strain levels rising faster than expected.' },
];

export const LIVE_FEED_EVENTS = [
    // ... (Paste the LIVE_FEED_EVENTS array from the previous detailed response here)
    { time: new Date(), message: "Sensor SN-003 data received.", status: "info" }, { time: new Date(), message: "Network latency normal.", status: "info" }, { time: new Date(), message: "Sensor SN-004 data received.", status: "info" }, { time: new Date(), message: "Minor vibration detected near SN-002.", status: "warning" }, { time: new Date(), message: "Weather API data synced.", status: "info" },
];