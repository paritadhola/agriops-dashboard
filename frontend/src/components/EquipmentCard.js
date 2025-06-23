import React, { useState } from "react";

function EquipmentCard({ name, initialState }) {
  const [status, setStatus] = useState(initialState);
  const statusColor = {
    Active: "#4CAF50",
    Idle: "#FFC107",
    Maintenance: "#F44336",
  }[status];

  return (
    <div
      style={{
        border: `2px solid ${statusColor}`,
        borderRadius: "10px",
        padding: "1rem",
        width: "200px",
      }}
    >
      <h3>{name}</h3>
      <p>
        Status: <strong style={{ color: statusColor }}>{status}</strong>
      </p>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <button onClick={() => setStatus("Active")}>Active</button>
        <button onClick={() => setStatus("Idle")}>Idle</button>
        <button onClick={() => setStatus("Maintenance")}>Maintenance</button>
      </div>
    </div>
  );
}

export default EquipmentCard;
