import React from "react";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";

const Navigation: React.FC = () => {
  return (
    <div>
      {/* navigation movil */}
      <nav className="w-full bg-dark-blue text-white flex md:hidden items-center h-16 justify-between pr-4">
        <section className="bg-primary h-16 w-16 flex items-center  justify-center">
          <FaIcons.FaCode className="w-6 h-6" />
        </section>

        <section className="text-xl text-primary ">Codealo</section>

        <section>
          <FaIcons.FaBars className="w-6 h-6" />
        </section>
      </nav>

      {/* navigation tablet y desktop */}
      <nav className="w-full bg-black-bg  text-white  h-16 hidden md:block ">
        <div className="flex items-center justify-between ">
          <section className="flex items-center space-x-3 ">
            <div className="bg-primary h-16 w-16 flex items-center  justify-center ">
              <FaIcons.FaCode className="w-6 h-6  " />
            </div>
            <Link href="/">
              <a className="text-white border-b border-primary "> Home </a>
            </Link>
            <Link href="/">
              <a className="text-white"> Blog </a>
            </Link>
          </section>

          <section className="text-2xl font-semibold text-primary ">
          Codealo
          </section>

          <section className="flex items-center space-x-3 mr-4">
            <span>Perla pipol</span>
            <img className="w-10 rounded-full" src="assets/avatar.jpg" alt="" />
          </section>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
