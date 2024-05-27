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
              titlec="Es la principal causa de discapacidad en todo el mundo,"
              answer=" aunque su prevalencia aumenta con el envejecimiento, puede estar presente a cualquier edad. 
              No permitas que esta enfermedad afecte tu calidad de vida, Acude a valoración.
        Ofrecemos un tratamiento integral y personalizado acorde a tus preferencias y necesidades."
            />
            <Accordion
              image={servicio3}
              alt="servicio3.png"
              title="Neuralgia post herpética"
              titlec="Es la complicación más común del Herpes Zoster."
              answer=" Caracterizándose por un dolor intenso en la piel, incluso después de la desaparición de las lesiones cutáneas ocasionadas por el virus, prolongandose por meses o incluso años. Puede afectar severamente la calidad de vida, ya que incluso el roce de la ropa puede despertar el dolor. Pero esto no tiene por qué ser así. Acude a valoración."
            />
            <Accordion
              image={servicio4}
              alt="servicio4.png"
              title="Migraña"
              titlec="Se trata de un dolor de cabeza episódico, intenso,"
              answer=" generalmente de un solo lado, pudiendo acompañarse de otros síntomas como náuseas, vómito, intolerancia a la luz o a los ruidos. Pero este y otros dolores de cabeza se pueden tratar y prevenir con un manejo adecuado."
            />
            <Accordion
              image={servicio4}
              alt="servicio4.png"
              title="Neuralgia del Trigémino"
              titlec="Dolor facial intenso, incapacitante, que puede llegar"
              answer="a incapacitar al paciente para realizar actividades cotidianas, como comer, cepillar sus dientes o hablar. Llevando a esta enfermedad a tener sobrenombres como “El dolor del suicida”.
              Actualmente existen tratamientos efectivos para tratar la Neuralgia del Trigémino, que incluyen desde fármacos, hasta intervencionismos avanzados para bloquear la conducción del estímulo doloroso.
              "
            />
          </div>

          <div className="flex flex-col gap-5">
            <Accordion
              image={servicio5}
              alt="servicio5.png"
              title="Dolor postoperatorio"
              titlec="Tambien llamado dolor postquirurgico."
              answer=" Este tipo de dolor aparece como consecuencia de una cirugía, pudiendo prolongarse incluso después de la recuperación esperada, con o sin la presencia de una complicación quirúrgica. Suele tratarse de dolor que requiere un manejo especializado e individualizado para conseguir su alivio."
            />
            <Accordion
              image={servicio6}
              alt="servicio6.png"
              title="Dolor oncológico"
              titlec="30% de los pacientes afectados por cáncer presentan"
              answer="dolor al momento del diagnóstico, aumentando hasta 80% de los pacientes en etapas finales de la enfermedad. Contamos con la preparación ideal, con la calidad y calidez que requieren los pacientes en estas condiciones.
              El aliviar el sufrimiento es una opción a tu alcance.
              "
            />
            <Accordion
              image={servicio7}
              alt="servicio7.png"
              title="Neuropatia Diabetica"
              titlec="Complicación grave de la diabetes, que puede afectar hasta el 50%"
              answer=" de las personas con diabetes. Esta patología suele ocasionarse por daño en los nervios, provocando síntomas como Hormigueos, Calambres, Entumecimiento, Dolor quemante, alteración de la sensibilidad. típicamente en las extremidades inferiores y superiores (Distribución en guante y calcetín). Estos síntomas pueden verse aliviados con el tratamiento farmacológico adecuado, acude a valoración.
              "
            />
            <Accordion
              image={servicio8}
              alt="servicio8.png"
              title="Inguinodinia"
              titlec="Dolor crónico localizado en la región inguinal,"
              answer=" ocasionalmente de aparición posterior a una cirugía. Típicamente de intensidad moderada a severa, que no mejora con los tratamientos convencionales, requiriendo en ocasiones la realización de bloqueos nerviosos o técnicas neuroablativas."
            />
            <Accordion
              image={servicio2}
              alt="servicio8.png"
              title="Dolor de hombro"
              titlec="Dolor sordo, intenso, que suele limitar la actividad del paciente."
              answer="Ocasionalmente en adultos mayores o personas cuyos trabajos requieren realizar movimientos repetitivos por encima de la cabeza; por ejemplo, trabajadores de construcción o pintores."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicios;
