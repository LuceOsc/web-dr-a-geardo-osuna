import React from "react";
import maps from "../assets/images/maps@1920.webp";
import footer from "../assets/images/bg-footer.webp";
import logo from "../assets/images/logo-footer.webp";
import if1 from "../assets/images/if1.svg";
import if2 from "../assets/images/if2.svg";
import if3 from "../assets/images/if3.svg";
import if4 from "../assets/images/if4.svg";

const Footer = ({ parrafof, parrafof2, btnf }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="800" data-aos-mirror="true">
      <img className=" w-full h-auto  " src={maps} alt="" />
      <div
        className="flex items-center justify-between gap-[5rem] p-[9rem] max-[1700px]:px-[4rem] max-xl:px-[1rem] max-[1200px]:flex-wrap max-[1200px]:justify-center max-md:py-[3rem]" 
        style={{
          backgroundImage: `url(${footer})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img className="w-[27rem] h-auto max-[1400px]:w-[20rem]" src={logo} alt="logo-footer.png" />

        <div className="flex items-center gap-[20rem] max-[1800px]:gap-[10rem] max-[1500px]:gap-[5rem] max-md:gap-[2rem] max-md:flex-wrap max-md:justify-center">
          <div className="flex flex-col gap-[1.5rem] max-w-[400px]">
            <p className="text-white text-[1.2rem] font-moriston-semibold">
              {parrafof}
            </p>
            <p className="text-[#d1dfed] text-[1.2rem] font-moriston-personal-light">
              {parrafof2}
            </p>
            <div>
              <button className="text-[1.8rem] font-moriston-semibold bg-slate-50 px-[6rem] py-[1rem] text-[#024b94] max-[425px]:px-[4rem] max-[425px]:text-[1.2rem]">
                {btnf}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-[2rem] ">
            <div className="flex gap-2">
              <div className="flex items-start">
                <img className="h-auto w-[2.2rem]" src={if3} alt="" />
              </div>
              <div>
                <span className=" text-[1.2rem] font-moriston-semibold text-white">
                  Ubicación
                </span>
                <p className="text-[1.2rem] text-white font-moriston-personal-light max-w-[300px]">
                  Juan Carrasco, Col. Centro s/n Mazatlán, Sinaloa. <br/>Consultorio
                  305.
                </p>
              </div>
            </div>

            <div>

              <div className="flex gap-2">
                <div className="flex items-start">
                  <img className="h-auto w-[2.2rem]" src={if1} alt="" />
                </div>
                <div>
                  <span className="text-[1.2rem] font-moriston-semibold text-white">
                    Teléfono
                  </span>
                  <p className="text-[1.2rem] text-white font-moriston-personal-light max-w-[300px]">
                    669 2497 1909
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="flex items-start">
                  <img className="h-auto w-[2.2rem]" src={if4} alt="" />
                </div>
                <div>
                  <span className="text-[1.2rem] font-moriston-semibold text-white">
                    WhatsApp
                  </span>
                  <p className="text-[1.2rem] text-white font-moriston-personal-light max-w-[300px]">
                    669 2497 1909
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex items-start">
                <img className="h-auto w-[2.2rem]" src={if2} alt="" />
              </div>
              <div>
                <span className="text-[1.2rem] font-moriston-semibold text-white">
                  Horario de atención
                </span>
                <p className="text-[1.2rem] text-white font-moriston-personal-light max-w-[300px]">
                  Previa cita <br /> Lunes a viernes: 8:00 a 18:00 hrs Sabados de 10 am
                  a 12 pm
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
