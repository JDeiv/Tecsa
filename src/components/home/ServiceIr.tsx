//import React from "react";
import { Button } from "@nextui-org/react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";
import { CONTACT } from '../../router/paths'

const ServiceIr = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center w-full h-full px-8 py-8 bg-indigo-300 lg:flex-row lg:justify-between">
      <div>
        <h2 className="text-2xl tracking-wider text-center font-anton lg:text-start">
          ¿Necesitas la última tecnología para tu empresa?
        </h2>
        <p className="text-lg font-ubuntu text-base-100 ">
          Deja que nosotros te ayudemos a encontrar el producto adecuado para ti
        </p>
      </div>
      <div className="font-semibold font-ubuntu">
        <Link to={CONTACT} >
          <Button
            color="primary"
            variant="shadow"
            className="lg:mb-0 mb-6 transition-transform transform-gpu hover:scale-110 bg-gradient-to-r text-xl from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
          >
            <RiCustomerService2Fill />
            Servicio Técnico
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceIr;
