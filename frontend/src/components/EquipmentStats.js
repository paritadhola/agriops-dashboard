import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const equipmentStats = [
  { name: "Tractor A", hours: 120, fuel: 85 },
  { name: "Harvester B", hours: 60, fuel: 40 },
  { name: "Sprayer C", hours: 40, fuel: 20 },
];

function EquipmentStats() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Equipment Usage Stats</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={equipmentStats}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="hours" fill="#8884d8" />
          <Bar dataKey="fuel" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default EquipmentStats;
