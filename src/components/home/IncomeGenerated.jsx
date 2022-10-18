import React, { useState } from "react";
import { useSelector } from "react-redux";
import WeeklyFilter from "../filters/weeklyFilter";
import Shimmers from "../loaders/Shimmers";
import moment from "moment";
import { Bar, Line } from "react-chartjs-2";
import StatisticsTimeFilter from "../filters/StatisticsTimeFilter";

import verticalLine from "../../assets/images/activeUsersLine.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



function LatestExpenses() {
    const [hidePicker, setHidePicker] = useState(true);
    const [selectedSortDuration, setSelectedSortDuration] = useState("week");
    const [dateSelected, setDateSelected] = useState({
      startDate: new Date(),
      dateSelected: new Date(),
      weekRange: {
        from: moment().startOf("isoWeek").toDate(),
        to: moment().endOf("isoWeek").toDate(),
      },
  
      weekDays: {},
    });
    const openDatePicker = () => {
        setHidePicker(!hidePicker);
    };
    const changeStartDate = (date) => {
        setDateSelected({ ...dateSelected, dateSelected: date });
        if (selectedSortDuration === "week") {
          getWeekRange(date);
        }
    };
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
  function getWeekRange(date) {
    var weekDaysRange = {
      from: moment(date).startOf("isoWeek").toDate(),
      to: moment(date).endOf("isoWeek").toDate(),
    };
    const days = [date];
    for (let i = 1; i < 7; i += 1) {
      days.push(moment(date).add(i, "days").toDate());
    }
    setDateSelected({
      ...dateSelected,
      weekRange: weekDaysRange,
      weekDays: days,
    });
  }
  return (
    <div className="col-span-2">
      {/* <h2 className="font-bold text-darkblue text-lg my-2">Latest Expenses</h2> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
        {isFetchingIncomesStatistics ? (
          <Shimmers height="300px" width="400px" className="overflow-hidden" />
        ) : (
          <div className="col-span-2 p-6 bg-white rounded-3">
            {/* <div className=" flex">
              <WeeklyFilter
                weeklyDate={weeklyDate}
                setweeklyDate={setWeeklyDate}
              />
            </div> */}
            <div>
              <p className="text-darkblue text-sm font-bold pb-4">Income Generated</p>
              
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
        <div className="">
            <div className="flex justify-between bg-white mb-2 col-span-1 py-4 px-3">
                <div className="">
                    <p className="text-base font-bold text-ligherdarkblue">2300</p>
                    <p className="text-xs text-ligherdarkblue"><small>Active Users</small></p>
                </div>
                <div className="border-r-2">
                  
                </div>
                <div className="col-span-3">
                    <p className="text-xs">Transport App Users</p>
                    <p className="text-xs"><small><span className="text-ligherdarkblue">140</span>New users this week</small></p>
                </div>
            </div>
            <div className="flex justify-between bg-white mb-2 col-span-1 py-4 px-3">
                <div className="">
                    <p className="text-base font-bold text-ligherdarkblue">2300</p>
                    <p className="text-xs text-ligherdarkblue"><small>Active Users</small></p>
                </div>
                <div className="border-r-2">
                  
                </div>
                <div className="col-span-3">
                    <p className="text-xs">Transport App Users</p>
                    <p className="text-xs"><small><span className="text-ligherdarkblue">140</span>New users this week</small></p>
                </div>
            </div>
            <div className="flex justify-between bg-white mb-2 col-span-1 py-4 px-3">
                <div className="">
                    <p className="text-base font-bold text-ligherdarkblue">2300</p>
                    <p className="text-xs text-ligherdarkblue"><small>Active Users</small></p>
                </div>
                <div className="border-r-2">
                  
                </div>
                <div className="col-span-3">
                    <p className="text-xs">Transport App Users</p>
                    <p className="text-xs"><small><span className="text-ligherdarkblue">140</span>New users this week</small></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default LatestExpenses;
