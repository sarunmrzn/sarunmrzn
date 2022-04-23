import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AntD from "../icons/antd.png";
import Arch from "../icons/arch.png";
import Bootstrap from "../icons/boostrap.png";
import CSS3 from "../icons/css-3.png";
import Debian from "../icons/debian.png";
import Docker from "../icons/docker.webp";
import Git from "../icons/git.png";
import gql from "../icons/graphql.png";
import grpc from "../icons/grpc.png";
import HTML from "../icons/html.png";
import Javascript from "../icons/javascript.png";
import Linux from "../icons/linux.png";
import Mongo from "../icons/mongo.png";
import MUI from "../icons/mui.png";
import Nest from "../icons/nest.png";
import Next from "../icons/next.png";
import Node from "../icons/node.png";
import Postgres from "../icons/pgsql.webp";
import Photoshop from "../icons/photoshop.png";
import ReactIcon from "../icons/react.png";
import StyledComponents from "../icons/styled-components.png";
import Tailwind from "../icons/tailwind.png";
import Terminal from "../icons/terminal.png";
import Typescript from "../icons/typescript.png";
import Vue from "../icons/vue.png";
import xd from "../icons/xd.png";

const imageList = [
  Arch,
  Debian,
  Linux,
  Terminal,
  HTML,
  CSS3,
  Javascript,
  Typescript,
  ReactIcon,
  Vue,
  Node,
  Postgres,
  Mongo,
  Photoshop,
  xd,
  Nest,
  Next,
  Tailwind,
  Git,
  Docker,
  gql,
  grpc,
  StyledComponents,
  MUI,
  AntD,
  Bootstrap,
];

const formattedList = imageList.map((image) => {
  return {
    src: image,
    width: 32,
    height: 32,
  };
});

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section id="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#1B1B1E",
            },
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
          fullScreen: {
            zIndex: 1,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onDiv: {
                selectors: "#repulse-div",
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  force: 10,
                },
              },
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 32,
                divs: {
                  distance: 200,
                  duration: 0.4,
                  mix: false,
                  selectors: [],
                },
              },
              grab: {
                distance: 400,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },

            links: {
              color: {
                value: "#000",
              },
              distance: 200,
              opacity: 0.4,
            },
            move: {
              attract: {
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              speed: 0.5,
              enable: true,
              outModes: "out",
            },
            number: {
              density: {
                enable: true,
              },
              value: imageList.length * 1.25,
            },
            opacity: {
              random: true,
              value: {
                min: 0.1,
                max: 2,
              },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.2,
              },
            },
            rotate: {
              random: true,
              animation: {
                enable: true,
                speed: 5,
              },
              direction: "random",
            },

            shape: {
              options: {
                character: {
                  fill: false,
                  font: "Verdana",
                  style: "",
                  value: "*",
                  weight: "400",
                },
                char: {
                  fill: false,
                  font: "Verdana",
                  style: "",
                  value: "*",
                  weight: "400",
                },
                polygon: {
                  sides: 5,
                },
                star: {
                  sides: 5,
                },
                image: formattedList,
                // images: formattedList,
              },
              type: "image",
            },
            size: {
              value: 24,
              animation: {
                speed: 40,
                minimumValue: 0.1,
              },
            },
            stroke: {
              color: {
                value: "#000000",
                animation: {
                  h: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    sync: true,
                  },
                  s: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    sync: true,
                  },
                  l: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    sync: true,
                  },
                },
              },
            },
          },
        }}
      />
    </section>
  );
};

export default Hero;
