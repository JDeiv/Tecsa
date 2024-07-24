import React from "react";
import Layaut from "../../layaut/Layaut";


import {
  Image,
  Card,
  
  CardBody,
  
} from "@nextui-org/react";

import { Tabs, Tab } from "@nextui-org/react";
import Team from "./Team";
import Brands from "./Brands";

import Company from "./Company";
import { Fade, Zoom } from "react-awesome-reveal";

const About:React.FC = () => {
  const colors = ["success"];

  return (
    <Layaut>
      <div className="flex flex-col items-center gap-4 mb-16 lg:grid lg:grid-cols-2 font-ubuntu">
        <Zoom>
        <div className="h-full col-start-1 lg:py-20">
          <h1 className="font-anton text-6xl tracking-[0.2rem] py-4 px-8">
            Sobre Nosotros
          </h1>
          <p className="py-4 pl-4 pr-8 mx-4 font-ubuntu from-content1-foreground">
            {" "}
            Somos una empresa dedicada a la comercialización y distribución de
            productos y equipos informáticos, electrónicos y telecomunicaciones,
            así como a la prestación de servicios de outsourcing de manera
            profesional y de alta calidad ofreciendo a nuestros clientes
            soluciones y herramientas para optimizar sus recursos y mejorar su
            entorno empresarial. Esperamos que este Folleto de Servicios
            despierte en ustedes el interés por iniciar una relación de negocios
            duradera y confiable asegurándoles la obtención de servicios con
            excelente calidad y a costos muy competitivos.
          </p>
        </div>
        
        <div className="flex items-center justify-center h-full p-8 card lg:p-2">
          <div className="card rounded-xl bg-current lg:rounded-tr-[250px] p-2 lg:shadow-none shadow-2xl">
            <Image
              src="images/img1.jpg"
              alt="Imagen zoom cover"
              className="lg:objet-cover  rounded-3xl lg:-left-10 w-full g:shadow-none shadow-xl shadow-base-100 lg:-bottom-10 object-center lg:rounded-tr-[250px]  lg:transition-transform lg:transform-gpu lg:hover:scale-110 lg:scale-y-100 scale-y-125"
            />
          </div>
          
        </div>
        </Zoom>
        <div className="flex items-center justify-center col-start-1 px-6 py-4">
          <div className="flex flex-col w-full">
            {colors.map((color) => (
              <Tabs
                key={color}
                color={'success'}
                aria-label="Tabs colors"
                radius="full"
                className="objet-center "
              >
                <Tab title="Misión" className="font-semibold">
                  <Card className="font-ubuntu ">
                    <CardBody>
                    <p className="font-normal"><span className="text-blue-500 ">Tecsago Soluciones Informáticas & Tecnología </span> 
                      somos una empresa dedicada al servicio profesional y
                      comercialización en el campo tecnológico ofreciendo una
                      solución de calidad basada en principios de buenas
                      prácticas para el apoyo empresarial e institucional.</p>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="music" title="Visión" className="font-semibold">
                  <Card className="font-ubuntu">
                    <CardBody>
                      <p className="font-normal">
                      <span className="font-semibold text-blue-500">Convertirnos</span> en una empresa líder y de alta competitividad
                      en servicios informáticos, electrónicos y tecnológicos,
                      llegar a ser un aliado estratégico de nuestros clientes
                      para brindarles soluciones y herramientas corporativas de
                      calidad
                      </p>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="videos" title="Valores" className="font-semibold">
                  <Card>
                    <CardBody className="flex flex-col gap-4 font-ubuntu ">
                      <p className="font-normal">
                        <span className="font-semibold text-blue-500 ">Trabajo en equipo</span>, promoviendo y apoyando un equipo
                        homogéneo y multidisciplinar
                      </p>
                      <p className="font-normal">
                        <span className="font-semibold text-blue-500">Colaboración</span>, trabajamos junto con nuestros proveedores
                        y clientes para mejorar día a día la calidad con los
                        mismos y satisfacer sus necesidades.
                      </p>
                      <p className="font-normal">
                      <span className="font-semibold text-blue-500">Servicio</span>, cumplimos con nuestros compromisos y nos
                        hacemos responsables de nuestro rendimiento en todas
                        nuestras decisiones y acciones, basándonos en una gran
                        voluntad de servicio por y para nuestros clientes.
                      </p>
                      <p className="font-normal">
                      <span className="font-semibold text-blue-500">Mejora continua e Innovación</span>, nos damos cuenta de la
                        importancia de mirar hacia el futuro por tanto ofrecemos
                        lo último del mercado para dar apoyo y servicio único a
                        nuestros clientes.
                      </p>
                      <p className="font-normal">
                      <span className="font-semibold text-blue-500">Transparencia</span>, la implicación y compromiso del personal
                        no sería posible sin una absoluta transparencia en los
                        procesos, todo el personal puede disponer de lo que se
                        hace en la empresa.
                      </p>
                      <p className="font-normal">
                      <span className="font-semibold text-blue-500">Comunicación</span>, promovemos y facilitamos la comunicación
                        entre todos los niveles de la organización disponiendo
                        de herramientas eficaces, convocando los foros adecuados
                        y con el compromiso constante de la dirección
                      </p>
                      <p className="font-normal">
                      <span className="font-semibold text-blue-500">Integridad y Ética</span>, respetamos y cumplimos nuestra
                        normativa interna y todo lo que rodea a nuestra empresa.
                      </p>
                    </CardBody>
                  </Card>
                </Tab>
              </Tabs>
            ))}
          </div>
        </div>
      </div>
      {/* <Carrousel2 title='Nuestros Aliados'/> */}
      <Fade>
      <Company />
      </Fade>

      <Team title="Unidos para ofrecerte lo mejor" />

      <Brands /> 
      
    </Layaut>
  );
};

export default About;
