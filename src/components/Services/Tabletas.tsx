import React from "react";

import { Tab } from "@headlessui/react";


import Cantidades from "../home/Cantidades";
import TProyecto from "./Tabs/TProyecto";
import TRed from "./Tabs/TRed";
import TCompu from "./Tabs/TCompu";
import TSecurity from "./Tabs/TSecurity";

import "./StyleService.css";

interface dataTab {
  id?: number;
  tabName: string;
  title: string;
  date: string;
  commentCount: number;
  shareCount: number;
  urlImage: string;
}


const data: dataTab[] = [
  {
    id: 1,
    tabName: "Proyectos",
    title: "Diseño e implementación de proyectos tecnológicos",
    date: "5h ago",
    commentCount: 5,
    shareCount: 2,
    urlImage:
      "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    tabName: "Infraestructura de Red",
    title: "Infraestructura en redes",
    date: "2h ago",
    commentCount: 3,
    shareCount: 2,
    urlImage:
      "https://images.unsplash.com/photo-1610041321327-b794c052db27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    tabName: "Cómputo",
    title: "Laptops y equipos de Cómputo de última generación",
    date: "Jan 7",
    commentCount: 29,
    shareCount: 16,
    urlImage:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhbWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    tabName: "Seguridad Electrónica",
    title: "Equipos CCTV y Seguridad Electrónica",
    date: "Mar 19",
    commentCount: 24,
    shareCount: 12,
    urlImage:
      "https://images.unsplash.com/photo-1581351123004-757df051db8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
];

const Tabletas:React.FC = () => {
  return (
    <>
      <div className="relative flex w-full bg-fondo ">
        <div className="absolute right-16 -z-50">
          <img src="images/star.webp" alt="" className="object-cover "/>
        </div>
        <div className="absolute h-full md:-right-12 -right-44 w-96 -bottom-48 ">
          <img src="images/mano.webp" alt="" className="object-cover w-full transition-transform duration-1000 ease-in-out transform left-0" style={{animation: 'moveLeft 10s infinite'}}/>
        </div>
        <div className="w-full py-10 md:py-16 lg:p-20 ">
        <h1 
        className="font-anton text-3xl lg:text-center
        lg:text-[5rem] md:text-[3rem] leading-8 tracking-[0.2rem] 
        text-start md:p-16 p-8">
        Servicios  de Alta 
        <p className="font-serif italic text-3xl 
        lg:text-[4rem] font-semibold
        text-start pt-12 lg:text-center ">Calidad</p>
        </h1>
        </div>
        
      </div>
      <div className="w-full py-2 sm:px-0">
        <Tab.Group>
          <Tab.List className="items-center px-4 lg:flex md:flex md:justify-center lg:justify-center">
            {data.map((item) => (
              <Tab key={item.id} className={"tabs"}>
                {({ selected }) => (
                  <a
                    className={`cursor-pointer px-4 py-2  ${
                      selected
                        ? "lg:tab lg:tab-lifted md:tab md:tab-lifted uppercase lg:font-fira tab-active lg:text-lg font-bold bg-gradient-to-r from-slate-500 to-white md:bg-none lg:bg-none  "
                        : "tab lg:tab-lifted md:tab-lifted text-base"
                    }`}
                  >
                    {item.tabName}
                  </a>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2 bg-cover sm:mt-1 bg-fondoBlue ">
            <TProyecto/>

           <TRed/>

           <TCompu/>

           <TSecurity/>

          </Tab.Panels>
        </Tab.Group>
        <Cantidades />
      </div>
    </>
  );
};

export default Tabletas;
