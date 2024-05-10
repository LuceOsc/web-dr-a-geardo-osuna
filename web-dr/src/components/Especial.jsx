import React from "react";

const Especial = ({
  title,
  parrafo,
  btn1,
  btn2,
  btn3,
  title2,
  parrafo2,
  parrafo3,
}) => {
  return (
    <div className="flex flex-col gap-[3rem] items-center px-[1rem] py-[3rem] " data-aos="fade-up" data-aos-duration="800" data-aos-mirror="true">
      <div className=" text-center">
        <h5 className="font-moriston-semibold text-[#024b94] text-[3rem] max-sm:text-[1.8rem] max-mpeq:text-[1.4rem]">
          {title}
        </h5>
        <p className="text-[1.6rem] text-[#5e676f] font-moriston-personal-light max-sm:text-[1.4rem] max-mpeq:text-[1.2rem]">
          {parrafo}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[15rem] text-white max-xl:gap-12 ">
        <button className="text-[1.8rem] px-[1rem] py-[.7rem] bg-[#024b94] max-sm:text-[1.2rem] ">
          {btn1}
        </button>
        <button className="text-[1.7rem] px-[3rem] py-[.7rem] bg-[#5e676f] max-sm:text-[1.2rem]">
          {btn2}
        </button>
        <button className="text-[1.7rem] px-[3rem] py-[.7rem] bg-[#5e676f] max-sm:text-[1.2rem]">
          {btn3}
        </button>
      </div>
      <div className="flex flex-col gap-10 items-center font-moriston-semibold ">
        <h6 className=" text-[1.5rem] text-[#024b94] max-sm:text-[1.2rem] max-mpeq:text-[1.2rem]">
          {title2}
        </h6>
        <div className=" flex flex-col gap-3 text-center ">
          <p className="text-[#1491c5] text-[1.3rem] max-sm:text-[1.1rem]">
            {parrafo2}
          </p>
          <p className="text-[#5e676f] font-moriston-semibold text-[1.3rem] max-w-[1050px] leading-loose max-sm:text-[1rem]">
            {parrafo3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Especial;
