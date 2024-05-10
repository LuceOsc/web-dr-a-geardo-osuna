import React from "react";

const Textoheader = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white font-moriston-personal-light gap-10  py-56 px-4 max-lg:py-32 max-[600px]:py-16" data-aos="fade-up" data-aos-duration="800"
    data-aos-offset="500"
    data-aos-easing="ease-in-sine"
    data-aos-mirror="true">
      <h1 className=" text-[3.5rem] text-center max-lg:text-[2.1rem] max-[600px]:text-[2rem] max-[420px]:text-[1.5rem] max-[340px]:text-[1.4rem]">
        Cuidados Paliativos, Algología y Anestesiología
      </h1>
      <h3 className=" text-[1.7rem] font-moriston-semibold max-lg:text-[1.4rem] max-[600px]:text-[1.1rem] max-[420px]:text-[1rem]">
        CLÍNICA DEL DOLOR
      </h3>
      <p className=" text-[1.7rem] max-w-[1100px] text-center leading-loose max-lg:text-[1.5rem] max-[600px]:text-[1.2rem] max-[420px]:text-[1rem]">
        Mi compromiso es ofrecer alivio al dolor, cuidado especializado y proporcionar
        soluciones personalizadas, con el fin de mejorar tu calidad de vida.
      </p>
    </div>
  );
};

export default Textoheader;
