import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import TableRowShimmers from "../../components/loaders/TableRowShimmers";
function Services() {
  const { services, isFetchingServices } = useSelector(
    ({ Services }) => Services
  );
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="pt-20 pb-6  mx-10 space-y-6 service">
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <h5 className="text-lg text-darkblue font-bold">
            My Transport Services
          </h5>
        </div>
        <div className="flex md:space-x-4 items-center flex-wrap ">
          <button className="text-whitecolor bg-ligherdarkblue px-3 py-2 text-sm">
            Request a service
          </button>
        </div>
      </div>

      <div className=" rounded-1">
        <div className="  overflow-auto ">
          <table className="table table-borderless  space-y-2 ">
            <thead className="bg-white rounded-2 border-r-15 border-white border-l-15">
              <tr>
                <td className="text-darkblue font-bold text-sm py-4">ID</td>
                <td className="text-darkblue font-bold text-sm py-4">
                  Staff Name
                </td>
                <td className="text-darkblue font-bold text-sm py-4">
                  Service{" "}
                </td>
                <td className="text-darkblue font-bold text-sm py-4">
                  Amount Paid
                </td>
                <td className="text-darkblue font-bold text-sm py-4">Status</td>
              </tr>
            </thead>
            <tbody className="bg-white rounded-2 border-r-15 border-white border-l-15 border-b-15">
              {isFetchingServices ? (
                <TableRowShimmers cols={6} />
              ) : (
                services &&
                services.length !== 0 &&
                services.map((service, index) => (
                  <tr
                    className={
                      (index === 0 ? " border-t-8 border-paleblue " : " ") +
                      (index % 2 == 0
                        ? " bg-whitecolor "
                        : " bg-paleblue rounded-xl ") +
                      "items-center"
                    }
                    key={index}
                  >
                    {/* <td className="font-bold text-xs  py-4 text-blue-500"> {(payment.created_at&&payment.created_at.substring(0, 10))??"-"}</td> */}
                    <td className="font-bold text-xs py-4 text-gray-600">
                      00{service?.id}
                    </td>
                    <td className="font-bold text-xs py-4 text-gray-600">
                      {service?.staff_name}
                    </td>
                    <td className="font-bold text-xs py-4 text-gray-600">
                      {service?.service}
                    </td>

                    <td className="font-bold text-xs py-4 text-gray-600">
                      {service?.amount} Rwf
                    </td>
                    <td
                      className={
                        (service?.status === "paid"
                          ? " text-lightgreen "
                          : " text-red-500 ") + "font-bold text-xs py-4"
                      }
                    >
                      {service?.status}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {services && services.length === 0 && !isFetchingServices ? (
            <p className=" my-20 bg-gray-300 py-3 text-sm  text-center w-100">
              no service yet !
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Services;