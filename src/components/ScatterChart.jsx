import ChartComponent from "./ChartComponent.jsx";
const ScatterChart = ({ data }) => {
  const scatterChartData = {
    labels: data.expenses,
    datasets: [
      {
        label: "Expenses vs. Profits",
        data: data.profits,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  const scatterChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <ChartComponent
      type="scatter"
      data={scatterChartData}
      options={scatterChartOptions}
    />
  );
};
export default ScatterChart;
