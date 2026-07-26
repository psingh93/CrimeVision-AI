"use client";

import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

const cities = [
  {
    name: "Delhi",
    position: [28.6139, 77.2090],
    crimes: 5200,
    color: "red",
  },
  {
    name: "Mumbai",
    position: [19.0760, 72.8777],
    crimes: 3400,
    color: "orange",
  },
  {
    name: "Bengaluru",
    position: [12.9716, 77.5946],
    crimes: 2600,
    color: "yellow",
  },
  {
    name: "Chennai",
    position: [13.0827, 80.2707],
    crimes: 1400,
    color: "green",
  },
];

export default function MapComponent() {
  return (
    <MapContainer
      center={[22.5937, 78.9629]}
      zoom={5}
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "12px",
      }}
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {cities.map((city) => (
        <CircleMarker
          key={city.name}
          center={city.position as [number, number]}
          radius={15}
          pathOptions={{
            color: city.color,
            fillColor: city.color,
            fillOpacity: 0.7,
          }}
        >
          <Popup>
            <strong>{city.name}</strong>
            <br />
            Crimes: {city.crimes}
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}