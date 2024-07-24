import React,{ useState } from "react";
import Layout from "../../layaut/Layaut";

import { Switch } from "@nextui-org/react";

import { motion, AnimatePresence } from "framer-motion";
import {
  BsFillArrowUpLeftCircleFill,
  BsFillArrowUpRightCircleFill,
} from "react-icons/bs";

const Login:React.FC = () => {
  const [isDiv1Visible, setIsDiv1Visible] = useState(true);

  const toggleDiv = () => {
    setIsDiv1Visible(!isDiv1Visible);
  };
  return (
    <Layout>
      {/* <div classNameName="min-h-screen hero bg-base-200">
        <div classNameName="flex-col hero-content lg:flex-row-reverse">
          <div classNameName="text-center lg:text-left">
            <h1 classNameName="text-5xl font-bold">Login now!</h1>
            <p classNameName="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div classNameName="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
            <div classNameName="card-body">
              <div classNameName="form-control">
                <label classNameName="label">
                  <span classNameName="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" classNameName="input input-bordered" />
              </div>
              <div classNameName="form-control">
                <label classNameName="label">
                  <span classNameName="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" classNameName="input input-bordered" />
                <label classNameName="label">
                  <a href="#" classNameName="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div classNameName="mt-6 form-control">
                <button classNameName="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex items-center justify-center gap-4 mt-8 tracking-wide font-anton bold lg:mt-2">
        <div>Registrarse</div>
        <div>Iniciar Sesión</div>
      </div>
      <div className="flex items-end justify-center w-full ">
        <Switch
          size="lg"
          color="success"
          startContent={<BsFillArrowUpLeftCircleFill />}
          endContent={<BsFillArrowUpRightCircleFill />}
          onClick={toggleDiv}
          className="py-2"
        ></Switch>
      </div>

      <AnimatePresence>
        {isDiv1Visible ? (
          <motion.div
            key="div1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <section className="flex items-center justify-center min-h-screenbg-gradient-to-t from-gray-100 to-white ">
              <div className="flex items-center max-w-3xl p-5 bg-gray-100 shadow-lg rounded-2xl">
                <div className="px-8 md:w-1/2 md:px-16">
                  <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
                  <p className="text-xs mt-4 text-[#002D74]">
                    Si ya tienes tu cuenta, Entra ahora!
                  </p>

                  <form action="" className="flex flex-col gap-4">
                    <input
                      className="p-2 mt-8 border rounded-xl"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <div className="relative">
                      <input
                        className="w-full p-2 border rounded-xl"
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="gray"
                        className="absolute -translate-y-1/2 bi bi-eye top-1/2 right-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    </div>
                    <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                      Entrar
                    </button>
                  </form>

                  <div className="grid items-center grid-cols-3 mt-6 text-gray-400">
                    <hr className="border-gray-400" />
                    <p className="text-sm text-center">O</p>
                    <hr className="border-gray-400" />
                  </div>

                  <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                    <svg
                      className="mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="25px"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                    </svg>
                    Iniciar con Google
                  </button>

                  <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                    <a href="#">Contraseña olvidada?</a>
                  </div>

                  <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                    <p>No tienes una cuenta?</p>
                    <button className="px-5 py-2 duration-300 bg-white border rounded-xl hover:scale-110">
                      Registrarse
                    </button>
                  </div>
                </div>

                <div className="hidden h-screen md:block">
                  <img
                    className="object-cover h-screen rounded-2xl"
                    src="images/img2.jpg"
                  />
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="div2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <section className="flex items-center justify-center min-h-screen px-2 bg-gradient-to-t from-gray-100 to-white">
              <div className="flex items-center max-w-3xl p-5 bg-gray-100 shadow-lg rounded-2xl">
                <div className="px-8 md:w-1/2 md:px-16">
                  <h2 className="font-bold text-2xl text-[#002D74]">
                    Registrarse
                  </h2>
                  <p className="text-xs mt-4 text-[#002D74]">
                    Si no tienes una cuenta, crea una, es gratis!!
                  </p>

                  <form action="" className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        className="p-2 mt-4 border rounded-xl"
                        type="text"
                        name="name"
                        placeholder="Nombre"
                      />
                      <input
                        className="p-2 mt-4 border rounded-xl"
                        type="text"
                        name="last_name"
                        placeholder="Apellido"
                      />
                    </div>
                    <input
                      className="p-2 mt-4 border rounded-xl"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <div className="relative">
                      <input
                        className="w-full p-2 border rounded-xl"
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="gray"
                        className="absolute -translate-y-1/2 bi bi-eye top-1/2 right-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    </div>

                    <div className="relative">
                      <input
                        className="w-full p-2 border rounded-xl"
                        type="password"
                        name="password"
                        placeholder="Confirma Contraseña"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="gray"
                        className="absolute -translate-y-1/2 bi bi-eye top-1/2 right-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    </div>

                    <input
                      className="p-2 mt-4 border rounded-xl"
                      type="text"
                      name="phone"
                      required={true}
                      placeholder="Teléfono"
                    />

                    <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                      Registrate
                    </button>
                  </form>

                  <div className="grid items-center grid-cols-3 mt-6 text-gray-400">
                    <hr className="border-gray-400" />
                    <p className="text-sm text-center">O</p>
                    <hr className="border-gray-400" />
                  </div>

                  <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                    <svg
                      className="mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="25px"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                    </svg>
                    Entrar con Google
                  </button>

                  <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                    <a href="#">Olvidaste la contraseña?</a>
                  </div>

                  <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                    <p>Tienes una cuenta?</p>
                    <button className="px-5 py-2 duration-300 bg-white border rounded-xl hover:scale-110">
                      Entrar
                    </button>
                  </div>
                </div>

                <div className="hidden w-1/2 h-screen md:block">
                  <img
                    className="object-cover h-screen rounded-2xl"
                    src="images/img3.jpg"
                  />
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Login;
