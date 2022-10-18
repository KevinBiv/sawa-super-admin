import React, { useState } from "react";
import NameFilter from "../../components/filters/NameFilter";
import LatestExpenses from "../../components/statistics/LatestExpenses";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Modal, Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import SawaAdminWalletAmount from "../../components/home/SawaAdminWalletAmount";
import ClientWallets from "../../components/wallets/ClientWallets";


function Wallets() {
    const [searchText, setSearchText] = useState(null);
    const { isFetchingIncomesStatistics, incomesStatistics, expensesStatistics } =
        useSelector(({ Statistics }) => Statistics);
      
  return (
    <div className='md:pt-14 pb-6 mx-6 sm:mx-10'>
        <div className="grid lg:grid-cols-5 justify-between items-center">
            <div className="col-span-3">
                <h1>Sawa Wallets</h1>
                <p>All wallets available on the platform</p>
            </div>
            <div></div>
            <div className="col-start-2">
                <NameFilter searchText={searchText} setSearchText={setSearchText} />
            </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-4">

            <div className="col-span-2 grid lg:grid-cols-5 gap-2">
                <div className="bg-white p-4 col-span-3">
                    <div>
                        <Line
                            data={{
                            labels: expensesStatistics?.labels,
                            datasets: [
                                {
                                label: "Expenses statistics",
                                data: expensesStatistics?.income_numbers,
                                display: false,
                                backgroundColor: "rgba(46, 139, 192, 0.15)",
                                tension: 0.6,
                                //pointRadius:0,
                                fill: true,
                                borderColor: "#2E8BC0",
                                color: "#2E8BC0",
                                },
                            ],
                            }}
                            height={300}
                            width={400}
                            options={{
                            maintainAspectRatio: false,
                            responsive: true,
                            scales: {
                                y: {
                                display: true,
                                beginAtZero: true,
                                min: 0,
                                max: 1000,
                                suggestedMax: 1000,
                                grid: {
                                    display: true,
                                },
                                ticks: {
                                    display: true,
                                    maxTicksLimit: 200,
                                    stepSize: 200,
                                    color: "#8694AF",
                                    callback: function (value, index, ticks) {
                                    if (value === 1000) {
                                        return value / 1000 + " M";
                                    } else {
                                        return value + " K";
                                    }
                                    },
                                },
                                },
                                x: {
                                display: true,
                                grid: {
                                    display: false,
                                },
                                ticks: {
                                    color: "#8694AF",
                                },
                                },
                            },
                            plugins: {
                                title: {
                                display: false,
                                text: "Income",
                                align: "start",
                                color: "#6b7280",
                                font: { size: "12px", weight: "normal" },
                                },
                                legend: {
                                display: false,
                                position: "top",
                                labels: {
                                    color: "rgba(64, 137, 237, 1)",
                                },
                                title: {
                                    text: "Students",
                                    hidden: false,
                                },
                                },
                                tooltip: {
                                callbacks: {
                                    label: function (context) {
                                    var label = context.label;
                                    var currentValue = context.raw;
                                    if (currentValue >= 1000) {
                                        return currentValue / 1000 + " M";
                                    } else {
                                        return currentValue + " K";
                                    }
                                    // return currentValue + " K";
                                    },
                                },
                                },
                            },
                            }}
                        />
                    </div>
                    <SawaAdminWalletAmount />
                </div>
                
                <div className="col-span-2 flex flex-col gap-2">
                    <div className="text-center text-white bg-ligherdarkblue flex flex-col py-4 gap-2 justify-between items-center">
                        <p className="text-xs mt-4">Business company’s wallet</p>
                        <p className="text-4xl font-bold mb-4">12,500,000</p>  
                    </div>
                    <div className="text-center text-white bg-ligherdarkblue flex flex-col py-4 gap-2 justify-between items-center">
                        <p className="text-xs mt-4">Business company’s wallet</p>
                        <p className="text-4xl font-bold mb-4">12,500,000</p>  
                    </div>
                    <div className="text-center text-white bg-ligherdarkblue flex flex-col py-4 gap-2 justify-between items-center">
                        <p className="text-xs mt-4">Business company’s wallet</p>
                        <p className="text-4xl font-bold mb-4">12,500,000</p>  
                    </div>
                </div>
            </div>

            <div className="col-span-1">
                <div className="col-span-3 mx-auto w-full mt-4 overflow-auto">
                <Tabs
                    defaultActiveKey="Recharge-report"
                    id="transport-services-tab"
                    className="mb-3 bg-white py-2 custom-tab text-sm"
                >
                    <Tab eventKey="Payments Made Today (120)" title="Client wallet">
                        <ClientWallets />
                    </Tab>
                    <Tab eventKey="Top Ups Made Today" title="Company wallets">
                    <h1>Goodbye World</h1>
                    </Tab>
                    <Tab eventKey="Withdrawals Made Today" title="TSP Wallets">
                    <h1>Goodbye World</h1>
                    </Tab>
                </Tabs>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Wallets;