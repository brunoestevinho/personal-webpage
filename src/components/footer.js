import React from "react";

const Footer = () => (
  <section className="p-12">
    <footer className="m-6 text-white ">
      <p className="px-4 text-center pb-12">LinkedIn | GitHub</p>
      <p className="text-center">
        © Bruno Estevinho, {new Date().getFullYear()}
      </p>
    </footer>
  </section>
);

export default Footer;
