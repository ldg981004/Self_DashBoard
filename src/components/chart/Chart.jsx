/* eslint-disable */

import React from "react";
import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart(){
    const data = [

        {
            name: '1',
            'Active User' : 4490,
        },
        {
            name: '2',
            'Active User' : 3430,
        },
        {
            name: '3',
            'Active User' : 2490,
        },
        {
            name: '4',
            'Active User' : 3390,
        },
        {
            name: '5',
            'Active User' : 5090,
        },
        {
            name: '6',
            'Active User' : 6090,
        },
        {
            name: '7',
            'Active User' : 7090,
        },
        {
            name: '8',
            'Active User' : 890,
        },
        {
            name: '9',
            'Active User' : 9090,
        },
       
      ];

    return(
    <div className="chart">
        <div className="chart-container">
        <h4 className="chartTitle">Today Chart</h4>
        <ResponsiveContainer width="100%" aspect={2/1}>
            <LineChart data = {data}>
            <XAxis dataKey="name" stroke="5550bd"/>
            <Line type="monotone" dataKey="Active User"/>
            <Tooltip/>
            </LineChart>
        </ResponsiveContainer>
        </div>
    </div>
    ) 
}