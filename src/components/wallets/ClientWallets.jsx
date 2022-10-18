import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NameFilter from "../../components/filters/NameFilter";
import TableRowShimmers from "../../components/loaders/TableRowShimmers";
import { useHistory } from "react-router-dom";
import useTable from "../../utils/useTable";
import verification from "../../assets/images/verification 1.png";


function ClientWallets() {
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
  return (
    <div>
        <div className="overflow-auto ">
            <table
              className="table table-borderless  space-y-2"
              id="people-table"
            >
              <thead className="bg-darkblue rounded-2 ">
                <tr className="border-b-15 border-paleblue">
                  <td className="text-white text-sm py-4">SawaID</td>
                  <td className="text-white text-sm py-4">Username</td>
                  <td className="text-white text-sm py-4">Wallet Balance</td>
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
                        John Doe
                      </td>

                      <td className="font-bold text-xs py-3 text-darkblue">
                        #Sawa123
                      </td>
                      <td className="font-bold text-xs py-3 text-boldgray">
                        2 services
                      </td>

                      {/* <td className="font-bold text-xs py-3 text-boldgray">
                        {person?.gender}
                      </td> */}

                    </tr>
                  ))
                )}
              </tbody>
            </table>
        </div>
    </div>
  )
}

export default ClientWallets