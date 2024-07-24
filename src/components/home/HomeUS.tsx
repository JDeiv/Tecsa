//import React from "react";
import { Chip } from "@nextui-org/react";

const HomeUS = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 px-8">
      <Chip
        variant="shadow"
        classNames={{
          base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
          content: "drop-shadow shadow-black text-white",
        }}
      >
        Somos un equipo, TU equipo
      </Chip>
      <div className="flex items-center justify-center px-8 text-center">
        <h2 className="text-xl tracking-wider lg:text-2xl font-anton">
          Te brindamos{" "}
          <p className="inline font-bold text-blue-700">soluciones</p>{" "}
          tecnológicas{" "}
        </h2>
      </div>
      <div className="lg:px-[400px] lg:text-center px-8 font-ubuntu text-lg">
        ¿Listos para el futuro? En <span className="font-bold">Tecsago</span>, somos pioneros en
        soluciones tecnológicas que impulsan la innovación. No somos solo una
        empresa, somos tu socio en la creación de un mañana más brillante.
      </div>
    </div>
  );
};

export default HomeUS;
