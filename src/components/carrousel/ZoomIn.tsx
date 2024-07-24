import React from "react";
import { useSpring, animated } from "@react-spring/web";

interface ZoomInDivProps {
  background: string;
  children: React.ReactNode;
}

const ZoomInDiv: React.FC<ZoomInDivProps> = ({ background, children }) => {
  const zoomInProps = useSpring({
    from: { transform: "scale(1)" },
    to: { transform: "scale(1.2)" },
    config: { duration: 6000 }, // Duración de la animación en milisegundos
    loop: true, // Hacer que la animación se repita
  });

  // const divStyles = {
  //   with: "full",

  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   background: `url(${background}) center/cover no-repeat`,

  //   overflow: "hidden", // Evita que el contenido se desborde si es más grande
  // };

  // const contentStyles = {
  //   position: "absolute",
  //   zIndex: 1,
  // };

  return (
    <>
      <animated.div
        style={{ ...zoomInProps }}
        className="w-full h-screen origin-center transform lg:relative"
      >
        <img
          src={background}
          alt="Constant Zooming Image"
          className="object-cover w-full h-full"
        />
      </animated.div>

      {/* <div className="absolute flex items-center justify-center w-full pointer-events-none lg:top-0 lg:left-0 md:top-48 top-24 lg:h-screen">
        <Fade>
          <img src="images/puntos.png" alt="" className="w-screen h-screen" />
        </Fade>
      </div> */}

      <div className="absolute flex items-center justify-center w-full pointer-events-none lg:top-0 lg:left-0 md:top-48 top-24 lg:h-screen">
        {children}
      </div>
    </>
  );
};

export default ZoomInDiv;
