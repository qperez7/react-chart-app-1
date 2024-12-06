import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import PropTypes from "prop-types";

const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  ChartComponent.propTypes = {
    type: PropTypes.string.isRequired, // Adding props to the chart component
    data: PropTypes.object.isRequired,
    options: PropTypes.object,
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    chartInstanceRef.current = new Chart(ctx, {
      type,
      data,
      options,
    });
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [type, data, options]);
  return <canvas ref={chartRef}> </canvas>;
};
export default ChartComponent;
