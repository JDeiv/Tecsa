//import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const Perfil = () => {
  return (
    <>
      <div className="grid items-center grid-cols-3 justify-items-center">
        <div className="">
          <Card className="py-4">
            <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
              <h1 className="font-bold uppercase text-tiny">Nombre Gerente</h1>
              <small className="text-default-500">Titulo  </small>
              <h4 className="font-bold text-large">Gerente </h4>
            </CardHeader>
            <CardBody className="py-2 overflow-visible">
              <Image
                alt="Card background"
                className="object-cover h-[250px] w-[250px] rounded-xl"
                src="/images/img2.jpg"
                width={270}
              />
            </CardBody>
          </Card>
        </div>
        <section className="w-full h-full col-start-2 border">
        
        </section>
        <section className="w-full h-full col-start-3">

        </section>
      </div>
    </>
  );
};

export default Perfil;
