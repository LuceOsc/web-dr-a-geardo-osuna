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
    <div className="flex flex-col gap-[3rem] items-center px-[1rem] py-[3rem] ">
      <div className=" text-center ">
        <h5 className="font-moriston-semibold text-[#024b94] text-[3rem]">
          {title}
        </h5>
        <p className="text-[1.6rem] text-[#5e676f] font-moriston-personal-light">
          {parrafo}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[15rem] text-white max-xl:gap-12 ">
        <button className="text-[1.8rem] px-[1rem] py-[.7rem] bg-[#024b94]">
          {btn1}
        </button>
        <button className="text-[1.7rem] px-[3rem] py-[.7rem] bg-[#5e676f]">
          {btn2}
        </button>
        <button className="text-[1.7rem] px-[3rem] py-[.7rem] bg-[#5e676f]">
          {btn3}
        </button>
      </div>
      <div className="flex flex-col gap-10 items-center font-moriston-semibold ">
        <h6 className=" text-[1.5rem] text-[#024b94]"> {title2} </h6>
        <div className=" flex flex-col gap-3 text-center ">
          <p className="text-[#1491c5] text-[1.3rem]"> {parrafo2} </p>
          <p className="text-[#5e676f] font-moriston-semibold text-[1.3rem] max-w-[1050px] leading-loose">
            {parrafo3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Especial;
