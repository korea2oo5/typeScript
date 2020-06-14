import React from 'react'
import Layout from "../components/Layout";
import { Line } from 'react-chartjs-2';

function timeScale() {
    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Revenue',
                fill: false,
                backgroundColor: 'blue',
                borderColor: 'blue',
                pointBorderColor: 'blue',
                pointRadius: 1,
                data: [100, 200, 300, 400, 200, 300, 600, 800, 500, 400, 500, 800]
            }
        ]
    }
    return (
        <Layout>
            <Line data={lineData} />
        </Layout>
    )
}
export default timeScale