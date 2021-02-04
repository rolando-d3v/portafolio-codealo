import Head from "next/head";
import * as FaIcons from "react-icons/fa";

import Navigation from "../components/layouts/Navigation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen bg-black-bg">
        <Navigation />
        <main>
          <section></section>
          <section>
            <h2
              className="text-white font-bold text-5xl "
              style={{ textShadow: "0px 10px 50px rgba(255,255,255,0.45)" }}
            >
              Bienvenidos al blog de Rolando
            </h2>
            <hr className="border border-primary" />
            <p className="text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              laudantium molestias, nulla provident dolore nisi ducimus
              voluptatibus laborum eveniet quo quos cum eaque repellat quas ad.
              Eius ducimus rerum harum.
            </p>

            <h3 className="text-white">Regsitrate para mas contenido</h3>
            <div className="flex space-x-4">
              <input
                className="rounded-2xl px-4 focus:outline-none bg-gray-300 bg-opacity-25 text-white"
                type="text"
                placeholder="Ingresa tu email"
              />
              <div className="bg-primary h-10 w-10 rounded-full flex items-center">
                <FaIcons.FaTelegramPlane className=" text-white w-6 h-6 ml-1.5 " />
              </div>
            </div>
          </section>
          <section></section>
        </main>
      </div>
    </div>
  );
}
