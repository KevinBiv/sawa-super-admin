import React, {useState} from "react";

import RecentServices from "../../components/services/RecentServices";
import GeneralStatistics from "../../components/statistics/GeneralStatistics";

import LatestExpenses from "../../components/statistics/LatestExpenses";
import ServiceUsage from "../../components/statistics/ServiceUsage";
import DayFilter from "../../components/filters/DayFilter";
import NameFilter from "../../components/filters/NameFilter";
import LiveTransactions from "../../components/home/LiveTransactions";
import IncomeGenerated from "../../components/home/IncomeGenerated";
import sulfo from "../../assets/images/sulfo.png";
import details from "../../assets/images/details 3.png";
import ClientCompany from "../../components/home/ClientCompany";
import PendingPayments from "../../components/home/PendingPayments";

function Home() {
  const [searchText, setSearchText] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className=" min-h-screen">
      <div className="col-span-2 md:pt-14 pb-6 space-y-6 mx-6 sm:mx-10">
        <div className="grid lg:grid-cols-5">
          <div className="col-span-3">
            <h2 className="font-bold text-darkblue text-2xl ">Welcome to sawa!</h2>
            <p>Welcome to sawa Mobility Admin</p>
          </div>
          <div className="col-span-2 grid lg:grid-cols-2">
            <DayFilter
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
            <NameFilter searchText={searchText} setSearchText={setSearchText} />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-rows-3 gap-4">
          <GeneralStatistics />
          <LiveTransactions />
          <IncomeGenerated />
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          {/* <RecentServices />
          <ServiceUsage /> */}
          <div className="grid lg:grid-cols-5 gap-2">
            <div className="col-span-2">
              <div className="flex justify-between items-center">
                <p className="text-darkblue text-sm font-bold">Client  Companies</p>
                <button className="text-ligherdarkblue text-xs">View All</button>
              </div>
              <div className="mt-4">
                <ClientCompany profileImage={sulfo} companyName="Sulfo Rwanda Industries" employeesAndServices="152 Employees | 4 services used" details={details} />
                <ClientCompany profileImage={sulfo} companyName="Sulfo Rwanda Industries" employeesAndServices="152 Employees | 4 services used" details={details} />
                <ClientCompany profileImage={sulfo} companyName="Sulfo Rwanda Industries" employeesAndServices="152 Employees | 4 services used" details={details} />
                <ClientCompany profileImage={sulfo} companyName="Sulfo Rwanda Industries" employeesAndServices="152 Employees | 4 services used" details={details} />
              </div>
            </div>
            <div className="col-span-3">
             <div className="flex justify-between items-center">
                <p className="text-darkblue text-sm font-bold">Pending Payments</p>
                <button className="text-ligherdarkblue text-xs">View All</button>
              </div>
              <div>
                <PendingPayments />
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
