import React from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../../router/paths";

interface Name {
  name: string;
}

const ButtonCyan: React.FC<Name> = ({ name }) => {
  return (
    <>
    <Link to={SERVICES}><button
    type="button"
    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 
  font-medium rounded-lg  px-8 py-2.5  text-center mr-2 mt-8 text-xl hover:cursor-pointer"
  >
    {name}
  </button></Link>
    </>
  );
};

export default ButtonCyan;
