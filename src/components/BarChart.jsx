import ChartComponent from "./ChartComponent.jsx";
import PropTypes from "prop-types";
const BarChart = ({ data }) => {
  BarChart.propTypes = {
    data: PropTypes.object.isRequired, // Adding props
    options: PropTypes.object,
  };
  const barChartData = {
    labels: data.months,
    datasets: [
      {
        label: "Bar Chart",
        data: data.sales,
        backgroundColor: "rgba(5, 0, 249, 0.5)", //Dark blue color
        borderColor: "rgba(5, 0, 249, 1)",
        borderWidth: 1,
      },
    ],
  };
  const barChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <ChartComponent type="bar" data={barChartData} options={barChartOptions} />
  );
};
export default BarChart;
