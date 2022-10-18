import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NameFilter from "../../components/filters/NameFilter";
import TableRowShimmers from "../../components/loaders/TableRowShimmers";
import { useHistory } from "react-router-dom";
import { Modal, Tabs, Tab } from "react-bootstrap";
import AddMember from "../../components/people/AddMember";
import useTable from "../../utils/useTable";
import TablePageFilter from "../../components/filters/TablePageFilter";
import { generatePdfMembers } from "../../store/actions";
import DeleteMember from "../../components/people/DeleteMember";
import UpdateMember from "../../components/people/UpdateMember";

import verification from "../../assets/images/verification 1.png";
import johnDoe from "../../assets/images/image 6.png";
import horizontalLine from "../../assets/images/Line 17.png";
import verticalLine from "../../assets/images/Line 22.png";
import money from "../../assets/images/money.png";
import phone from "../../assets/images/phone.png";
import VerifiedClientProfile from "../../components/individuals/VerifiedClientProfile";
import VerifiedClients from "../../components/individuals/VerifiedClients";



function Individuals() {
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
    <div className="md:pt-14 pb-6 mx-6 sm:mx-10 space-y-6">
        
        <div className="grid lg:grid-cols-3 lg:gap-4">

            

            <div className="col-span-2 grid lg:grid-cols-2 items-center justify content-center justify-items-center">

                <div>
                    <h5 className="text-2xl text-darkblue font-bold">Individuals</h5>
                    <p className="text-sm text-lightergray font-semibold mt-1">
                        All sawa individual clients
                    </p>
                </div>

                <div className="">
                <Tabs
                defaultActiveKey="Recharge-report"
                id="transport-services-tab"
                className="mb-3 bg-white py-2 custom-tab text-sm"
                >
                <Tab eventKey="Transport App Users (2300)" title="Transport App Users (2300)" className="">
                  <VerifiedClients />
                </Tab>
                <Tab eventKey="Asset Management App Users (1320)" title="Asset App Users (1320)">
                  <h1>Goodbye World</h1>
                </Tab>
                </Tabs>
                </div>


            </div>

            <div className="grid lg:grid-cols-2">

                {/* <NameFilter searchText={searchText} setSearchText={setSearchText} /> */}

                <div className="my-1 mx-2 md:mx-0 lg:my-0">
                    <select className="bg-white rounded-sm relative block w-full py-3 px-2 placeholder-lightgray text-lightgray rounded-t-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 text-xs">
                        <option selected className="text-xs text-lightgray">
                            sort by status
                        </option>
                    </select>
                </div>

            </div>

        </div>

        <div className="relative">
            {people?.length > 6 && (
            <TablePageFilter
                range={range}
                slice={slice}
                setPage={setPage}
                page={page}
            />
            )}
        </div>

        <Modal show={openAddMemberModal} onHide={handleClose}>
        <AddMember handleClose={handleClose} />
        </Modal>
        <Modal show={openDeleteMemberModal} onHide={handleClose}>
            <DeleteMember handleClose={handleClose} />
        </Modal>
        <Modal show={openUpdateMemberModal} onHide={handleClose}>
            <UpdateMember handleClose={handleClose} />
        </Modal>
    </div>
  );
}

export default Individuals;
