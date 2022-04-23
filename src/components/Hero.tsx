import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import particleConfig from "../config";
import Me from "../images/Me.png";

const Hero = () => {
  return (
    <section id="hero">
      <Particles
        id="tsparticles"
        init={async (engine: Engine) => await loadFull(engine)}
        options={particleConfig}
      />
      <div id="top-arc">
        <section className="self-intro">
          <h1>SARUN MAHARJAN</h1>
          <h3>FULL-STACK DEVELOPER</h3>
        </section>
      </div>
      <div id="display-picture">
        <img src={Me} />
      </div>
    </section>
  );
};

export default Hero;
