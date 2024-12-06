import ChartComponent from "./ChartComponent.jsx";
import PropTypes from "prop-types";
const BubbleChart = ({ data }) => {
  BubbleChart.propTypes = {
    data: PropTypes.object.isRequired, // Adding props
    options: PropTypes.object,
  };
  const bubbleChartData = {
    datasets: [
      {
        label: "Bubble Chart",
        data: data.sales.map((sale, i) => ({
          // Bubbles based on sales size
          x: data.expenses[i],
          y: data.profits[i],
          r: sale / 50, // Radius for the bubble chart
        })),

        backgroundColor: "rgba(75, 192, 192, 0.6)", //Light blue color
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
