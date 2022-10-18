import React from "react";
import search from "../../assets/images/search.png";


function NameFilter({ searchText, setSearchText }) {
  return (
    <div className="flex space-x-3 py-2 my-1 mx-2 md:mx-0 lg:my-0 bg-white">
      <input
        id="searchtxt"
        name="searchtxt"
        type="searchtxt"
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="search a person"
        required
        className="appearance-none rounded-sm relative block w-full px-3 py-2 placeholder-lightgray text-text-lightgray rounded-t-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 text-xs"
      />
      <button className=" rounded-sm opacity-80 hover:opacity-100 px-3 ">
        <img src={search} alt="" />
      </button>
    </div>
  );
}

export default NameFilter;
