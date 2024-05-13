import React from "react";

const Cita = () => {
  return (
    <>
    <div className="py-5"></div>
      <div data-aos="zoom-in" data-aos-duration="800" className="font-moriston-personal-light flex gap-10 items-center justify-center border-solid border-2 border-sky-500 py-8 px-4 max-[650px]:flex-wrap">
        <p className="text-[1.8rem] max-w-[750px] text-center text-[#5e676f] max-[800px]:text-[1.4rem] max-mpeq:text-[1.1rem]">
          Agenda hoy mismo una consulta y da el primer paso hacia el alivio del
          dolor y una mejor calidad de vida.
        </p>
        <button className=" shadow-2xl bg-[#024b94] py-5 px-20 text-[1.8rem] text-white font-moriston-semibold tracking-[.15em] max-[800px]:text-[1.3rem] max-[800px]:px-15 max-mpeq:text-[1rem] max-mpeq:py-3">
          CITAS
        </button>
      </div>
    </>
  );
};

export default Cita;
