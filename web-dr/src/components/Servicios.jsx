import React from "react";
import Accordion from "./Accordion";
import servicio1 from "../assets/images/servicio1.png";
import servicio2 from "../assets/images/servicio2.png";
import servicio3 from "../assets/images/servicio3.png";
import servicio4 from "../assets/images/servicio4.png";
import servicio5 from "../assets/images/servicio5.png";
import servicio6 from "../assets/images/servicio6.png";
import servicio7 from "../assets/images/servicio7.png";
import servicio8 from "../assets/images/servicio8.png";

const Servicios = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center gap-[5rem] px-[10rem] py-[5rem] bg-[#dfe1e2] max-[1700px]:px-20 max-2xl:px-8 max-[500px]:px-4"
        data-aos="flip-right"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
      >
        <h3 className=" text-[3.4rem] text-center  text-[#024b94] font-moriston-semibold max-[700px]:text-[2.2rem] max-[400px]:text-[1.6rem]">
          Tratamiento del dolor
        </h3>
        <div className="flex justify-center gap-[10rem] max-[1451px]:gap-[1rem] max-xl:flex-wrap ">
          <div className="flex flex-col gap-5 ">
            <Accordion
              image={servicio1}
              alt="servicio1.png"
              titlec="Recupera tu calidad de vida y disfruta de cada momento"
              title="Dolor crónico (todos los tipos de dolor)"
              answer="
              mediante un enfoque integral, evaluaremos tu condición y desarrollaremos un plan de tratamiento específico para abordar las causas subyacentes de tu dolor crónico."
            />
            <Accordion
              image={servicio2}
              alt="servicio2.png"
              title=" Dolor de espalda (lumbalgia)"
              titlec="Recupera tu calidad de vida y disfruta de cada momento"
              answer=" mediante un enfoque integral, evaluaremos tu condición y desarrollaremos un plan de tratamiento específico para abordar las causas subyacentes de tu dolor crónico."
            />
            <Accordion
              image={servicio3}
              alt="servicio3.png"
              title="Neuralgia post herpética"
              titlec="Recupera tu calidad de vida y disfruta de cada momento"
              answer=" mediante un enfoque integral, evaluaremos tu condición y desarrollaremos un plan de tratamiento específico para abordar las causas subyacentes de tu dolor crónico."
            />
            <Accordion
              image={servicio4}
              alt="servicio4.png"
              title="Migraña"
              titlec="Recupera tu calidad de vida y disfruta de cada momento"
              answer=" mediante un enfoque integral, evaluaremos tu condición y desarrollaremos un plan de tratamiento específico para abordar las causas subyacentes de tu dolor crónico."
            />
            <Accordion
              image={servicio4}
              alt="servicio4.png"
              title="Neuralgia del Trigémino"
              titlec="Recupera tu calidad de vida y disfruta de cada momento"
              answer=" mediante un enfoque integral, evaluaremos tu condición y desarrollaremos un plan de tratamiento específico para abordar las causas subyacentes de tu dolor crónico."
            />
          </div>

          <div className="flex flex-col gap-5">
            <Accordion
              image={servicio5}
              alt="servicio5.png"
              title="Dolor postoperatorio"
              titlec="Recupera tu calidad de vida y disfruta de cada momento"
              answer=" Mediante un enfoque integral, evaluaremos tu condición y desarrollaremos un plan de tratamiento específico para abordar las causas subyacentes de tu dolor crónico."
            />
            <Accordion
              image={servicio6}
              alt="servicio6.png"
              title="Dolor oncológico"
              titlec="Recupera tu calidad de vida y disfruta de cada momento"
              answer=" mediante un enfoque integral, evaluaremos tu condición y desarrollaremos un plan de tratamiento específico para abordar las causas subyacentes de tu dolor crónico."
            />
            <Accordion
              image={servicio7}
              alt="servicio7.png"
              title="Pie diabético"
              titlec="Recupera tu calidad de vida y disfruta de cada momento"
              answer=" mediante un enfoque integral, evaluaremos tu condición y desarrollaremos un plan de tratamiento específico para abordar las causas subyacentes de tu dolor crónico."
            />
            <Accordion
              image={servicio8}
              alt="servicio8.png"
              title="Inguinodinia"
              titlec="Recupera tu calidad de vida y disfruta de cada momento"
              answer=" mediante un enfoque integral, evaluaremos tu condición y desarrollaremos un plan de tratamiento específico para abordar las causas subyacentes de tu dolor crónico."
            />
            <Accordion
              image={servicio2}
              alt="servicio8.png"
              title="Dolor de hombro"
              titlec="Recupera tu calidad de vida y disfruta de cada momento"
              answer=" mediante un enfoque integral, evaluaremos tu condición y desarrollaremos un plan de tratamiento específico para abordar las causas subyacentes de tu dolor crónico."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicios;
