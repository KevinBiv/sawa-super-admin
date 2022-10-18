import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DayFilter from "../filters/DayFilter";

import verticalLine from "../../assets/images/Line 1.png";

function GeneralStatistics() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const history = useHistory();
  return (
    <div className="col-span-2 grid lg:grid-cols-2 lg:gap-4 px-10 py-10 bg-ligherdarkblue rounded-3">
      <div className="grid lg:grid-cols-2 gap-4 justify-items-center justify-center">
        <div className="flex space-x-3 text-white">
          <div className="grid grid-cols-1" role="button" onClick={() => history.push("/dashboard/finances")}>
            <div>
              <p className="text-white font-semibold text-xs">Sawa Company’s Balance</p>
              <p className="font-bold text-white text-xl">
                19,500,000<span className="text-xs">Rwf</span>
              </p>
            </div>
            {/* <img className="justify-self-center" src={verticalLine} alt="" /> */}
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="grid grid-cols-1" role="button" onClick={() => history.push("/dashboard/people")}>
            <div>
              <p className="text-white font-semibold text-xs">Business company’s Balance</p>
              <p className="font-bold text-white text-xl">9,500,000<span className="text-xs">Rwf</span></p>
            </div>
            {/* <img className="justify-self-center" src={verticalLine} alt="" /> */}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="flex space-x-3">
        
          <div className="grid grid-cols-1" role="button" onClick={() => history.push("/dashboard/finances")}>
            <div>
              <p className="text-white font-semibold text-xs">Individuals wallet Balance</p>
              <p className="font-bold text-white text-xl">
                2,120,000<span className="text-xs">Rwf</span>
              </p>
            </div>
            {/* <img className="justify-self-center mx-4" src={verticalLine} alt="" /> */}
          </div>
        
        </div>
        <div className="flex space-x-3">
          <div className="grid" role="button" onClick={() => history.push("/dashboard/finances")}>
            <div>
              <p className="text-white font-semibold text-xs">Service providers balance</p>
              <p className="font-bold text-white text-xl">
                6,500,000<span className="text-xs">Rwf</span>
              </p>
            </div>
            {/* <img className="justify-self-end" src={verticalLine} alt="" /> */}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default GeneralStatistics;
