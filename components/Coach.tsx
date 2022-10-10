import Image from "next/image";
import React from "react";
import banner from "../public/1.jpeg";
import bg from "../public/bg.jpg";
const Hero = ({coach}) => {
  return (
    <div className=" bg-[#1f2428] ">
      <div className="mx-8 py-36  text-center space-y-14 text-white">
        <h2 className="font-poppins dark:text-white  font-bold sm:text-[48px] sm:leading-[52px] text-[30px] leading-[36px] xs:tracking-[-0.5%] tracking-[-0.25%] text-center">
          Meet Your Coach: <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#b673f8] from-[#4ca5ff]">
            {" "}
            {coach.heading}
          </span>
        </h2>
        <div>
          <Image
            src={coach.img}
            width="640"
            height="426"
            className=""
          />
        </div>
        <div className="space-y-6">
          <p className="font-poppins xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal dark:text-[#A3B3BC]  text-justify ">
            {coach.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
