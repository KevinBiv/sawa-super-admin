import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { useSelector } from "react-redux";
import Select from "react-select";
function RequestFuelCardTopup({ handleCloseOrder, handleClose }) {
  const { people } = useSelector(({ People }) => People);
  const [selectedStaff, setSelectedStaff] = useState(null);
  return (
    <div className="bg-paleindigo space-y-8 p-5 ">
      <div className="flex justify-between">
        <div className="space-x-2 flex items-center">
          <svg
            className="h-6 w-6"
            width="58"
            height="57"
            viewBox="0 0 58 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.1096 27.9166C39.4446 34.8858 49.9073 42.5852 50.7954 46.9627C51.4026 49.9463 49.2865 52.4222 46.6312 51.9502C43.6406 51.4202 43.5001 47.1898 44.6782 43.939C47.6417 35.7541 48.6612 31.0294 47.6371 26.5941L47.1477 24.51"
              stroke="#616161"
              stroke-width="3"
              stroke-miterlimit="10"
            />
            <path
              d="M36.6217 24.982C35.7743 24.982 36.1051 24.2651 36.1051 23.3789V11.5425C36.1051 10.6563 35.7743 9.93936 36.6217 9.93936C37.469 9.93936 38.9417 10.4337 38.9417 11.5425V23.3789C38.9417 24.2651 37.469 24.982 36.6217 24.982Z"
              fill="#82AEC0"
            />
            <path
              d="M37.2015 50.7345V12.4509C37.2015 6.55945 32.3395 1.78125 26.3446 1.78125H15.8412C9.84182 1.78125 4.98432 6.55945 4.98432 12.4509V50.7345C3.489 51.1664 2.39697 52.5246 2.39697 54.1322V54.2658C2.39697 54.7913 2.83197 55.2188 3.36666 55.2188H38.8192C39.3538 55.2188 39.7888 54.7913 39.7888 54.2658V54.1322C39.7891 53.3671 39.5371 52.6226 39.0706 52.0101C38.6042 51.3976 37.9484 50.95 37.2015 50.7345Z"
              fill="#F44336"
            />
            <path
              d="M29.7612 25.1913H12.2026C11.4005 25.1913 10.748 24.5501 10.748 23.7619V9.9839C10.748 9.19569 11.4005 8.55444 12.2026 8.55444H29.7612C30.5632 8.55444 31.2157 9.19569 31.2157 9.9839V23.7574C31.2163 23.9455 31.1791 24.1319 31.1063 24.3058C31.0335 24.4798 30.9264 24.6379 30.7913 24.7711C30.6562 24.9043 30.4956 25.01 30.3188 25.0821C30.1421 25.1542 29.9526 25.1913 29.7612 25.1913Z"
              fill="white"
            />
            <path
              d="M14.5996 13.1812H27.8807V16.5834H14.5996V13.1812Z"
              fill="#9E9E9E"
            />
            <path
              d="M14.5996 18.4181H27.8807V21.8203H14.5996V18.4181Z"
              fill="#9E9E9E"
            />
            <path
              d="M10.934 20.9297C10.9113 21.1612 10.5669 21.1612 10.5443 20.9341C10.209 17.6967 10.0187 14.4548 9.87366 11.2174C9.66069 9.42726 11.0654 7.88202 12.9458 8.00671C18.2882 7.85085 23.6577 7.85085 29.0001 8.00226C30.876 7.87757 32.2943 9.4228 32.0768 11.213C31.9318 14.4548 31.7369 17.7012 31.4016 20.943C31.379 21.1746 31.0346 21.1746 31.0119 20.943C30.663 17.5898 30.4727 14.2322 30.3187 10.8834C30.3125 10.8154 30.2988 10.7482 30.2779 10.683C30.1646 10.2823 29.7704 9.94827 29.3626 9.98835C29.1451 9.99726 12.7873 9.9928 12.5788 9.9839C12.171 9.94382 11.7768 10.2778 11.6635 10.683C11.6454 10.7498 11.6318 10.8166 11.6227 10.8834C11.4687 14.2277 11.2829 17.5809 10.934 20.9297Z"
              fill="#82AEC0"
            />
            <path
              d="M20.9842 45.4085C25.186 45.4085 28.5922 41.8417 28.5922 37.4419C28.5922 33.042 25.186 29.4752 20.9842 29.4752C16.7824 29.4752 13.3762 33.042 13.3762 37.4419C13.3762 41.8417 16.7824 45.4085 20.9842 45.4085Z"
              fill="#F5F5F5"
            />
            <path
              d="M17.613 38.5641C17.613 36.6181 20.9798 32.7973 20.9798 32.7973C20.9798 32.7973 24.3465 36.6181 24.3465 38.5641C24.3465 40.5101 22.8376 42.0909 20.9798 42.0909C19.1219 42.0909 17.613 40.5101 17.613 38.5641Z"
              fill="#212121"
            />
            <path
              d="M4.98438 48.9977H37.2016V50.73H4.98438V48.9977Z"
              fill="#C62828"
            />
            <path
              d="M7.90698 9.81467C8.30573 7.60592 10.2632 4.8717 14.3096 4.8717"
              stroke="#FF7555"
              stroke-width="5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M48.9643 26.2645L46.338 26.92L45.9053 25.2456L48.5316 24.5901L48.9643 26.2645Z"
              fill="#9E9E9E"
            />
            <path
              d="M47.4738 13.2926L50.5234 7.85977C50.7499 7.45899 51.049 7.10274 51.4069 6.81329C52.5216 5.91376 55.0184 3.88313 55.544 3.32204C56.2282 2.59173 54.9594 1.05095 54.0577 1.66102C53.3509 2.14196 50.7499 4.38634 49.6669 5.32595C49.3498 5.59759 49.0869 5.92267 48.883 6.28782L45.6794 11.9967L47.4738 13.2926Z"
              fill="#9E9E9E"
            />
            <path
              d="M45.6116 16.8017L49.88 15.9333L51.3844 21.1969C51.6245 22.1231 51.1895 22.3903 50.3558 22.5996L47.338 23.4235L45.6116 16.8017ZM44.9727 16.6235L48.6203 24.795L52.0731 23.8465C53.5186 23.4324 53.4778 22.2745 53.2558 21.4151L51.475 15.0026L44.9727 16.6235Z"
              fill="#757575"
            />
            <path
              d="M47.0434 9.40501L49.2502 10.6252C49.5447 10.7855 49.6534 11.1462 49.5039 11.4401L49.0644 12.304L50.0839 13.061C50.7949 13.5868 51.3004 14.3367 51.5158 15.1852L51.6381 15.6527L48.4844 16.4498C48.167 16.5327 47.8959 16.7356 47.7303 17.0143C47.5647 17.2931 47.5182 17.6248 47.6008 17.9372L49.0553 23.5615C49.2003 24.1671 49.2366 24.6659 48.6158 24.7995L46.1009 25.414C45.5028 25.5431 44.9092 25.1824 44.7597 24.5991L43.0016 17.7902C42.2131 14.7398 43.4275 13.7067 43.6813 13.2035C43.935 12.7003 45.2672 11.3288 45.2672 11.3288L46.178 9.65438C46.3456 9.34711 46.7353 9.23579 47.0434 9.40501Z"
              fill="#F44336"
            />
            <path
              d="M48.3937 13.0655L46.2051 11.9878"
              stroke="#FF7555"
              stroke-width="4"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
          <h5 className="text-darkblue font-bold text-lg"> Fuel Card</h5>
        </div>
        <button
          className="text-ligherdarkblue text-opacity-80 hover:text-opacity-100"
          onClick={() => handleCloseOrder()}
        >
          <IoCloseCircle className=" text-4xl" />
        </button>
      </div>
      <form className="space-y-2">
        <div className=" bg-white  rounded-1 ">
          <label htmlFor="staff" className="sr-only">
            staff
          </label>
          <Select
            className="text-xs text-lightgray w-100 focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10"
            defaultValue={selectedStaff}
            onChange={setSelectedStaff}
            options={people}
            id="staff"
            isSearchable={true}
            placeholder="Staff"
          />
        </div>
        <div className="flex items-center bg-white pl-3 rounded-1">
          <label htmlFor="amount" className="sr-only">
            Enter amount to pop up
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            autoComplete="amount"
            className="flex-1 appearance-none rounded-none relative block w-full px-3 py-3 placeholder-boldgray text-boldgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 text-xs"
            placeholder="Enter amount to pop up"
          />
        </div>
        <button
          type="button"
          onClick={() => {
            handleCloseOrder();
            handleClose();
          }}
          className="bg-ligherdarkblue opacity-80 hover:opacity-100 rounded-sm py-3 w-100 text-white text-sm"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
}

export default RequestFuelCardTopup;
