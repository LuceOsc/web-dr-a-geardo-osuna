import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/images/logo.webp";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

import AOS from "aos";
import "aos/dist/aos.css";

const Nav = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const content = (
    <>
      <div className="lg:hidden block absolute top-20 w-full left-0 right-0 bg-sky-500 transition">
        <ul className="text-center text-x1 p-20">
          <Link spy={true} smooth={true} to="inicio">
            <li className="my-4 py-4 border-b border-sky-400  hover:bg-sky-400 hover:rounded">
              INICIO
            </li>
          </Link>
          <Link spy={true} smooth={true} to="servicios">
            <li className="my-4 py-4 border-b border-sky-400  hover:bg-sky-400 hover:rounded">
              SERVICIOS
            </li>
          </Link>
          <Link spy={true} smooth={true} to="contacto">
            <li className="my-4 py-4 border-b border-sky-400  hover:bg-sky-400 hover:rounded">
              CONTACTO
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav
      data-aos="flip-down"
      data-aos-anchor-placement="center-center"
      data-aos-duration="1000"
    >
      <div className="h-10vh px-40 py-8 max-lg:px-20  max-sm:px-4 ">
        <div className="lg:py-5 flex justify-between z-50 text-white border-solid border-b-2 border-sky-500 ">
          <div className="flex items-center flex-1">
            <a href="https://doctor-abraham-gerardo-osuna.proyecta.com.mx/">
              <img
                className="w-60 h-auto max-lg:w-52"
                src={logo}
                alt="logo.png"
              />
            </a>
          </div>
          <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal: hidden ">
            <div className="flex-10">
              <ul className="flex gap-20 text-[1.2rem] max-lg:gap-10 max-lg:text-[1rem] ">
                <li className="hover:text-sky-500 transition border-b-2 border-transparent hover:border-sky-500 cursor-pointer">
                  <Link spy={true} smooth={true} to="inicio">
                    INICIO
                  </Link>
                </li>
                <li className="hover:text-sky-500 transition border-b-2 border-transparent hover:border-sky-500 cursor-pointer">
                  <Link spy={true} smooth={true} to="servicios">
                    SERVICIOS
                  </Link>
                </li>

                <li className="hover:text-sky-500 transition border-b-2 border-transparent hover:border-sky-500 cursor-pointer">
                  <Link spy={true} smooth={true} to="contacto">
                    CONTACTO
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>{click && content}</div>
          <button
            className="block md:hidden transition"
            onClick={handleClick}
            aria-label="[Abrir o Cerrar el menú]"
          >
            {click ? (
              <FaTimes style={{ fontSize: "1.5rem" }} />
            ) : (
              <RiMenu3Fill style={{ fontSize: "1.5rem" }} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
