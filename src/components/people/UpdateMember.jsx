import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import Select from "react-select";
function UpdateMember({ handleClose }) {
  const [genderOptions, setGenderOptions] = useState([
    { value: "Male", label: "Male", id: 1 },
    { value: "Female", label: "Female", id: 2 },
    { value: "Other", label: "Other", id: 3 },
  ]);
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="bg-paleindigo space-y-8 p-5 ">
      <div className="flex justify-between items-center">
        <h5 className="text-darkblue font-bold text-base"> Update a member</h5>
        <button type="button" className="" onClick={() => handleClose()}>
          <IoCloseCircle className="text-ligherdarkblue text-4xl" />
        </button>
      </div>
      <form className="space-y-2">
        <div className="flex items-center bg-white pl-3 rounded-1">
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input
            type="text"
            name="employee_name"
            id="username"
            autoComplete="employee_name"
            className="flex-1 appearance-none rounded-none relative block w-full px-3 py-3 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
            placeholder="Username"
          />
        </div>
        <div className="flex items-center bg-white pl-3 rounded-1">
          <label htmlFor="sawa_id" className="sr-only">
            SawaID
          </label>
          <input
            type="text"
            name="age"
            id="sawa_id"
            autoComplete="age"
            className="flex-1 appearance-none rounded-none relative block w-full px-3 py-3 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
            placeholder="SawaID"
          />
        </div>
        <div className=" bg-white  rounded-1 ">
          <label htmlFor="services" className="sr-only">
            Services Used
          </label>
          <Select
            className="text-xs text-lightgray w-100 focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={genderOptions}
            id="services"
            isSearchable={true}
            placeholder="Services Used"
          />
        </div>
        <div className="flex items-center bg-white pl-3 rounded-1">
          <label htmlFor="verification" className="sr-only">
            Verification Status
          </label>
          <input
            type="text"
            name="sawa_id"
            id="verification"
            autoComplete="sawa_id"
            className="flex-1 appearance-none rounded-none relative block w-full px-3 py-3 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
            placeholder="Verification Status"
          />
        </div>
        <button
          type="button"
          onClick={() => handleClose()}
          className="bg-ligherdarkblue py-2 w-100 text-white text-sm"
        >
          Update Member
        </button>
      </form>
    </div>
  );
}

export default UpdateMember;
