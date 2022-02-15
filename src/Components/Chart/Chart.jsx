import React from 'react'
import "./Chart.scss";
import { Bar, BarChart, CartesianGrid, Legend, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
      "name": "Page A",
      "uv": 100,
      "pv": 200
    },
    {
      "name": "Page B",
      "uv": 250,
      "pv": 400
    },
    {
      "name": "Page C",
      "uv": 200,
      "pv": 540
    },
    {
      "name": "Page D",
      "uv": 80,
      "pv": 500
    },
    {
      "name": "Page E",
      "uv": -190,
      "pv": 100
    },
    {
      "name": "Page F",
      "uv": -30,
      "pv": 200
    },
    {
      "name": "Page G",
      "uv": -90,
      "pv": 300
    },
    {
        "name": "Page H",
        "uv": -490,
        "pv": -200
    },
    {
      "name": "Page I",
      "uv": -190,
      "pv": 100
    },
    {
      "name": "Page J",
      "uv": -100,
      "pv": 200
    },
    {
      "name": "Page K",
      "uv": -300,
      "pv": 300
    },
    {
        "name": "Page L",
        "uv": -500,
        "pv": -400
    }
  ]  

function Chart() {
  return (
    <BarChart width={1110} height={447} data={data}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="uv" />
        <YAxis dataKey="pv"/>
        <Tooltip className="tooltip" />
        <Legend />  
        <ReferenceLine y={0} stroke="#000" />
        <Bar className='bar' dataKey="pv" fill="#73FFF2" />
        <Bar className='bar' dataKey="uv" fill="#FC4C4F" />
    </BarChart>
  )
}

export default Chart