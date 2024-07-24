import React from "react";

const Company:React.FC = () => {
  return (
    <div className="flex flex-col mb-12 font-anton ">
      <div className="">
        <h1 className="text-center text-xl lg:text-2xl mb-2 tracking-[0.2rem]">
          Con la confianza de grandes empresas
        </h1>
        <p className="p-4 font-ubuntu lg:text-center lg:px-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde earum
          porro, error, dolore doloribus quia dolorem laudantium similique
          repellat, amet in sequi beatae. Blanditiis fugit, sequi nisi
          reiciendis dolores voluptates!
        </p>
      </div>

      <div className="grid items-center h-auto grid-cols-2 gap-4 p-2 py-16 shadow-xl lg:grid-cols-4 border-b-slate-200 justify-items-center ">
        <div className="p-2 text-center border tex-2xl card card-side">
          Marca 1
        </div>
        <div className="p-2 text-center border tex-2xl card card-side">
          Marca 2
        </div>
        <div className="p-2 text-center border tex-2xl card card-side">
          Marca 3
        </div>
        <div className="p-2 text-center border tex-2xl card card-side">
          Marca 4
        </div>
      </div>
    </div>
  );
};

export default Company;
