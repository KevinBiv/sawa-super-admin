import React, { useState } from "react";
import { useSelector } from "react-redux";
import WeeklyFilter from "../filters/weeklyFilter";
import Shimmers from "../loaders/Shimmers";
import moment from "moment";
import { Bar, Line } from "react-chartjs-2";
import StatisticsTimeFilter from "../filters/StatisticsTimeFilter";
function LatestExpenses() {
  const { isFetchingIncomesStatistics, incomesStatistics, expensesStatistics } =
    useSelector(({ Statistics }) => Statistics);
  const [weeklyDate, setWeeklyDate] = useState({
    startDate: new Date(),
    weekRange: {
      from: moment().startOf("isoWeek").toDate(),
      to: moment().endOf("isoWeek").toDate(),
    },
    weekDays: {},
    datePickerIsOpen: false,
  });
  return (
    <div className="col-span-2">
      <h2 className="font-bold text-darkblue text-lg my-2">Latest Expenses</h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 ">
        {isFetchingIncomesStatistics ? (
          <Shimmers height="300px" width="400px" className="overflow-hidden" />
        ) : (
          <div className="col-span-3 p-6 bg-white rounded-3">
            {/* <div className=" flex">
              <WeeklyFilter
                weeklyDate={weeklyDate}
                setweeklyDate={setWeeklyDate}
              />
            </div> */}
            <div>
              <StatisticsTimeFilter />
            </div>
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
          </div>
        )}
        {isFetchingIncomesStatistics ? (
          <Shimmers height="300px" width="400px" className="overflow-hidden" />
        ) : (
          <div className="bg-ligherdarkblue px-7 py-6 space-y-6 col-span-2 rounded-3">
            <div>
              <h5 className=" text-white font-bold text-lg">Latest Invoices</h5>
              <hr className="w-10 text-white pt-0.5 " />
            </div>

            <div className="flex justify-between flex-wrap relative latest-invoice ">
              <div className="p-6">
                <p className="text-white font-bold text-sm">Station Kobil</p>
                <span className="text-center text-white text-xs">
                  12/03/2022
                </span>
              </div>
              <p className="text-white font-bold text-sm p-6">24,500Rwf</p>
            </div>
            <div className="flex justify-between flex-wrap relative latest-invoice ">
              <div className="p-6">
                <p className="text-white font-bold text-sm">Tap & Go</p>
                <span className="text-center text-white text-xs">
                  12/03/2022
                </span>
              </div>
              <p className="text-white font-bold text-sm p-6">14,500Rwf</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LatestExpenses;
