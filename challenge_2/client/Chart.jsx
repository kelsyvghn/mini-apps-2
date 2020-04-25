import React, { useEffect } from 'react';
import { Line, Pie } from 'react-chartjs-2';


const Chart = ({ data }) => {
// const { bpi, disclaimer, time } = bitcoin;
console.log(data);
  return (
    <div className="chart">
    <Line
        data={data}
    options={{
      maintainAspectRatio: true,
      responsive: true
    }}
    />
    </div>
  )
}

export default Chart;
