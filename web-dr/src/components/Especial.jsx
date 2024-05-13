import React, { useState, useEffect, useRef } from "react";

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

  const firstButtonRef = useRef(null);

  useEffect(() => {
    setCurrentTitle2(defaultTitle2);
    setCurrentParrafo2(defaultParrafo2);
    setCurrentParrafo3(defaultParrafo3);

    if (firstButtonRef.current) {
      firstButtonRef.current.click();
    }
  }, [defaultTitle2, defaultParrafo2, defaultParrafo3]);

  const handleBtn1Click = () => {
    if (!btn1Active) {
      setBtn1Active(true);
      setBtn2Active(false);
      setBtn3Active(false);
    }
  };

  const handleBtn2Click = () => {
    if (!btn2Active) {
      setBtn1Active(false);
      setBtn2Active(true);
      setBtn3Active(false);
    }
  };

  const handleBtn3Click = () => {
    if (!btn3Active) {
      setBtn1Active(false);
      setBtn2Active(false);
      setBtn3Active(true);
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
          onClick={() => {
            handleBtn1Click();
            setCurrentTitle2("Infiltraciones");
            setCurrentParrafo2("Manejo intervencionista avanzado del dolor o Manejo intervencionista del dolor");
            setCurrentParrafo3("Nuestro equipo de especialistas altamente capacitados utiliza técnicas de intervencionismo  avanzado, guiadas por imagen para realizar con precisión la administración de los medicamentos y asegurar resultados óptimos.");
          }}
          style={{ ...btnStyle, backgroundColor: btn1Color }}
        >
          {btn1}
        </button>
        <button
          className="text-[1.7rem] px-[3rem] py-[.7rem] max-sm:text-[1.2rem] max-mpeqq:w-full"
          aria-label="Botón para [dar información]"
          onClick={() => {
            handleBtn2Click();
            setCurrentTitle2("Neuromodulación");
            setCurrentParrafo2("Manejo intervencionista avanzado del dolor o Manejo intervencionista del dolor");
            setCurrentParrafo3("Nuestro equipo de especialistas altamente capacitados utiliza técnicas de intervencionismo  avanzado, guiadas por imagen para realizar con precisión la administración de los medicamentos y asegurar resultados óptimos.");
          }}
          style={{ ...btnStyle, backgroundColor: btn2Color }}
        >
          {btn2}
        </button>
        <button
          className="text-[1.7rem] px-[3rem] py-[.7rem] max-sm:text-[1.2rem] max-mpeqq:w-full"
          aria-label="Botón para [dar información]"
          onClick={() => {
            handleBtn3Click();
            setCurrentTitle2("Radiofrecuencia");
            setCurrentParrafo2("Manejo intervencionista avanzado del dolor o Manejo intervencionista del dolor");
            setCurrentParrafo3("Nuestro equipo de especialistas altamente capacitados utiliza técnicas de intervencionismo  avanzado, guiadas por imagen para realizar con precisión la administración de los medicamentos y asegurar resultados óptimos.");
          }}
          style={{ ...btnStyle, backgroundColor: btn3Color }}
        >
          {btn3}
        </button>
      </div>

      <div className="flex flex-col gap-10 items-center font-moriston-semibold">
        <h5 className="text-[1.5rem] text-[#024b94] max-sm:text-[1.2rem] max-mpeq:text-[1.2rem]">
          {currentTitle2}
        </h5>
        <div className="flex flex-col gap-3 text-center">
          <p className="text-sky-400 text-[1.3rem] max-sm:text-[1.1rem]">
            {currentParrafo2}
          </p>
          <p className="text-[#5e676f] font-moriston-semibold text-[1.3rem] max-w-[1050px] leading-loose max-sm:text-[1rem]">
            {currentParrafo3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Especial;
