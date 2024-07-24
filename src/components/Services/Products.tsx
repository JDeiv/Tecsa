import React from "react";
import SCompu from "./SCompu/SCompu";
import Server from "./SCompu/Server";
import SCam from "./SCompu/SCam";


const Products: React.FC = () => {
  return (
    <>
      <SCompu/>

      <Server/>

      <SCam/>

      <div className="h-20 pt-16 bg-gradient-to-b from-slate-300 to-white">

      </div>
    </>
  );
};

export default Products;
