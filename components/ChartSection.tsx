"use client";

import { useEffect, useState } from "react";

export default function ChartSection() {
  const [data, setData] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    fetch("http://127.0.0.1:8000/crime-types")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "20px",
      }}
    >
      <h2 style={{ color: "white", marginBottom: "20px" }}>
        Top Crime Types
      </h2>

      {Object.entries(data).map(([crime, count]) => (
        <div key={crime} style={{ marginBottom: "15px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <span>{crime}</span>
            <span>{count}</span>
          </div>

          <div
            style={{
              width: "100%",
              height: "10px",
              background: "#334155",
              borderRadius: "5px",
              marginTop: "5px",
            }}
          >
            <div
              style={{
                width: `${Math.min(count / 20, 100)}%`,
                height: "10px",
                background: "#3b82f6",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}