import React from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {

    const data = [
        {
          name: 'Page A',
          price: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          price: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          price: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          price: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          price: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          price: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          price: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

  return (
    
        <div className='mx-auto mt-20'>
            <h1 className='text-3xl text-blue-300 text-center mb-7'>This is Line Chart.</h1>
            <LineChart width={600} md:width={400} height={400} data={data}>
                <Line type="monotone" dataKey={"price"} stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
  )
}

export default MyLineChart