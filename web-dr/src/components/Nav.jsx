import { Link } from "react-scroll";
import logo from "../assets/images/logo.png";

const Nav = () => {
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-x1 p-20">
          <Link spy={true} smooth={true} to="inicio">
            <li className="my-4 py-4 border-b border-slate-800 hover_bg-slate-800 hover:rounded">
              INICIO
            </li>
          </Link>
          <Link spy={true} smooth={true} to="servicios">
            <li className="my-4 py-4 border-b border-slate-800 hover_bg-slate-800 hover:rounded">
              SERVICIOS
            </li>
          </Link>
          <Link spy={true} smooth={true} to="contacto">
            <li className="my-4 py-4 border-b border-slate-800 hover_bg-slate-800 hover:rounded">
              CONTACTO
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10vh px-40 py-4 ">
        <div className="lg:py-5 flex justify-between z-50 text-white border-solid border-b-2 border-sky-500 ">
          <div className="flex items-center flex-1">
            <img className="w-80 h-auto" src={logo} alt="logo.png" />
          </div>
          <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal: hidden ">
            <div className="flex-10">
              <ul className="flex gap-20 text-[1.2rem]">
                <Link spy={true} smooth={true} to="inicio">
                  <li className="hover:text-fuchsia-400">INICIO</li>
                </Link>
                <Link spy={true} smooth={true} to="servicios">
                  <li className="hover:text-fuchsia-400">SERVICIOS</li>
                </Link>
                <Link spy={true} smooth={true} to="contacto">
                  <li className="hover:text-fuchsia-400">CONTACTO</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
