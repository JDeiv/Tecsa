import React from "react";
import Carrousel3 from "./Carrousel3";

interface Props{
  title:string,
}

const Carrousel2:React.FC<Props> = ({title}) => {
  return (
    <div className="flex items-center justify-center p-8 mb-6 bg-gradient-to-t from-slate-300 to-gray-50">
      <div className="flex flex-col items-center gap-10 m-4 text-start lg:grid lg:grid-cols-5 justify-stretch">
        <div className="flex flex-col items-center justify-center lg:col-span-2 lg:flex-row lg:justify-between ">
        <h1 className="pb-4 text-xl tracking-wider text-center font-anton ">{title}</h1>
        <div className="w-1/3 border-2 border-orange-500 "></div>
        </div>
          <div className="col-span-3 mx-4 lg:m-0">
          <Carrousel3 />
          </div>
        
      </div>

      
    </div>
  );
};

export default Carrousel2;
