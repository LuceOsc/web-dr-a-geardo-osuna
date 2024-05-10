import React from "react";
import dr1 from "../assets/images/dr-1.webp";
import dr2 from "../assets/images/dr-2.webp";

const Doctor = () => {
  return (
    <div className="pt-[3rem] max-[426px]:py-[3rem]">
      <div className="flex items-center gap-[15rem] justify-start max-[1800px]:gap-[8rem] max-[1600px]:gap-[4rem] max-xl:flex-wrap max-xl:justify-center" data-aos="fade-right" data-aos-duration="800"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="true">
        <img className="w-full max-w-[900px] max-[1600px]:max-w-[700px] max-[1400px]:max-w-[600px] max-xl:max-w-[800px] max-[800px]:max-w-[500px]" src={dr1} alt="dr-1.png" />
        <div className="flex flex-col gap-7 p-10 max-[425px]:p-4">
          <p className="font-moriston-semibold text-[2.1rem] text-[#024b94] max-w-[650px] max-xl:max-w-[1200px] max-[800px]:text-[1.5rem]">
            Recuperar tu bienestar y calidad de vida con tratamiento
            especializados para el dolor.
          </p>
          <p className="font-moriston-personal-light text-[1.8rem] text-[#5e676f] max-w-[650px] max-xl:max-w-[1200px] max-[800px]:text-[1.2rem]">
            Comprometidos a dar una atención especializada y un enfoque
            integral, que te permita avanzar en tu vida con menos restricciones.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-[15rem] justify-end max-[1800px]:gap-[8rem] max-[1600px]:gap-[4rem] max-xl:flex-wrap-reverse max-xl:justify-center" data-aos="fade-up" data-aos-duration="800"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="true">
        <div className="flex flex-col gap-7 p-10 max-[425px]:p-4">
          <p className="font-moriston-semibold text-[2.8rem] text-[#024b94] max-w-[500px]  text-center max-xl:max-w-[1200px] max-[800px]:text-[1.8rem]">
            Compromiso en el alivio y cuidado especializado
          </p>
        </div>
        <img className="w-full max-w-[900px] max-[1600px]:max-w-[700px] max-[1400px]:max-w-[600px] max-xl:max-w-[800px] max-[800px]:max-w-[500px] max-[426px]:pt-[3rem]" src={dr2} alt=" dr-2.png " />
      </div>
    </div>
  );
};

export default Doctor;
