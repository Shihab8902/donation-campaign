import React from 'react';
import { PieChart, Pie, Cell, Tooltip, LabelList, XAxis } from 'recharts';


const Chart = ({ myDonations, totalDonations }) => {

    const donationPercentage = (myDonations / totalDonations) * 100;
    const remainingDonation = 100 - donationPercentage;

    const pieData = [
        { name: 'Total Donations', value: remainingDonation },
        { name: 'My Donation', value: donationPercentage },
    ]

    const pieColors = ['#FF444A', '#00C49F'];

    return (
        <div className='flex flex-col items-center justify-center overflow-x-hidden'>
            <PieChart className='mt-10' width={350} height={350}>
                <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={160}

                    fill="#8884d8"
                    labelLine={false}
                    label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                        const pieRadius = innerRadius + (outerRadius - innerRadius) * 0.5;
                        const xAxis = cx + pieRadius * Math.cos(-midAngle * (Math.PI / 180));
                        const yAxis = cy + pieRadius * Math.sin(-midAngle * (Math.PI / 180));

                        return (
                            <text className='font-bold text-4xl' x={xAxis} y={yAxis} fill="white" textAnchor="middle">
                                {(percent * 100).toFixed(1)}%
                            </text>
                        );
                    }}
                >
                    {pieData.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={pieColors[idx % pieColors.length]} />
                    ))}
                </Pie>
            </PieChart>

            <div className='flex  gap-14 items-center my-14 flex-col md:flex-row'>
                <div className='flex items-center gap-4'>
                    <span className=' text-lg'>Your Donation</span> <div className='w-[100px] h-[12px] bg-[#00C49F]'></div>
                </div>

                <div className='flex items-center gap-4'>
                    <span className='text-lg'>Total Donation</span> <div className='w-[100px] h-[12px] bg-[#FF444A]'></div>
                </div>
            </div>
        </div>
    );
}

export default Chart