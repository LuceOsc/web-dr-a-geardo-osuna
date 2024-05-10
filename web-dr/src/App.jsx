import React from "react";

import bg from "./assets/images/bg-doctor.png";

import Nav from "./components/Nav";
import Textoheader from "./components/Textoheader";
import Cita from "./components/Cita";
import Doctor from "./components/Doctor";
import Servicios from "./components/Servicios";
import Especial from "./components/Especial";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <header
        className="bg-gradient-to-b from-transparent to-black bg-no-repeat bg-cover bg-center w-full h-auto]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Nav />
        <Textoheader />
      </header>
      <main>
        <div id="inicio">
          <Cita />
        </div>
        <Doctor />
        <div id="servicios">
          <Servicios />
        </div>
        <Especial
          title="Cuidados especializados"
          parrafo="Atención integral para cuidar de tu bienestar físico y emocional"
          btn1="Bloqueos nerviosos"
          btn2="Perfusiones"
          btn3="Ozonoterapia"
          title2="Bloqueos nerviosos"
          parrafo2="Alivio del dolor a través de la interrupción de la señal nerviosa"
          parrafo3="Nuestro equipo de especialistas altamente capacitados utiliza técnicas avanzadas de imagen
        para guiar con precisión la administración de los mecicamentos y asegurar resultados óptimos."
        />
      </main>
      <footer id="contacto">
        <Footer 
        parrafof="Agenda hoy mismo una consulta y da el primer paso hacia el alivio del dolor y una mejor calidad de vida."
        parrafof2="No permitas que el dolor limite tu vida. ¡Contáctanos ahora y comienza tu camino hacia el alivio y el bienestar!"
        btnf="CITAS"
        />
      </footer>
    </>
  );
};

export default App;
