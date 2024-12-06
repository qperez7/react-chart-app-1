import ChartComponent from "./ChartComponent.jsx";
const BubbleChart = ({ data }) => {
  const bubbleChartData = {
    labels: data.expenses,
    datasets: [
      {
        label: "Combined Metrics",
        data: data.profits,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  const bubbleChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <ChartComponent
      type="bubble"
      data={bubbleChartData}
      options={bubbleChartOptions}
    />
  );
};
export default BubbleChart;
