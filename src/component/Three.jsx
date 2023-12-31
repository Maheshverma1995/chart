import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const Three = () => {
  return (
    <div>
      <div className='container-fluid' style={{ marginTop: 100 }}>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>react charts Three</h1>
            <BarChart width={1200}
              height={500}
              data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="red" />
              <Bar dataKey="uv" fill="blue" />
              <Bar dataKey="amt" fill="orange" />
            </BarChart>

            <table class="table table-bordred">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">UV</th>
                  <th scope="col">PV</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d) => {
                  return (
                    <tr>
                      <th scope="row">{d.name}</th>
                      <td>{d.uv}</td>
                      <td>{d.pv}</td>
                      <td>{d.amt}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Three
