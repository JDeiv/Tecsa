import { ReactNode, useState } from "react";
import Footer from "./Footer";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FaPhoneVolume, FaAddressCard } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import Header2 from "./Header2";

const Layout = ({ children }: { children: ReactNode }) => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  return (
    <>
      <section className="lg:w-[100%] lg:block hidden">
        {/* Topbar Start */}
        <div className="items-center justify-center flex gap-4 p-6">
          <div className="col-start-2 font-semibold text-center border-r-2 flex items-center justify-center gap-4 px-2">
            <i className="text-xl">
              <FaPhoneVolume />
            </i>
            (+593) 995833857
          </div>
          <div className="font-semibold text-center border-r-2 flex items-center justify-center gap-4 px-2">
            <i className="text-xl">
              <FaAddressCard />
            </i>
            Quito 
          </div>
          <div className="font-semibold text-center border-r-2 flex items-center justify-center gap-4 px-2">
            <i className="text-xl">
              <MdMarkEmailRead />
            </i>
            jorge.sanchez@tecsago.com
          </div>
          <div className="flex items-center justify-start gap-4">
            <a
              href="https://facebook.com/tunombredeusuario"
              target="_blank"
              className={`transition-transform transform text-xl ${
                hovered1 ? "scale-150" : "scale-100"
              } hover:scale-150 cursor-pointer text-blue-500`}
              onMouseEnter={() => setHovered1(true)}
              onMouseLeave={() => setHovered1(false)}
            >
              <FiFacebook /> 
            </a>
            <a
              href="https://instagram.com/tunombredeusuario"
              target="_blank"
              className={`transition-transform transform text-xl ${
                hovered2 ? "scale-150" : "scale-100"
              } hover:scale-150 cursor-pointer text-red-500`}
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
            >
              <FiInstagram /> 
            </a>
            <a
              href="https://twitter.com/tunombredeusuario"
              target="_blank"
              className={`transition-transform transform text-xl ${
                hovered3 ? "scale-150" : "scale-100"
              } hover:scale-150 cursor-pointer text-cyan-500`}
              onMouseEnter={() => setHovered3(true)}
              onMouseLeave={() => setHovered3(false)}
            >
              <FiTwitter /> 
            </a>
          </div>
        </div>
      </section>

      <div>
        <Header2 />
      </div>

      {children}

      <Footer />
    </>
  );
};

export default Layout;
