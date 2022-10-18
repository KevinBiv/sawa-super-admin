import React from "react";
import topCircle1 from "../../assets/images/topcircle1.png";
import topCircle2 from "../../assets/images/topcircle2.png";
import bottomDots from "../../assets/images/bottom dots.png";
import carImg from "../../assets/images/car 1.png";
import circleImg from "../../assets/images/circleImg.png";

import person from "../../assets/images/Group 63.png";
import topDots from "../../assets/images/dots 3.png";

function Banner() {
  return (
    <div className="register bg-darkblue relative  justify-center items-center hidden md:flex overflow-hidden">
      {/* <img
        src={topDots}
        alt="Icon"
        className="absolute top-full right-full"
      /> */}

      <div className="w-1/2  relative flex justify-center items-center ">
        <img src={person} alt="Car Icon" className="absolute left-4" />
      </div>

      <img
        src={bottomDots}
        alt="Icon"
        className="absolute bottom-0 right-0 w-100"
      />
    </div>
  );
}

export default Banner;
