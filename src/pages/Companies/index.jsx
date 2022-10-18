import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NameFilter from "../../components/filters/NameFilter";
import TableRowShimmers from "../../components/loaders/TableRowShimmers";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import AddMember from "../../components/people/AddMember";
import useTable from "../../utils/useTable";
import TablePageFilter from "../../components/filters/TablePageFilter";
import { generatePdfMembers } from "../../store/actions";
import DeleteMember from "../../components/people/DeleteMember";
import UpdateMember from "../../components/people/UpdateMember";

import rba from "../../assets/images/image 10.png";

function Companies() {
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
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <h5 className="text-2xl text-darkblue font-bold">Companies</h5>
          <p className="text-sm text-lightergray font-semibold mt-1">
            Companies that uses sawa services
          </p>
        </div>
        <div className="flex md:space-x-4 items-center flex-wrap">
          <button className="bg-ligherdarkblue text-white py-2 px-4 rounded">52 Companies</button>
          <NameFilter searchText={searchText} setSearchText={setSearchText} />
        </div>
      </div>

      <div className=" rounded-1">
        <div className="overflow-auto ">
          <table
            className="table table-borderless  space-y-2"
            id="people-table"
          >
            <thead className="bg-darkblue rounded-2 ">
              <tr className="border-b-15 border-paleblue">
                <td className="text-white text-sm py-4">Company name</td>
                <td className="text-white text-sm py-4">SawaID</td>
                <td className="text-white text-sm py-4">Services used</td>
                <td className="text-white text-sm py-4">Employees</td>
                <td className="text-white text-sm py-4">Address</td>
                <td className="text-white text-sm py-4">Phone</td>
                <td className="text-white text-sm py-4">Email</td>
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
                      <div className="">
                        <img src={rba} alt="" className="inline" />
                        <p className="inline mx-2">RBA Rwanda</p>
                      </div>
                    </td>

                    <td className="font-bold text-xs py-3 text-darkblue">
                      <p>#Comp123</p>
                    </td>
                    <td className="font-bold text-xs py-3 text-boldgray">
                      <p>2 services</p>
                    </td>
                    <td className="font-bold text-xs py-3 text-boldgray">
                      <p>152 Employees</p>
                    </td>

                    <td className="font-bold text-xs py-3 text-boldgray">
                      <p>Kigali,Rwanda</p>
                    </td>

                    <td className="font-bold text-xs pt-3 text-darkblue w-52">
                      <p>+250 781 350 317</p>
                    </td>

                    <td className="font-bold text-xs pt-3 text-darkblue w-52">
                      <p>Sulfo@sulforwanda.com</p>
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
      <div className="relative">
        {people?.length > 6 && (
          <TablePageFilter
            range={range}
            slice={slice}
            setPage={setPage}
            page={page}
          />
        )}
        <button
          onClick={() => dispatch(generatePdfMembers())}
          className="flex items-center absolute right-0 bottom-0"
        >
          <svg
            className="h-8 w-8"
            width="46"
            height="58"
            viewBox="0 0 46 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.57 25.259C33.719 25.05 33.777 24.916 33.8 24.844C33.677 24.779 33.514 24.647 32.625 24.647C32.12 24.647 31.486 24.669 30.814 24.755C31.629 25.382 31.828 25.699 32.361 25.699C32.594 25.7 33.262 25.69 33.57 25.259Z"
              fill="#1E355C"
            />
            <path
              d="M14.5361 32.634C14.6851 32.587 15.5551 32.19 17.1761 29.198C15.0381 30.399 14.1681 31.386 14.1061 31.942C14.0951 32.034 14.0681 32.276 14.5361 32.634Z"
              fill="#1E355C"
            />
            <path
              d="M45.5 39V13.978C45.5 13.212 45.408 12.645 44.95 12.186L33.313 0.55C32.964 0.201 32.48 0 31.985 0H2.963C1.777 0 0.5 0.916 0.5 2.926V39H45.5ZM31.5 3.391C31.5 2.933 32.053 2.704 32.377 3.028L42.472 13.123C42.796 13.447 42.567 14 42.109 14H31.5V3.391ZM12.432 31.755C12.614 30.127 14.627 28.423 18.417 26.687C19.921 23.391 21.352 19.33 22.205 15.937C21.207 13.765 20.237 10.947 20.944 9.294C21.192 8.715 21.501 8.271 22.078 8.079C22.306 8.003 22.882 7.907 23.094 7.907C23.598 7.907 24.041 8.556 24.355 8.956C24.65 9.332 25.319 10.129 23.982 15.758C25.33 18.542 27.24 21.378 29.07 23.32C30.381 23.083 31.509 22.962 32.428 22.962C33.994 22.962 34.943 23.327 35.33 24.079C35.65 24.701 35.519 25.428 34.94 26.239C34.383 27.018 33.615 27.43 32.72 27.43C31.504 27.43 30.088 26.662 28.509 25.145C25.672 25.738 22.358 26.796 19.681 27.967C18.845 29.741 18.044 31.17 17.298 32.218C16.275 33.656 15.391 34.325 14.516 34.325C14.168 34.325 13.834 34.212 13.549 33.999C12.506 33.216 12.366 32.347 12.432 31.755Z"
              fill="#1E355C"
            />
            <path
              d="M15.222 45.858C15.08 45.662 14.882 45.498 14.627 45.366C14.372 45.234 14.034 45.168 13.615 45.168H12.385V49.16H13.889C14.089 49.16 14.287 49.126 14.484 49.057C14.68 48.989 14.86 48.877 15.024 48.722C15.188 48.567 15.32 48.351 15.42 48.073C15.52 47.795 15.57 47.451 15.57 47.041C15.57 46.877 15.547 46.687 15.502 46.474C15.456 46.26 15.363 46.055 15.222 45.858Z"
              fill="#1E355C"
            />
            <path
              d="M23.3429 18.174C22.6269 20.648 21.6839 23.319 20.6689 25.738C22.7589 24.927 25.0309 24.219 27.1649 23.718C25.8149 22.15 24.4659 20.192 23.3429 18.174Z"
              fill="#1E355C"
            />
            <path
              d="M0.5 41V56C0.5 57.009 1.72 58 2.963 58H43.037C44.28 58 45.5 57.009 45.5 56V41H0.5ZM16.896 48.429C16.723 48.844 16.481 49.193 16.171 49.475C15.861 49.757 15.487 49.976 15.05 50.131C14.613 50.286 14.129 50.363 13.601 50.363H12.384V54H10.743V43.924H13.641C14.069 43.924 14.493 43.992 14.912 44.129C15.331 44.266 15.707 44.471 16.04 44.744C16.373 45.017 16.642 45.348 16.847 45.735C17.052 46.122 17.155 46.557 17.155 47.041C17.156 47.552 17.069 48.014 16.896 48.429ZM26.952 50.808C26.774 51.396 26.549 51.888 26.275 52.285C26.001 52.682 25.694 52.994 25.352 53.222C25.01 53.45 24.68 53.62 24.361 53.735C24.042 53.849 23.75 53.922 23.486 53.954C23.222 53.984 23.026 54 22.898 54H19.084V43.924H22.119C22.967 43.924 23.712 44.059 24.354 44.327C24.996 44.595 25.53 44.954 25.954 45.4C26.378 45.846 26.694 46.355 26.904 46.924C27.113 47.493 27.218 48.079 27.218 48.681C27.219 49.511 27.13 50.22 26.952 50.808ZM35.9 45.168H31.265V48.34H35.476V49.461H31.265V54H29.597V43.924H35.9V45.168Z"
              fill="#1E355C"
            />
            <path
              d="M24.7651 46.282C24.4781 45.949 24.0881 45.68 23.5961 45.475C23.1041 45.27 22.4661 45.167 21.6821 45.167H20.7251V52.796H22.3521C23.4641 52.796 24.2661 52.441 24.7581 51.73C25.2501 51.019 25.4961 49.989 25.4961 48.64C25.4961 48.221 25.4461 47.806 25.3461 47.396C25.2451 46.986 25.0521 46.615 24.7651 46.282Z"
              fill="#1E355C"
            />
            <path
              d="M22.736 9.71198C22.638 9.74498 21.406 11.469 22.832 12.928C23.781 10.813 22.779 9.69798 22.736 9.71198Z"
              fill="#1E355C"
            />
          </svg>
          <svg
            className="h-8 w-8"
            width="53"
            height="55"
            viewBox="0 0 53 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.0265 36.8016C35.5204 36.8016 35.1155 37.184 35.0593 37.6902C34.6206 42.0317 30.9539 45.4172 26.4887 45.4172C22.0347 45.4172 18.368 42.0317 17.9182 37.6902C17.8619 37.1953 17.457 36.8016 16.9509 36.8016H5.25353C2.80159 36.8016 0.810791 38.7924 0.810791 41.2444V50.5573C0.810791 53.0092 2.80159 55 5.25353 55H47.7464C50.1983 55 52.1891 53.0092 52.1891 50.5573V41.2556C52.1891 38.8037 50.1983 36.8129 47.7464 36.8129H36.0265V36.8016Z"
              fill="#2E8BC0"
            />
            <path
              d="M33.136 22.3374L29.6605 25.8129V3.16053C29.6605 1.41718 28.2434 0 26.5 0C24.7567 0 23.3395 1.41718 23.3395 3.16053V25.8129L19.864 22.3374C18.7955 21.2689 17.0859 20.999 15.8262 21.8425C14.1053 22.9898 13.9366 25.3405 15.3201 26.7239L24.6329 36.0368C25.6677 37.0716 27.3436 37.0716 28.3783 36.0368L37.6912 26.7239C39.0747 25.3405 38.9059 22.9898 37.1851 21.8425C35.9141 20.9877 34.2045 21.2577 33.136 22.3374Z"
              fill="#2E8BC0"
            />
          </svg>
        </button>
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

export default Companies;
