import React, { Suspense, lazy } from "react";

import bg from "./assets/images/bg-doctor.webp";

const LazyNavbar = lazy(() => import("./components/Nav"));
const LazyTextoheader = lazy(() => import("./components/Textoheader"));
const LazyCita = lazy(() => import("./components/Cita"));
const LazyDoctor = lazy(() => import("./components/Doctor"));
const LazyServicios = lazy(() => import("./components/Servicios"));
const LazyEspecial = lazy(() => import("./components/Especial"));
const LazyFooter = lazy(() => import("./components/Footer"));

const App = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <header
          className="bg-gradient-to-b from-transparent to-black bg-no-repeat bg-cover bg-center w-full h-auto]"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <LazyNavbar />
          <LazyTextoheader />
        </header>
        <main>
          <div id="inicio">
            <LazyCita />
          </div>
          <LazyDoctor />
          <div id="servicios">
            <LazyServicios />
          </div>
          <LazyEspecial
            title="Cuidados especializados"
            parrafo="Atención integral para cuidar de tu bienestar físico y emocional"
            btn1="Infiltraciones"
            btn2="Neuromodulación"
            btn3="Radiofrecuencia "
          />
        </main>
        <footer id="contacto">
          <LazyFooter
            parrafof="Agenda hoy mismo una consulta y da el primer paso hacia el alivio del dolor y una mejor calidad de vida."
            parrafof2="No permitas que el dolor limite tu vida. ¡Contáctanos ahora y comienza tu camino hacia el alivio y el bienestar!"
            btnf="CITAS"
          />
        </footer>
      </Suspense>
  );
};

export default App;
