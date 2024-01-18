import React from "react";
import styled from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styled.footer}>
      {" "}
      <img
        src="/truck.png"
        className="flex justify-center  items-end h-[60px] w-[74px]  md:h-[80px] md:w-[100px] md:mr-[350px]"
      />{" "}
    </div>
  );
};

export default Footer;
