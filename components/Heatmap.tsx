"use client";

import { useEffect, useState } from "react";

export default function Heatmap() {
  const [cities, setCities] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    fetch("http://127.0.0.1:8000/cities")
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch((err) => console.log(err));
  }, []);

  const getColor = (count: number) => {
    if (count > 5000) return "#ef4444"; // High
    if (count > 2000) return "#f59e0b"; // Medium
    return "#22c55e"; // Low
  };

  const getLevel = (count: number) => {
    if (count > 5000) return "High Risk";
    if (count > 2000) return "Medium Risk";
    return "Low Risk";
  };

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "24px",
        borderRadius: "16px",
        marginTop: "24px",
      }}
    >
      <h2
        style={{
          color: "white",
          fontSize: "28px",
          marginBottom: "20px",
        }}
      >
        🗺️ Crime Hotspots
      </h2>

      {Object.entries(cities).map(([city, count]) => (
        <div
          key={city}
          style={{
            display: "flex",
            justifyContent: "space-between",
            background: "#0f172a",
            padding: "14px",
            borderRadius: "10px",
            marginBottom: "12px",
            borderLeft: `6px solid ${getColor(count)}`,
          }}
        >
          <div>
            <div style={{ color: "white", fontWeight: "bold" }}>{city}</div>
            <div style={{ color: "#94a3b8", fontSize: "14px" }}>
              {count} crimes
            </div>
          </div>

          <span
            style={{
              color: getColor(count),
              fontWeight: "bold",
            }}
          >
            {getLevel(count)}
          </span>
        </div>
      ))}
    </div>
  );
}