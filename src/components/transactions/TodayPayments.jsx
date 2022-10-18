import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NameFilter from "../../components/filters/NameFilter";
import TableRowShimmers from "../../components/loaders/TableRowShimmers";
import { useHistory } from "react-router-dom";
// import { Modal } from "react-bootstrap";
// import AddMember from "../../components/people/AddMember";
import useTable from "../../utils/useTable";
// import TablePageFilter from "../../components/filters/TablePageFilter";
// import { generatePdfMembers } from "../../store/actions";
// import DeleteMember from "../../components/people/DeleteMember";
// import UpdateMember from "../../components/people/UpdateMember";

import verification from "../../assets/images/verification 1.png";
import johnDoe from "../../assets/images/image 6.png";
import horizontalLine from "../../assets/images/Line 17.png";
import verticalLine from "../../assets/images/Line 22.png";
import money from "../../assets/images/money.png";
import phone from "../../assets/images/phone.png";


function TodayPayments() {

  const { people, isFetchingPeople } = useSelector(({ People }) => People);
  const [searchText, setSearchText] = useState(null);
  const [openAddMemberModal, setOpenAddMemberModal] = useState(false);
  const [openDeleteMemberModal, setOpenDeleteMemberModal] = useState(false);
  const [openUpdateMemberModal, setOpenUpdateMemberModal] = useState(false);
  const handleClose = () => {
    setOpenAddMemberModal(false);
    setOpenDeleteMemberModal(false);
    setOpenUpdateMemberModal(false);
  };
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(people, page, 6);
  const dispatch = useDispatch();
  const history = useHistory();

    return(
        <div className=" rounded-1 col-span-2">
          <div className="overflow-auto ">
            <table
              className="table table-borderless  space-y-2"
              id="people-table"
            >
              <thead className="bg-white rounded-2 mb-4">
                <tr className="border-b-15 border-white">
                  <td className="text-darkblue text-sm py-4 font-bold">Time</td>
                  <td className="text-darkblue text-sm py-4 font-bold">Client Name</td>
                  <td className="text-darkblue text-sm py-4 font-bold">Amount Paid</td>
                  <td className="text-darkblue text-sm py-4 font-bold">Paid To</td>
                  <td className="text-darkblue text-sm py-4 font-bold">Service Provider</td>
                </tr>
              </thead>
              <tbody className="bg-white rounded-2 border-r-15 border-white border-l-15 border-b-15">
                {isFetchingPeople ? (
                  <TableRowShimmers cols={6} />
                ) : (
                  people &&
                  people.length !== 0 &&
                  slice.map((person, index) => (
                    <tr
                      className={
                        (index === 0
                          ? " border-t-8 border-paleblue "
                          : " border-l-15 border-r-15  ") +
                        "bg-whitecolor  hover:bg-paleblue rounded-xl items-center"
                      }
                      key={index}
                    >
                      {/* <td className="font-bold text-xs  py-4 text-blue-500"> {(payment.created_at&&payment.created_at.substring(0, 10))??"-"}</td> */}
                      <td className="font-bold text-xs py-3 text-boldgray">
                        12:45 AM
                      </td>

                      <td className="font-bold text-xs py-3 text-darkblue">
                        John Doe
                      </td>
                      <td className="font-bold text-xs py-3 text-boldgray">
                        1200Rwf
                      </td>
                      <td className="font-bold text-xs py-3 text-boldgray">
                        <p>Kalisa Ben</p>
                      </td>

                      {/* <td className="font-bold text-xs py-3 text-boldgray">
                        {person?.gender}
                      </td> */}

                      <td className="font-bold text-xs pt-3 text-darkblue w-52">
                        Yego Moto
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {people && people.length === 0 && !isFetchingPeople ? (
              <p className=" my-20 bg-boldgray py-3 text-sm  text-center w-100">
                no people yet !
              </p>
            ) : null}
          </div>
        </div>
    )
}

export default TodayPayments;