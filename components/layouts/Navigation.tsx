import React from "react";
import * as FaIcons from "react-icons/fa";

const Navigation: React.FC = () => {
  return (
    <nav className="w-full bg-dark-blue text-white flex items-center h-16 justify-between px-8">
      <section className="bg-primary h-16 w-12 flex items-center  justify-center">
        <FaIcons.FaCode className="w-6 h-6  " />
      </section>

      <section className="text-xl"> Codealo </section>

      <section>
        <FaIcons.FaBars className="w-6 h-6" />
      </section>
    </nav>
  );
};

export default Navigation;
