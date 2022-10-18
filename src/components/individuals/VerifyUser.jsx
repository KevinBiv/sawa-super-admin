import React from "react";
import UserDescription from "./UserDescription";
import imageDescriptor from "../../assets/images/image 7.png";
import smallProfile from "../../assets/images/profile 6.png";


function VerifyUser() {
    return(
        <div className="bg-white p-4 flex flex-col justify-between">
            <div className="w-full border-1 py-10 flex  justify-center items-center">
                <label htmlFor="client-profile-pic" className="text-darkblue text-lg font-bold">User 123</label>
                <input type="file" id="client-profile-pic" name="client-profile-pic" className="hidden" />
            </div>
            <div className="mt-4 border-1 py-4 px-4">
                
                <div>

                    <UserDescription img={imageDescriptor} descriptionTitle="User Image" descriptionBody="Johnimage.png" profileImg={smallProfile} />
                    <UserDescription img={imageDescriptor} descriptionTitle="User Image" descriptionBody="Johnimage.png" />
                    <UserDescription img={imageDescriptor} descriptionTitle="User Image" descriptionBody="Johnimage.png" />
                    <UserDescription img={imageDescriptor} descriptionTitle="User Image" descriptionBody="Johnimage.png" />
                    
                </div>

                <button className="bg-ligherdarkblue m-auto text-sm text-white font-semibold w-full py-2 rounded">Verify User</button>
                
            </div>
        </div>
    )
}

export default VerifyUser;