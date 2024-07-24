import React,{ useRef, useEffect, useState } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { Link } from "react-router-dom";
import { SERVICES } from "../../router/paths";

interface Props {
  image: string;
  title: string;
  description: string;
}

const Card3D: React.FC<Props> = ({ image, title, description }) => {
  const calcX = (y: number, ly: number) =>
    -(y - ly - window.innerHeight / 2) / 20;
  const calcY = (x: number, lx: number) =>
    (x - lx - window.innerWidth / 2) / 20;

  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault();
    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);

    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  const target = useRef(null);
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 170, friction: 100 },
    })
  );

  useGesture(
    {
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.1,
        }),
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { target, eventOptions: { passive: false } }
  );

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className=" hover:z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <animated.div
        ref={target}
        className="w-full shadow-xl border  card-compact bg-base-100 lg:rounded-tl-[2rem] lg:rounded-br-[2rem]"
        style={{
          transform: "perspective(2000px)",
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
        }}
      >
        <figure className="p-2 ">
          <img src={image} alt="Image de " className="lg:rounded-tl-[2rem] lg:rounded-br-[2rem]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-anton tracking-[0.1rem] ">{title}</h2>
          <p className="font-ubuntu">{description}</p>
          <div className="justify-center card-actions ">
            <Link to={SERVICES}>
              {isHovered && (
                <button className="text-base btn hover:btn-primary">Visitar</button>
              )}
            </Link>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Card3D;
