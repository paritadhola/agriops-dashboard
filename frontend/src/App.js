import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import EquipmentStats from "./components/EquipmentStats";

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <EquipmentStats />
    </div>
  );
}

export default App;
