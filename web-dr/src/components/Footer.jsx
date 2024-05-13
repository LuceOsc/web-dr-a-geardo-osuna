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
    <div data-aos="fade-up" data-aos-duration="800">
      <a href="https://maps.app.goo.gl/fuEobCLgCXmxcgMT9" target="_blank" title="dirección">
        <img className=" w-full max-h-[580px] " src={maps} alt="" />
      </a>
      <div
        className="flex items-center justify-center gap-[10rem] px-[1rem] py-12 max-xl:px-[1rem] max-[1200px]:flex-wrap max-[1200px]:gap-[5rem] max-[1200px]:justify-center max-md:py-[3rem]"
        style={{
          backgroundImage: `url(${footer})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          className="w-[24rem] h-auto max-[1400px]:w-[19rem]"
          src={logo}
          alt="logo-footer.png"
        />

        <div className="flex gap-[15rem] max-[1500px]:gap-[5rem] max-md:gap-[2rem] max-md:flex-wrap max-md:justify-center">
          <div className="flex flex-col gap-[1.5rem] max-w-[400px]">
            <p className="text-white text-[1.1rem] font-moriston-semibold">
              {parrafof}
            </p>
            <p className="text-[#d1dfed] text-[1.1rem] font-moriston-personal-light">
              {parrafof2}
            </p>
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=3334911205"
                target="_blank"
                title="Whatsapp"
              >
                <button className="text-[1.3rem] font-moriston-semibold bg-slate-50 px-[6rem] py-[1rem] text-[#024b94] max-[425px]:px-[4rem] max-[425px]:text-[1.2rem]">
                  {btnf}
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-[2rem] ">
            <div className="flex gap-2">
              <div className="flex items-start">
                <img className="h-auto w-[1.6rem]" src={if3} alt="" />
              </div>
              <div>
                <a
                  href="https://maps.app.goo.gl/fuEobCLgCXmxcgMT9"
                  target="_blank"
                  title="dirección"
                >
                  <span className=" text-[1.1rem] font-moriston-semibold text-white">
                    Ubicación
                  </span>
                  <p className="text-[1rem] text-white font-moriston-personal-light max-w-[300px]">
                    Av. Carlos Canseco 6050, Marina Mazatlan, Cp 82103, Centro
                    Medico Marina, <br />
                    Consultorio 209.
                  </p>
                </a>
              </div>
            </div>

            <div>
              <div className="flex gap-2">
                <div className="flex items-start">
                  <img className="h-auto w-[1.6rem]" src={if4} alt="" />
                </div>
                <div>
                  <a
                    href="https://api.whatsapp.com/send?phone=3334911205"
                    target="_blank"
                    title="Whatsapp"
                  >
                    <span className="text-[1.1rem] font-moriston-semibold text-white">
                      WhatsApp
                    </span>
                    <p className="text-[1rem] text-white font-moriston-personal-light max-w-[300px]">
                      333 491 1205
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex items-start">
                <img className="h-auto w-[1.6rem]" src={if2} alt="" />
              </div>
              <div>
                <span className="text-[1.1rem] font-moriston-semibold text-white">
                  Horario de atención
                </span>
                <p className="text-[1rem] text-white font-moriston-personal-light max-w-[300px]">
                  Previa cita <br /> Lunes a sabado: 8:00 am a 03:00 pm
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
