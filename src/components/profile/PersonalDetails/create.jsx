import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { createProfile, getProfile } from "../../../store/actions";

function CreatePersonalDetails(props) {
  const { profile, fetchingProfile, creatingProfile, errors } = useSelector(
    ({ Profile }) => Profile
  );
  const [biography, setBiography] = useState(null);
  const [education, setEducation] = useState(null);
  const [criminalRecord, setCriminalRecord] = useState(null);
  const [nationalIDCard, setNationalIDCard] = useState(null);
  const dispatch = useDispatch();
  const alert = useAlert();
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return (
    <div className="bg-white p-10 rounded-xl ">
      <h5 className="font-bold text-base text-darkblue text-center mb-10">
        Personal Details
      </h5>
      <div className="space-y-3">
        <div className=" flex space-x-3 items-center">
          <label
            className="text-sm text-gray-600 font-bold w-1/3"
            htmlFor="biography"
          >
            <p className="">Biography</p>
            <span className="text-xs font-normal">
              complete here in a few info about you as a nurse.
            </span>
          </label>

          <textarea
            rows=""
            cols=""
            className="text-sm text-gray-700 form-control  w-100  rounded-xl border-gray-300  focus:shadow-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 p-4"
            id="biography"
            name="biography"
            required
            disabled={!fetchingProfile && profile ? true : false}
            value={!fetchingProfile && (profile?.biography || biography)}
            onChange={(e) => setBiography(e.target.value)}
          ></textarea>
        </div>

        <div>
          <p className="text-xs text-end"> 100 Max words</p>
        </div>

        {errors && errors?.biography ? (
          <div className="rounded border border-danger px-3 py-2 mt-1 mb-2 text-xs bg-red-100">
            {errors?.biography}
          </div>
        ) : null}

        <div className="flex items-center justify-center">
          <hr className="w-5/6 text-gray-700" />
        </div>
        <div className="flex space-x-3 items-center">
          <label
            className="text-sm text-gray-600 font-bold w-1/3"
            htmlFor="education"
          >
            <p>Education</p>
            <span className="text-xs font-normal">
              Upload bachelor’s degree document.
            </span>
          </label>
          <div
            id="education"
            className="form-control flex items-center space-x-2 h-100"
          >
            <input
              type="file"
              accept="image/*,.pdf"
              id="user-education"
              disabled={!fetchingProfile && profile ? true : false}
              onChange={(e) => {
                setEducation(e.target.files[0]);
              }}
              hidden
            />
            <label
              for="user-education"
              className={
                !fetchingProfile && profile
                  ? " cursor-default"
                  : " cursor-pointer"
              }
            >
              {" "}
              <svg
                width="38"
                height="48"
                viewBox="0 0 38 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.7476 20.904C27.8709 20.731 27.9189 20.6201 27.938 20.5606C27.8362 20.5068 27.7013 20.3975 26.9656 20.3975C26.5476 20.3975 26.0229 20.4157 25.4668 20.4869C26.1413 21.0058 26.306 21.2681 26.7471 21.2681C26.9399 21.269 27.4927 21.2607 27.7476 20.904Z"
                  fill="#34BEB9"
                />
                <path
                  d="M11.9953 27.0074C12.1187 26.9686 12.8387 26.64 14.1802 24.1639C12.4108 25.1578 11.6908 25.9746 11.6395 26.4348C11.6304 26.5109 11.608 26.7112 11.9953 27.0074Z"
                  fill="#34BEB9"
                />
                <path
                  d="M37.6203 32.2759V11.568C37.6203 10.9341 37.5441 10.4648 37.1651 10.085L27.5345 0.455172C27.2457 0.166345 26.8451 0 26.4355 0H2.41725C1.43573 0 0.378906 0.758069 0.378906 2.42152V32.2759H37.6203ZM26.0341 2.80634C26.0341 2.42731 26.4917 2.23779 26.7599 2.50593L35.1143 10.8604C35.3825 11.1286 35.193 11.5862 34.8139 11.5862H26.0341V2.80634ZM10.2537 26.28C10.4043 24.9327 12.0702 23.5225 15.2068 22.0858C16.4515 19.3581 17.6357 15.9972 18.3417 13.1892C17.5157 11.3917 16.713 9.05959 17.2981 7.69159C17.5033 7.21241 17.759 6.84497 18.2366 6.68607C18.4252 6.62317 18.9019 6.54372 19.0774 6.54372C19.4945 6.54372 19.8611 7.08083 20.121 7.41186C20.3651 7.72303 20.9188 8.38262 19.8123 13.0411C20.9279 15.3451 22.5086 17.6921 24.023 19.2993C25.108 19.1032 26.0415 19.003 26.8021 19.003C28.0981 19.003 28.8835 19.3051 29.2037 19.9274C29.4686 20.4422 29.3601 21.0439 28.881 21.715C28.42 22.3597 27.7844 22.7007 27.0437 22.7007C26.0374 22.7007 24.8655 22.0651 23.5588 20.8097C21.2109 21.3004 18.4683 22.176 16.2528 23.1451C15.561 24.6132 14.8981 25.7959 14.2807 26.6632C13.4341 27.8532 12.7025 28.4069 11.9784 28.4069C11.6904 28.4069 11.4139 28.3134 11.1781 28.1371C10.3149 27.4891 10.199 26.7699 10.2537 26.28Z"
                  fill="#34BEB9"
                />
                <path
                  d="M12.5627 37.9515C12.4452 37.7892 12.2813 37.6535 12.0703 37.5443C11.8593 37.435 11.5795 37.3804 11.2328 37.3804H10.2148V40.6841H11.4595C11.625 40.6841 11.7889 40.656 11.9519 40.5989C12.1142 40.5426 12.2631 40.4499 12.3988 40.3217C12.5346 40.1934 12.6438 40.0146 12.7266 39.7846C12.8093 39.5545 12.8507 39.2698 12.8507 38.9305C12.8507 38.7948 12.8317 38.6375 12.7944 38.4612C12.7564 38.2841 12.6794 38.1145 12.5627 37.9515Z"
                  fill="#34BEB9"
                />
                <path
                  d="M19.2833 15.0406C18.6907 17.088 17.9103 19.2985 17.0703 21.3004C18.8 20.6292 20.6802 20.0433 22.4463 19.6287C21.3291 18.331 20.2127 16.7106 19.2833 15.0406Z"
                  fill="#34BEB9"
                />
                <path
                  d="M0.378906 33.931V46.3448C0.378906 47.1799 1.38856 48 2.41725 48H35.5819C36.6106 48 37.6203 47.1799 37.6203 46.3448V33.931H0.378906ZM13.948 40.0792C13.8048 40.4226 13.6046 40.7114 13.348 40.9448C13.0915 41.1782 12.7819 41.3594 12.4203 41.4877C12.0586 41.616 11.6581 41.6797 11.2211 41.6797H10.2139V44.6897H8.85587V36.3509H11.2542C11.6084 36.3509 11.9593 36.4072 12.3061 36.5206C12.6528 36.6339 12.964 36.8036 13.2396 37.0295C13.5152 37.2554 13.7378 37.5294 13.9075 37.8497C14.0771 38.1699 14.1624 38.5299 14.1624 38.9305C14.1632 39.3534 14.0912 39.7357 13.948 40.0792ZM22.2702 42.048C22.1229 42.5346 21.9367 42.9418 21.7099 43.2703C21.4832 43.5989 21.2291 43.8571 20.9461 44.0458C20.663 44.2345 20.3899 44.3752 20.1259 44.4703C19.8619 44.5647 19.6203 44.6251 19.4018 44.6516C19.1833 44.6764 19.0211 44.6897 18.9152 44.6897H15.7588V36.3509H18.2705C18.9723 36.3509 19.5888 36.4626 20.1201 36.6844C20.6515 36.9062 21.0934 37.2033 21.4443 37.5724C21.7952 37.9415 22.0567 38.3628 22.2305 38.8337C22.4035 39.3046 22.4904 39.7895 22.4904 40.2877C22.4912 40.9746 22.4175 41.5614 22.2702 42.048ZM29.6755 37.3804H25.8396V40.0055H29.3246V40.9332H25.8396V44.6897H24.4592V36.3509H29.6755V37.3804Z"
                  fill="#34BEB9"
                />
                <path
                  d="M20.4606 38.3023C20.2231 38.0268 19.9004 37.8041 19.4932 37.6345C19.086 37.4648 18.558 37.3796 17.9092 37.3796H17.1172V43.6932H18.4637C19.3839 43.6932 20.0477 43.3994 20.4548 42.811C20.862 42.2226 21.0656 41.3702 21.0656 40.2538C21.0656 39.907 21.0242 39.5636 20.9415 39.2243C20.8579 38.885 20.6982 38.5779 20.4606 38.3023Z"
                  fill="#34BEB9"
                />
                <path
                  d="M18.7812 8.03751C18.7001 8.06483 17.6805 9.49158 18.8606 10.699C19.646 8.94869 18.8168 8.02593 18.7812 8.03751Z"
                  fill="#34BEB9"
                />
              </svg>
            </label>
            <div>
              <p className="text-sm text-gray-500"></p>
              {!fetchingProfile && profile ? (
                <p className="text-sm text-gray-500">
                  {profile?.nursing_degree?.split("/").pop()}
                </p>
              ) : (
                <p className="text-sm text-gray-500">
                  {education ? education?.name : ""}
                </p>
              )}
              {errors && errors?.nursing_degree ? (
                <div className="rounded border border-danger px-3 py-2 mt-1 mb-2 text-xs bg-red-100">
                  {errors?.nursing_degree}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <hr className="w-5/6 text-gray-700" />
        </div>
        <div className="flex space-x-3 items-center">
          <label
            className="text-sm text-gray-600 font-bold w-1/3"
            htmlFor="criminalRecord"
          >
            <p>Criminal Record</p>
            <span className="text-xs font-normal">Upload document.</span>
          </label>
          <div
            id="criminalRecord"
            className="form-control flex items-center space-x-2 h-100"
          >
            <input
              type="file"
              accept="image/*,.pdf"
              id="user-criminalRecord"
              disabled={!fetchingProfile && profile ? true : false}
              onChange={(e) => {
                setCriminalRecord(e.target.files[0]);
              }}
              hidden
            />
            <label
              for="user-criminalRecord"
              className={
                !fetchingProfile && profile
                  ? " cursor-default"
                  : " cursor-pointer"
              }
            >
              {" "}
              <svg
                width="38"
                height="48"
                viewBox="0 0 38 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.7476 20.904C27.8709 20.731 27.9189 20.6201 27.938 20.5606C27.8362 20.5068 27.7013 20.3975 26.9656 20.3975C26.5476 20.3975 26.0229 20.4157 25.4668 20.4869C26.1413 21.0058 26.306 21.2681 26.7471 21.2681C26.9399 21.269 27.4927 21.2607 27.7476 20.904Z"
                  fill="#34BEB9"
                />
                <path
                  d="M11.9953 27.0074C12.1187 26.9686 12.8387 26.64 14.1802 24.1639C12.4108 25.1578 11.6908 25.9746 11.6395 26.4348C11.6304 26.5109 11.608 26.7112 11.9953 27.0074Z"
                  fill="#34BEB9"
                />
                <path
                  d="M37.6203 32.2759V11.568C37.6203 10.9341 37.5441 10.4648 37.1651 10.085L27.5345 0.455172C27.2457 0.166345 26.8451 0 26.4355 0H2.41725C1.43573 0 0.378906 0.758069 0.378906 2.42152V32.2759H37.6203ZM26.0341 2.80634C26.0341 2.42731 26.4917 2.23779 26.7599 2.50593L35.1143 10.8604C35.3825 11.1286 35.193 11.5862 34.8139 11.5862H26.0341V2.80634ZM10.2537 26.28C10.4043 24.9327 12.0702 23.5225 15.2068 22.0858C16.4515 19.3581 17.6357 15.9972 18.3417 13.1892C17.5157 11.3917 16.713 9.05959 17.2981 7.69159C17.5033 7.21241 17.759 6.84497 18.2366 6.68607C18.4252 6.62317 18.9019 6.54372 19.0774 6.54372C19.4945 6.54372 19.8611 7.08083 20.121 7.41186C20.3651 7.72303 20.9188 8.38262 19.8123 13.0411C20.9279 15.3451 22.5086 17.6921 24.023 19.2993C25.108 19.1032 26.0415 19.003 26.8021 19.003C28.0981 19.003 28.8835 19.3051 29.2037 19.9274C29.4686 20.4422 29.3601 21.0439 28.881 21.715C28.42 22.3597 27.7844 22.7007 27.0437 22.7007C26.0374 22.7007 24.8655 22.0651 23.5588 20.8097C21.2109 21.3004 18.4683 22.176 16.2528 23.1451C15.561 24.6132 14.8981 25.7959 14.2807 26.6632C13.4341 27.8532 12.7025 28.4069 11.9784 28.4069C11.6904 28.4069 11.4139 28.3134 11.1781 28.1371C10.3149 27.4891 10.199 26.7699 10.2537 26.28Z"
                  fill="#34BEB9"
                />
                <path
                  d="M12.5627 37.9515C12.4452 37.7892 12.2813 37.6535 12.0703 37.5443C11.8593 37.435 11.5795 37.3804 11.2328 37.3804H10.2148V40.6841H11.4595C11.625 40.6841 11.7889 40.656 11.9519 40.5989C12.1142 40.5426 12.2631 40.4499 12.3988 40.3217C12.5346 40.1934 12.6438 40.0146 12.7266 39.7846C12.8093 39.5545 12.8507 39.2698 12.8507 38.9305C12.8507 38.7948 12.8317 38.6375 12.7944 38.4612C12.7564 38.2841 12.6794 38.1145 12.5627 37.9515Z"
                  fill="#34BEB9"
                />
                <path
                  d="M19.2833 15.0406C18.6907 17.088 17.9103 19.2985 17.0703 21.3004C18.8 20.6292 20.6802 20.0433 22.4463 19.6287C21.3291 18.331 20.2127 16.7106 19.2833 15.0406Z"
                  fill="#34BEB9"
                />
                <path
                  d="M0.378906 33.931V46.3448C0.378906 47.1799 1.38856 48 2.41725 48H35.5819C36.6106 48 37.6203 47.1799 37.6203 46.3448V33.931H0.378906ZM13.948 40.0792C13.8048 40.4226 13.6046 40.7114 13.348 40.9448C13.0915 41.1782 12.7819 41.3594 12.4203 41.4877C12.0586 41.616 11.6581 41.6797 11.2211 41.6797H10.2139V44.6897H8.85587V36.3509H11.2542C11.6084 36.3509 11.9593 36.4072 12.3061 36.5206C12.6528 36.6339 12.964 36.8036 13.2396 37.0295C13.5152 37.2554 13.7378 37.5294 13.9075 37.8497C14.0771 38.1699 14.1624 38.5299 14.1624 38.9305C14.1632 39.3534 14.0912 39.7357 13.948 40.0792ZM22.2702 42.048C22.1229 42.5346 21.9367 42.9418 21.7099 43.2703C21.4832 43.5989 21.2291 43.8571 20.9461 44.0458C20.663 44.2345 20.3899 44.3752 20.1259 44.4703C19.8619 44.5647 19.6203 44.6251 19.4018 44.6516C19.1833 44.6764 19.0211 44.6897 18.9152 44.6897H15.7588V36.3509H18.2705C18.9723 36.3509 19.5888 36.4626 20.1201 36.6844C20.6515 36.9062 21.0934 37.2033 21.4443 37.5724C21.7952 37.9415 22.0567 38.3628 22.2305 38.8337C22.4035 39.3046 22.4904 39.7895 22.4904 40.2877C22.4912 40.9746 22.4175 41.5614 22.2702 42.048ZM29.6755 37.3804H25.8396V40.0055H29.3246V40.9332H25.8396V44.6897H24.4592V36.3509H29.6755V37.3804Z"
                  fill="#34BEB9"
                />
                <path
                  d="M20.4606 38.3023C20.2231 38.0268 19.9004 37.8041 19.4932 37.6345C19.086 37.4648 18.558 37.3796 17.9092 37.3796H17.1172V43.6932H18.4637C19.3839 43.6932 20.0477 43.3994 20.4548 42.811C20.862 42.2226 21.0656 41.3702 21.0656 40.2538C21.0656 39.907 21.0242 39.5636 20.9415 39.2243C20.8579 38.885 20.6982 38.5779 20.4606 38.3023Z"
                  fill="#34BEB9"
                />
                <path
                  d="M18.7812 8.03751C18.7001 8.06483 17.6805 9.49158 18.8606 10.699C19.646 8.94869 18.8168 8.02593 18.7812 8.03751Z"
                  fill="#34BEB9"
                />
              </svg>
            </label>
            <div>
              {!fetchingProfile && profile ? (
                <p className="text-sm text-gray-500">
                  {profile?.criminal_record?.split("/").pop()}
                </p>
              ) : (
                <p className="text-sm text-gray-500">
                  {criminalRecord ? criminalRecord?.name : ""}
                </p>
              )}
              {errors && errors?.criminal_record ? (
                <div className="rounded border border-danger px-3 py-2 mt-1 mb-2 text-xs bg-red-100">
                  {errors?.criminal_record}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <hr className="w-5/6 text-gray-700" />
        </div>
        <div className="flex space-x-3 items-center">
          <label
            className="text-sm text-gray-600 font-bold w-1/3"
            htmlFor="nationalIdCard"
          >
            <p>National ID card</p>
            <span className="text-xs font-normal">Upload document.</span>
          </label>
          <div
            id="nationalIdCard"
            className="form-control flex items-center space-x-2 h-100"
          >
            <input
              type="file"
              accept="image/*,.pdf"
              id="user-nationalIdCard"
              disabled={!fetchingProfile && profile ? true : false}
              onChange={(e) => {
                setNationalIDCard(e.target.files[0]);
              }}
              hidden
            />
            <label
              for="user-nationalIdCard"
              className={
                !fetchingProfile && profile
                  ? " cursor-default"
                  : " cursor-pointer"
              }
            >
              {" "}
              <svg
                width="38"
                height="48"
                viewBox="0 0 38 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.7476 20.904C27.8709 20.731 27.9189 20.6201 27.938 20.5606C27.8362 20.5068 27.7013 20.3975 26.9656 20.3975C26.5476 20.3975 26.0229 20.4157 25.4668 20.4869C26.1413 21.0058 26.306 21.2681 26.7471 21.2681C26.9399 21.269 27.4927 21.2607 27.7476 20.904Z"
                  fill="#34BEB9"
                />
                <path
                  d="M11.9953 27.0074C12.1187 26.9686 12.8387 26.64 14.1802 24.1639C12.4108 25.1578 11.6908 25.9746 11.6395 26.4348C11.6304 26.5109 11.608 26.7112 11.9953 27.0074Z"
                  fill="#34BEB9"
                />
                <path
                  d="M37.6203 32.2759V11.568C37.6203 10.9341 37.5441 10.4648 37.1651 10.085L27.5345 0.455172C27.2457 0.166345 26.8451 0 26.4355 0H2.41725C1.43573 0 0.378906 0.758069 0.378906 2.42152V32.2759H37.6203ZM26.0341 2.80634C26.0341 2.42731 26.4917 2.23779 26.7599 2.50593L35.1143 10.8604C35.3825 11.1286 35.193 11.5862 34.8139 11.5862H26.0341V2.80634ZM10.2537 26.28C10.4043 24.9327 12.0702 23.5225 15.2068 22.0858C16.4515 19.3581 17.6357 15.9972 18.3417 13.1892C17.5157 11.3917 16.713 9.05959 17.2981 7.69159C17.5033 7.21241 17.759 6.84497 18.2366 6.68607C18.4252 6.62317 18.9019 6.54372 19.0774 6.54372C19.4945 6.54372 19.8611 7.08083 20.121 7.41186C20.3651 7.72303 20.9188 8.38262 19.8123 13.0411C20.9279 15.3451 22.5086 17.6921 24.023 19.2993C25.108 19.1032 26.0415 19.003 26.8021 19.003C28.0981 19.003 28.8835 19.3051 29.2037 19.9274C29.4686 20.4422 29.3601 21.0439 28.881 21.715C28.42 22.3597 27.7844 22.7007 27.0437 22.7007C26.0374 22.7007 24.8655 22.0651 23.5588 20.8097C21.2109 21.3004 18.4683 22.176 16.2528 23.1451C15.561 24.6132 14.8981 25.7959 14.2807 26.6632C13.4341 27.8532 12.7025 28.4069 11.9784 28.4069C11.6904 28.4069 11.4139 28.3134 11.1781 28.1371C10.3149 27.4891 10.199 26.7699 10.2537 26.28Z"
                  fill="#34BEB9"
                />
                <path
                  d="M12.5627 37.9515C12.4452 37.7892 12.2813 37.6535 12.0703 37.5443C11.8593 37.435 11.5795 37.3804 11.2328 37.3804H10.2148V40.6841H11.4595C11.625 40.6841 11.7889 40.656 11.9519 40.5989C12.1142 40.5426 12.2631 40.4499 12.3988 40.3217C12.5346 40.1934 12.6438 40.0146 12.7266 39.7846C12.8093 39.5545 12.8507 39.2698 12.8507 38.9305C12.8507 38.7948 12.8317 38.6375 12.7944 38.4612C12.7564 38.2841 12.6794 38.1145 12.5627 37.9515Z"
                  fill="#34BEB9"
                />
                <path
                  d="M19.2833 15.0406C18.6907 17.088 17.9103 19.2985 17.0703 21.3004C18.8 20.6292 20.6802 20.0433 22.4463 19.6287C21.3291 18.331 20.2127 16.7106 19.2833 15.0406Z"
                  fill="#34BEB9"
                />
                <path
                  d="M0.378906 33.931V46.3448C0.378906 47.1799 1.38856 48 2.41725 48H35.5819C36.6106 48 37.6203 47.1799 37.6203 46.3448V33.931H0.378906ZM13.948 40.0792C13.8048 40.4226 13.6046 40.7114 13.348 40.9448C13.0915 41.1782 12.7819 41.3594 12.4203 41.4877C12.0586 41.616 11.6581 41.6797 11.2211 41.6797H10.2139V44.6897H8.85587V36.3509H11.2542C11.6084 36.3509 11.9593 36.4072 12.3061 36.5206C12.6528 36.6339 12.964 36.8036 13.2396 37.0295C13.5152 37.2554 13.7378 37.5294 13.9075 37.8497C14.0771 38.1699 14.1624 38.5299 14.1624 38.9305C14.1632 39.3534 14.0912 39.7357 13.948 40.0792ZM22.2702 42.048C22.1229 42.5346 21.9367 42.9418 21.7099 43.2703C21.4832 43.5989 21.2291 43.8571 20.9461 44.0458C20.663 44.2345 20.3899 44.3752 20.1259 44.4703C19.8619 44.5647 19.6203 44.6251 19.4018 44.6516C19.1833 44.6764 19.0211 44.6897 18.9152 44.6897H15.7588V36.3509H18.2705C18.9723 36.3509 19.5888 36.4626 20.1201 36.6844C20.6515 36.9062 21.0934 37.2033 21.4443 37.5724C21.7952 37.9415 22.0567 38.3628 22.2305 38.8337C22.4035 39.3046 22.4904 39.7895 22.4904 40.2877C22.4912 40.9746 22.4175 41.5614 22.2702 42.048ZM29.6755 37.3804H25.8396V40.0055H29.3246V40.9332H25.8396V44.6897H24.4592V36.3509H29.6755V37.3804Z"
                  fill="#34BEB9"
                />
                <path
                  d="M20.4606 38.3023C20.2231 38.0268 19.9004 37.8041 19.4932 37.6345C19.086 37.4648 18.558 37.3796 17.9092 37.3796H17.1172V43.6932H18.4637C19.3839 43.6932 20.0477 43.3994 20.4548 42.811C20.862 42.2226 21.0656 41.3702 21.0656 40.2538C21.0656 39.907 21.0242 39.5636 20.9415 39.2243C20.8579 38.885 20.6982 38.5779 20.4606 38.3023Z"
                  fill="#34BEB9"
                />
                <path
                  d="M18.7812 8.03751C18.7001 8.06483 17.6805 9.49158 18.8606 10.699C19.646 8.94869 18.8168 8.02593 18.7812 8.03751Z"
                  fill="#34BEB9"
                />
              </svg>
            </label>
            <div>
              {!fetchingProfile && profile ? (
                <p className="text-sm text-gray-500">
                  {profile?.national_id?.split("/").pop()}
                </p>
              ) : (
                <p className="text-sm text-gray-500">
                  {nationalIDCard ? nationalIDCard?.name : ""}
                </p>
              )}
              <p className="text-sm text-gray-500"></p>
              {errors && errors?.national_id ? (
                <div className="rounded border border-danger px-3 py-2 mt-1 mb-2 text-xs bg-red-100">
                  {errors?.national_id}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <hr className="w-5/6 text-gray-700" />
        </div>
        <button
          type="button"
          onClick={() => {
            if (!fetchingProfile && profile) {
              props.next();
            } else {
              onSubmit();
            }
          }}
          className="w-100 rounded-xl bg-lightgreen hover:opacity-90 text-white text-sm py-2"
        >
          {creatingProfile ? "Saving ..." : "next"}
        </button>
      </div>
    </div>
  );
  function onSubmit(e) {
    // e.preventDefault();
    if (creatingProfile) return;

    var formData = new FormData();
    formData.append(" biography", biography);
    formData.append("nursing_degree", education);
    formData.append("criminal_record", criminalRecord);
    formData.append("national_id", nationalIDCard);

    dispatch(createProfile(formData, alert, props?.next));
  }
}

export default CreatePersonalDetails;
