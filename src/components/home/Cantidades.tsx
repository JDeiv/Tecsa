import React from "react";
import { FaLaptopHouse } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const Cantidades:React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-gradient-to-r from-primary-200 to-secondary-300">
        <div className="flex flex-col lg:flex-row md:flex-row stat-shadow ">
          <div className="stat">
            <div className="stat-figure text-primary">
              <BiSupport className="inline-block w-8 h-8 stroke-current"/>
            </div>
            <div className=" font-ubuntu text-primary-content font-semibold">Proyectos Exitosos</div>
            <div className="stat-value text-secondary font-anton tracking-wider">+1000</div>
            <div className=" text-lg font-ubuntu text-primary-content font-semibold">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaLaptopHouse className="inline-block w-8 h-8 stroke-current"/>
              
            </div>
            <div className=" font-ubuntu text-primary-content font-semibold">Entidades Beneficiadas</div>
            <div className="stat-value text-primary font-anton tracking-wider">+50</div>
            <div className=" text-lg  font-ubuntu text-primary-content font-semibold">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="/images/img2.jpg" />
                </div>
              </div>
            </div>
            <div className="stat-value font-anton tracking-wider text-secondary-content">+10</div>
            <div className="text-border text-primary-content font-semibold  font-ubuntu">Años a su Servicio</div>
            <div className=" text-primary-content   font-semibold text-lg font-ubuntu">31 tasks remaining</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cantidades;
