import React from "react";

import BE from "../images/BE.png";

const Footer = () => (
  <section className="p-12">
    <footer className="m-6 text-white ">
      <img className="w-20 mx-auto pb-2" alt="BE" src={BE} />
      <p className="text-center">
        © Bruno Estevinho, {new Date().getFullYear()}
      </p>
    </footer>
  </section>
);

export default Footer;
