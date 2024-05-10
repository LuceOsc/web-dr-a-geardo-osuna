import React, { useState } from "react";

const Accordion = ({ title, answer, image, alt, titlec }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 font-moriston-semibold text-[1.5rem] max-xl:text-[1.2rem] max-[700px]:text-[1rem]">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full"
      >
        <div className="flex items-center gap-3">
          <img className=" h-auto w-[2.5rem] max-[500px]:w-[1.8rem]" src={image} alt={alt} />
          <span className="text-[#024b94] text-left">{title}</span>
        </div>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className=" fill-[#024b94] shrink-0 ml-8 "
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="6"
            width="16"
            height="4"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="6"
            width="16"
            height="4"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-[#5e676f] text-[1.2rem] ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden ml-[3.3rem] pt-[1rem] leading-loose max-[700px]:text-[.9rem]">
          <span className="text-[#1491c5]"> {titlec} </span>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
