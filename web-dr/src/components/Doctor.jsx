import React from "react";
import dr1 from "../assets/images/dr-1.png";
import dr2 from "../assets/images/dr-2.png";

const Doctor = () => {
  return (
    <div className="pt-[3rem]">
      <div className="flex items-center gap-[15rem] justify-start max-[1800px]:gap-[8rem] max-[1600px]:gap-[4rem] max-xl:flex-wrap max-xl:justify-center">
        <img className="w-full max-w-[900px] max-[1600px]:max-w-[700px] max-[1400px]:max-w-[600px] max-xl:max-w-[800px]" src={dr1} alt="dr-1.png" />
        <div className="flex flex-col gap-7 p-10">
          <p className="font-moriston-semibold text-[2.3rem] text-[#024b94] max-w-[650px] max-xl:max-w-[1200px]  ">
            Recuperar tu bienestar y calidad de vida con tratamiento
            especializados para el dolor.
          </p>
          <p className="font-moriston-personal-light text-[1.8rem] text-[#5e676f] max-w-[650px] max-xl:max-w-[1200px]  ">
            Comprometidos a dar una atención especializada y un enfoque
            integral, que te permita avanzar en tu vida con menos restricciones.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-[15rem] justify-end max-[1800px]:gap-[8rem] max-[1600px]:gap-[4rem] max-xl:flex-wrap-reverse max-xl:justify-center">
        <div className="flex flex-col gap-7 p-10">
          <p className="font-moriston-semibold text-[2.8rem] text-[#024b94] max-w-[500px]  text-center max-xl:max-w-[1200px] ">
            Compromiso en el alivio y cuidado especializado.
          </p>
        </div>
        <img className="w-full max-w-[900px] max-[1600px]:max-w-[700px] max-[1400px]:max-w-[600px] max-xl:max-w-[800px]" src={dr2} alt=" dr-2.png " />
      </div>
    </div>
  );
};

export default Doctor;
