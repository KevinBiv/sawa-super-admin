import React from "react";
import verification from "../../assets/images/verification 1.png";
import johnDoe from "../../assets/images/image 6.png";
import horizontalLine from "../../assets/images/Line 17.png";
import verticalLine from "../../assets/images/Line 22.png";
import money from "../../assets/images/money.png";
import phone from "../../assets/images/phone.png";

function VerifiedUser() {
    return(
        <div className="bg-white p-4 flex flex-col justify-start items-center align-center">

              <img src={johnDoe} alt="" className="w-full" />
              <h1 className="text-2xl font-bold text-darkblue mt-2 mb-4">John Doe</h1>

              <img src={horizontalLine} alt="" className="w-full" />

              <div className="flex justify-between items-center w-full my-2">
                <div>
                  <p className="text-ligherdarkblue text-sm font-semibold">Sawa ID</p>
                  <p className="text-sm">#Sawa123</p>
                </div>
                <img src={verticalLine} alt="" />
                <div>
                  <p className="text-ligherdarkblue text-sm font-semibold">Wallet ID</p>
                  <p className="text-sm">#Wllt198</p>
                </div>
              </div>

              <img src={horizontalLine} alt="" className="w-full" />

              <div className="my-2 w-full">
                <p className="text-ligherdarkblue text-sm font-semibold">Services consumed</p>
                <div className="grid md:grid-cols-3 gap-2">
                  <button className="bg-paleindigo py-2 px-4 text-xs">Tap&Go</button>
                  <button className="bg-paleindigo py-2 px-4 text-xs">Yego Moto</button>
                  <button className="bg-paleindigo py-2 px-4 text-xs">Safari Bus</button>
                </div>
              </div>

              <img src={horizontalLine} alt="" className="w-full" />

              <div className="flex justify-between items-center w-full my-2">
                <div>
                  <p className="text-ligherdarkblue text-sm font-semibold">Status</p>
                  <div>
                    <img src={verification} alt="" className="inline" />
                    <p className="inline">verified</p>
                  </div>
                </div>
                <div>
                  <p className="text-ligherdarkblue text-sm font-semibold">Phone</p>
                  <div>
                    <img src={phone} alt="" className="inline" />
                    <p className="inline">+250 781 784 317</p>
                  </div>
                </div>
              </div>

              <img src={horizontalLine} alt="" className="w-full" />

              <div className="flex justify-between items-center w-full my-2">
                <div>
                  <p className="text-ligherdarkblue text-sm font-semibold">Balance Now</p>
                  <div className="flex justify-between items-center gap-1">
                    <img src={money} alt="" />
                    <p>23,500Rwf</p>
                  </div>
                </div>
                <img src={verticalLine} alt="" className="relative left-3" />
                <div>
                  <p className="text-ligherdarkblue text-sm font-semibold">Daily expenses</p>
                  <div className="flex justify-between items-center gap-1">
                    <img src={money} alt="" />
                    <p>23,500Rwf</p>
                  </div>
                </div>
              </div>

        </div>
    )
}

export default VerifiedUser;