import ChartComponent from "./ChartComponent.jsx";
import PropTypes from "prop-types";
const LineChart = ({ data }) => {
  LineChart.propTypes = {
    data: PropTypes.object.isRequired, // Adding props
    options: PropTypes.object,
  };

  const lineChartData = {
    labels: data.months,
    datasets: [
      {
        label: "Line Chart",
        data: data.profits,
        backgroundColor: "rgba(255, 165, 0, 0.45)", // Orange color
        borderColor: "rgba(255, 165, 0, 1)",
        borderWidth: 1,
      },
    ],
  };
  const lineChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <ChartComponent
      type="line"
      data={lineChartData}
      options={lineChartOptions}
    />
  );
};
export default LineChart;
