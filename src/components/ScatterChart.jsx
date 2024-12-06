import ChartComponent from "./ChartComponent.jsx";
import PropTypes from "prop-types";

const ScatterChart = ({ data }) => {
  ScatterChart.propTypes = {
    // Adding props
    data: PropTypes.object.isRequired,
  };
  const scatterChartData = {
    labels: data.expenses,
    datasets: [
      {
        label: "Scatter Chart",
        data: data.profits,
        backgroundColor: "rgba(245, 0, 9, 0.2)", //Red color
        borderColor: "rgba(245, 0, 9, 1)",
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
