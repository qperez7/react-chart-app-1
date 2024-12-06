import { useState, useEffect } from "react";
import BubbleChart from "./components/BubbleChart";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import ScatterChart from "./components/ScatterChart";
function App() {
  const [chartData, setChartData] = useState(null);
  useEffect(() => {
    fetch("public/financial_data.json")
      .then((response) => response.json())
      .then((data) => setChartData(data));
  }, []);
  if (!chartData) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Dynamic Charts with React and Chart.js</h1>
      <BarChart data={chartData} />
      <LineChart data={chartData} />
      <ScatterChart data={chartData} />
      <BubbleChart data={chartData} />
    </div>
  );
}
export default App;
