import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NameFilter from "../filters/NameFilter";
import TableRowShimmers from "../loaders/TableRowShimmers";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import AddMember from "../people/AddMember";
import useTable from "../../utils/useTable";
import TablePageFilter from "../filters/TablePageFilter";
import { generatePdfMembers } from "../../store/actions";
import DeleteMember from "../people/DeleteMember";
import UpdateMember from "../people/UpdateMember";

import verification from "../../assets/images/verification 1.png";
import johnDoe from "../../assets/images/image 6.png";
import horizontalLine from "../../assets/images/Line 17.png";
import verticalLine from "../../assets/images/Line 22.png";
import money from "../../assets/images/money.png";
import phone from "../../assets/images/phone.png";


function VerifiedClients() {
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
        <div>

            <div className="grid lg:grid-cols-3 gap-4">

            <div className=" rounded-1 col-span-2">
            <div className="overflow-auto ">
                <table
                className="table table-borderless  space-y-2"
                id="people-table"
                >
                <thead className="bg-darkblue rounded-2 ">
                    <tr className="border-b-15 border-paleblue">
                    <td className="text-white text-sm py-4">Username</td>
                    <td className="text-white text-sm py-4">SawaID</td>
                    <td className="text-white text-sm py-4">Services Used</td>
                    <td className="text-white text-sm py-4">Verification Status</td>
                    {/* <td className="text-white text-sm py-4">Sex</td> */}
                    <td className="text-white text-sm py-4"></td>
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
                        <td className="font-bold text-xs py-3 text-boldgray">
                            <div className="">
                            <img src={ verification } alt="" className="inline mx-2" />
                            <p className="inline">Verified</p>
                            </div>
                        </td>

                        {/* <td className="font-bold text-xs py-3 text-boldgray">
                            {person?.gender}
                        </td> */}

                        <td className="font-bold text-xs pt-3 text-darkblue w-52">
                            <div className="flex space-x-2">
                            <button
                                onClick={() => {
                                setOpenUpdateMemberModal(true);
                                }}
                                className=" text-sm text-ligherdarkblue border-2 border-ligherdarkblue opacity-80 hover:opacity-100 rounded-md py-1 px-3"
                            >
                                update
                            </button>
                            </div>
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

            

            </div>

        </div>
    )
}

export default VerifiedClients;