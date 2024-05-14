import React, { useState, useEffect, useRef } from "react";

import infiltracionImg from "../assets/images/inflitracion.webp";
import neuromoImg from "../assets/images/neuromo.webp";
import radiofrecuenciaImg from "../assets/images/radiofrecuencia.webp";

const Especial = ({
  title,
  parrafo,
  btn1,
  btn2,
  btn3,
  defaultTitle2,
  defaultParrafo2,
  defaultParrafo3,
}) => {
  const [currentTitle2, setCurrentTitle2] = useState(defaultTitle2);
  const [currentParrafo2, setCurrentParrafo2] = useState(defaultParrafo2);
  const [currentParrafo3, setCurrentParrafo3] = useState(defaultParrafo3);
  const [btn1Active, setBtn1Active] = useState(true);
  const [btn2Active, setBtn2Active] = useState(false);
  const [btn3Active, setBtn3Active] = useState(false);
  const [currentImg, setCurrentImg] = useState(infiltracionImg);

  const infiltracionAlt = "inflitracion.webp";
  const neuromoAlt = "neuromo.webp";
  const radiofrecuenciaAlt = "radiofrecuencia.webp";

  const firstButtonRef = useRef(null);

  useEffect(() => {
    // Establecer los valores iniciales cuando el componente se monta
    setCurrentTitle2(defaultTitle2);
    setCurrentParrafo2(defaultParrafo2);
    setCurrentParrafo3(defaultParrafo3);
    setCurrentImg(infiltracionImg);

    if (firstButtonRef.current) {
      firstButtonRef.current.click();
    }
  }, [defaultTitle2, defaultParrafo2, defaultParrafo3]);

  const handleBtn1Click = () => {
    if (!btn1Active) {
      setBtn1Active(true);
      setBtn2Active(false);
      setBtn3Active(false);
      setCurrentImg(infiltracionImg);
      setCurrentTitle2("Infiltraciones");
      setCurrentParrafo2(
        "Administración de diversas sustancias para el alivio del dolor en el sitio que lo requiera el paciente."
      );
      setCurrentParrafo3(
        "Desde fármacos como los esteroides y anestésicos locales para realizar un bloqueo nervioso con efecto anti-inflamatorio prolongado, hasta ortobiológicos como el plasma rico en plaquetas para aliviar el dolor y obtener los grandes beneficios que ofrece la medicina regenerativa."
      );
    }
  };

  const handleBtn2Click = () => {
    if (!btn2Active) {
      setBtn1Active(false);
      setBtn2Active(true);
      setBtn3Active(false);
      setCurrentImg(neuromoImg);
      setCurrentTitle2("Neuromodulación");
      setCurrentParrafo2(
        "Intervencionismo avanzado enfocado en modificar el funcionamiento"
      );
      setCurrentParrafo3(
        "del sistema nervioso central o periférico, esto al actuar directamente en los nervios afectados del paciente. Ofreciendo un alivio prolongado y seguro, sin necesidad de cirugía."
      );
    }
  };

  const handleBtn3Click = () => {
    if (!btn3Active) {
      setBtn1Active(false);
      setBtn2Active(false);
      setBtn3Active(true);
      setCurrentImg(radiofrecuenciaImg);
      setCurrentTitle2("Radiofrecuencia");
      setCurrentParrafo2(
        "Técnica percutánea (mínimamente invasiva), sin la necesidad de cirugía"
      );
      setCurrentParrafo3(
        "en la cual mediante cánulas especiales podemos interrumpir la transmisión del dolor en sitios específicos. Esto mediante pulsaciones eléctricas o ablación térmica de estructuras nerviosas encargadas de producir dolor. "
      );
    }
  };

  const btn1Color = btn1Active ? "#024b94" : "#5e676f";
  const btn2Color = btn2Active ? "#024b94" : "#5e676f";
  const btn3Color = btn3Active ? "#024b94" : "#5e676f";

  const btnStyle = {
    transition: "background-color 0.3s ease-in-out", // Transición suave
  };

  return (
    <div className="flex flex-col gap-[3rem] items-center px-[1rem] py-[3rem]">
      <div className="text-center">
        <h4 className="font-moriston-semibold text-[#024b94] text-[3rem] max-sm:text-[1.8rem] max-mpeq:text-[1.4rem]">
          {title}
        </h4>
        <p className="text-[1.6rem] text-[#5e676f] font-moriston-personal-light max-sm:text-[1.4rem] max-mpeq:text-[1.2rem]">
          {parrafo}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[12rem] text-white max-xl:gap-10">
        <button
          ref={firstButtonRef}
          className="text-[1.8rem] px-[3rem] py-[.7rem] max-sm:text-[1.2rem] max-mpeqq:w-full"
          aria-label="Botón para [dar información]"
          onClick={handleBtn1Click}
          style={{ ...btnStyle, backgroundColor: btn1Color }}
        >
          {btn1}
        </button>
        <button
          className="text-[1.7rem] px-[3rem] py-[.7rem] max-sm:text-[1.2rem] max-mpeqq:w-full"
          aria-label="Botón para [dar información]"
          onClick={handleBtn2Click}
          style={{ ...btnStyle, backgroundColor: btn2Color }}
        >
          {btn2}
        </button>
        <button
          className="text-[1.7rem] px-[3rem] py-[.7rem] max-sm:text-[1.2rem] max-mpeqq:w-full "
          aria-label="Botón para [dar información]"
          onClick={handleBtn3Click}
          style={{ ...btnStyle, backgroundColor: btn3Color }}
        >
          {btn3}
        </button>
      </div>

      <div className="flex flex-col gap-10 items-center font-moriston-semibold">
        <img
        className="w-full h-auto max-w-[800px]"
          src={currentImg}
          alt={
            currentImg === infiltracionImg
              ? infiltracionAlt
              : currentImg === neuromoImg
              ? neuromoAlt
              : radiofrecuenciaAlt
          }
        />
        <h5 className="text-[1.5rem] text-[#024b94] max-sm:text-[1.2rem] max-mpeq:text-[1.2rem] ">
          {currentTitle2}
        </h5>
        <div className="flex flex-col gap-3 text-center">
          <p className="text-sky-400 text-[1.3rem] max-sm:text-[1.1rem] ">
            {currentParrafo2}
          </p>
          <p className="text-[#5e676f] font-moriston-semibold text-[1.3rem] max-w-[1050px] leading-loose max-sm:text-[1rem] ">
            {currentParrafo3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Especial;
