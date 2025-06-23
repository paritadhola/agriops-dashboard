import EquipmentCard from "./EquipmentCard";
import React, { useEffect, useState } from "react";

const equipmentList = [
  { id: 1, name: "Tractor A", status: "Active" },
  { id: 2, name: "Harvester B", status: "Idle" },
  { id: 3, name: "Sprayer C", status: "Maintenance" },
];

function Dashboard() {
  const [equipmentList, setEquipmentList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEquipmentList([
        { id: 1, name: "Tractor A", status: "Active" },
        { id: 2, name: "Harvester B", status: "Idle" },
        { id: 3, name: "Sprayer C", status: "Maintenance" },
      ]);
      setLoading(false);
    }, 1500);
  });

  if (loading)
    return <p style={{ padding: "1rem" }}>Loading equipment data...</p>;
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Equipment Overview</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {equipmentList.map((equip) => (
          <EquipmentCard
            key={equip.id}
            name={equip.name}
            initialState={equip.status}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
