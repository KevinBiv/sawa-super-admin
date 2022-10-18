import React from "react";


function UserDescription(props) {
    return(
        <>
            <div className="flex justify-between items-center w-full">

            <div className="flex justify-between items-center lg:gap-4">

                <img src={props.img} alt="" />

                <div>
                    <p className="text-sm text-darkblue font-bold">{props.descriptionTitle}</p>
                    <p className="text-xs text-lightgray">{props.descriptionBody}</p>
                </div>

            </div>

            <img src={props.profileImg} alt="" />


            </div>

            <hr className="my-4" />

        </>
    )
}

export default UserDescription;