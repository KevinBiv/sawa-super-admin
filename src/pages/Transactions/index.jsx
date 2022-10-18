import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NameFilter from "../../components/filters/NameFilter";
import TableRowShimmers from "../../components/loaders/TableRowShimmers";
import { Modal, Tab, Tabs } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import DayFilter from "../../components/filters/DayFilter";
import TotalExpenses from "../../components/statistics/TotalExpenses";
import FilterReport from "../../components/finances/FilterReport";
import RechargeReport from "../../components/finances/RechargeReport";
import ExpensesReport from "../../components/finances/ExpensesReport";

import TodayPayments from "../../components/transactions/TodayPayments";
import buttonCircle from "../../assets/images/Ellipse 19.png";
import CompanyTransactions from "../../components/transactions/companyTransactions";
import download from "../../assets/images/download 1.png";
import TransactionsReportTypes from "../../components/transactions/TransactionsReportTypes";


function Transactions() {
  const [searchText, setSearchText] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="md:pt-14 pb-6 mx-6 sm:mx-10">
      <div>
        <div className="grid lg:grid-cols-5">
          <div className="col-span-3">
            <h5 className="text-3xl text-darkblue font-bold">Transactions</h5>
            <p className="text-sm text-lightergray font-semibold mb-3.5 xl:mb-0">
              All transactions that took place on sawa mbility
            </p>
          </div>
          <div className="col-span-2 grid lg:grid-cols-2">
            <DayFilter
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
            <NameFilter searchText={searchText} setSearchText={setSearchText} />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mt-4">

          <div className="col-span-2">

            <div className="col-span-2 grid lg:grid-cols-3 md:space-x-4 space-x-2">
              <div className="bg-ligherdarkblue text-white py-3 px-4 rounded-md">
                <p className="text-sm">Payments</p>
                <p className="">
                  <span className="text-2xl">131</span>Payments today
                </p>
              </div>

              <div className="bg-darkblue text-white py-3 px-4 rounded-md">
                <p>Top Ups</p>
                <p>
                  <span className="text-2xl">78</span>Tops up today
                </p>
              </div>

              <div className="bg-boldgray text-white py-3 px-4 rounded-md">
                <p>Withdrawals</p>
                <p>
                  <span>5</span>Withdrawals today
                </p>
              </div>

            <div className="col-span-3 mx-auto w-full mt-4 overflow-auto">
              <Tabs
                defaultActiveKey="Recharge-report"
                id="transport-services-tab"
                className="mb-3 bg-white py-2 custom-tab text-sm"
              >
                <Tab eventKey="Payments Made Today (120)" title="today's payments">
                  <TodayPayments />
                </Tab>
                <Tab eventKey="Top Ups Made Today" title="today's top ups">
                  <h1>Goodbye World</h1>
                </Tab>
                <Tab eventKey="Withdrawals Made Today" title="today's withdrawals">
                  <h1>Goodbye World</h1>
                </Tab>
              </Tabs>
            </div>

          </div>

          </div>

          <div className="flex flex-col gap-3">

            <div className="bg-white p-4">
              <button className="bg-ligherdarkblue flex justify-start gap-2 w-full items-center py-3 px-4 rounded-md text-white">
                <img src={buttonCircle} alt="" />
                TSP Income Today
              </button>
              <div className="mt-4">
                <CompanyTransactions company="Yego Moto" transactions="125 transactions" amount="7000Rwf" />
                <CompanyTransactions company="AC Group" transactions="2000 transactions" amount="500,000Rwf" />
                <CompanyTransactions company="Move" transactions="18 Transactions" amount="40,000Rwf" />
                <CompanyTransactions company="Yego Moto" transactions="125 transactions" amount="7000Rwf" />
              </div>
            </div>

            <div className="bg-white p-4">
              <button className="bg-darkblue flex justify-start gap-2 w-full items-center py-3 px-4 rounded-md text-white">
                <img src={download} alt="" />
                Export Reports
              </button>
              <div className="mt-4 flex flex-col gap-2">
              <TransactionsReportTypes type="Payment Report" />
              <TransactionsReportTypes type="Top Up Report" />
              <TransactionsReportTypes type="Withdrawal Report" />
              </div>
            </div>

          </div>  


        </div>

        
        
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body className="bg-paleindigo ">
          <FilterReport handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Transactions;
