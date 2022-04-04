import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((data) => {
      const loadData = data.data;
      const chartData = loadData.map((item) => {
        const ph = {
          month: item.month,
          sell: item.sell,
          revenue: item.revenue,
          investment: item.investment,
        };
        return ph;
      });
      setData(chartData);
    });
  }, []);
  return (
    <div className="px-16 my-4">
      <div className="flex justify-between mb-20">
            <div>
            <h1 className="font-bold text-center">Line Chart</h1>
        <LineChart width={500} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
        </LineChart>
            </div>
        <div>
            <h1 className="font-bold text-center">Area Chart Invesment vs Revenue</h1>
            <AreaChart width={500} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#08cf4e"
            fill="#08cf4e"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#779ad4"
            fill="#779ad4"
          />
        </AreaChart>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
        <h1 className="font-bold text-center">Bar Chart Invesment vs Revenue</h1>
            <BarChart width={500} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar type="monotone" dataKey="revenue" stackId="a" fill="#779ad4" />
          <Bar type="monotone" dataKey="investment" stackId="a" fill="#08cf4e" />
        </BarChart>
        </div>
        <div>
        <h1 className="font-bold text-center">Pie Chart Invesment vs Revenue</h1>
        <PieChart width={500} height={500}>
          <Pie data={data}  type="monotone" dataKey="revenue" cx="50%" cy="50%" outerRadius={130} fill="#8884d8" />
          <Pie data={data}  type="monotone" dataKey="investment" cx="50%" cy="50%" innerRadius={140} outerRadius={180} fill="#82ca9d" label />
          <Tooltip/>
        </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
