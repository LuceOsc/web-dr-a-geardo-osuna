import React from "react";

import bg from "./assets/images/bg-doctor.png";

import Nav from "./components/Nav";


const App = () => {
  return (
    <header
      className="bg-gradient-to-b from-transparent to-black bg-no-repeat bg-cover bg-center w-full h-screen md:h-[100vh]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="">
        <Nav />
      </div>
    </header>
  );
};

export default App;
