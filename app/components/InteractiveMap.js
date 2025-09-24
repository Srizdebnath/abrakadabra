'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for default Leaflet icon path issue with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const statusColors = {
  Critical: 'red',
  Warning: 'orange',
  Nominal: 'green',
};

const createCustomIcon = (color) => {
    return new L.DivIcon({
        html: `<svg viewBox="0 0 24 24" class="h-8 w-8" fill="${color}" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
        className: '',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });
};


export default function InteractiveMap({ sensors, onSensorSelect }) {
  const centerPosition = sensors[0]?.position || [27.1751, 78.0421];

  return (
    <div className="h-[400px] lg:h-[500px] w-full rounded-lg shadow-lg overflow-hidden">
      <MapContainer center={centerPosition} zoom={15} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {sensors.map(sensor => (
          <Marker
            key={sensor.id}
            position={sensor.position}
            icon={createCustomIcon(statusColors[sensor.status])}
            eventHandlers={{
              click: () => {
                onSensorSelect(sensor.id);
              },
            }}
          >
            <Popup>
              <div className="font-sans">
                <strong className="text-md">{sensor.id}</strong><br/>
                Status: <span style={{ color: statusColors[sensor.status] }}>{sensor.status}</span><br/>
                Last Reading: {sensor.lastReading}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}