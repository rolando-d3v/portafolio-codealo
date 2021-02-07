import Head from "next/head";
import * as FaIcons from "react-icons/fa";

import Navigation from "../components/layouts/Navigation";
import PostCard from "../components/post/PostCard";

export default function Home() {
  return (
    <div className="h-full sm:h-screen bg-black-bg pb-12">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navigation />

        <main className=" md:flex">
          <section className="w-40 px-6 hidden md:block">
            <div className="h-full flex flex-col justify-center items-center">
              <div className="space-y-6 flex flex-col items-center">
                <FaIcons.FaFacebook className=" text-white w-6 h-6" />
                <FaIcons.FaTwitter className=" text-white w-6 h-6" />
                <FaIcons.FaInstagram className=" text-white w-6 h-6" />
              </div>
              <div className="h-32"></div>
              <div className="space-y-6 flex flex-col items-center">
                <span className=" bg-white w-5 h-5 block rounded-full "></span>
                <span className=" bg-white w-4 h-4 block rounded-full "></span>
                <span className=" bg-white w-3 h-3 block rounded-full "></span>
                <span className=" bg-white w-2 h-2 block rounded-full "></span>
              </div>
            </div>
          </section>

          <section className="p-10 flex items-center">
            <div className="">
              <h2
                className="text-white font-bold text-5xl xl:text-7xl mb-8 "
                style={{ textShadow: "0px 10px 50px rgba(255,255,255,0.45)" }}
              >
                Bienvenidos al blog de Rolando
              </h2>
              <hr className="border border-primary hidden md:flex" />
              <p className="text-gray-400  text-lg  lg:text-xl mt-8 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                laudantium molestias, nulla provident dolore nisi ducimus
                voluptatibus laborum eveniet quo quos cum eaque repellat quas
                ad. Eius ducimus rerum harum.
              </p>

              <div className="hidden md:block mt-8 w-full">
                <h3 className="text-white text-xl font-bold mb-6 ">Regsitrate para mas contenido</h3>
                <div className="flex space-x-3">
                  <input
                    className="rounded-2xl w-9/12 lg:w-7/12 px-4 py-3 focus:outline-none bg-gray-300 bg-opacity-25 text-white text-xl"
                    type="text"
                    placeholder="Ingresa tu email"
                  />
                  <div className="bg-primary h-14 w-14 rounded-full flex items-center">
                    <FaIcons.FaTelegramPlane className=" text-white w-8 h-8 ml-2 " />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="p-8">
            <h2 className="text-white text-xl font-bold text-center my-4">
              Entradas recientes
            </h2>
            <div className="flex justify-center">
              <PostCard post={{}} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
