import { ISourceOptions } from "tsparticles-engine";
import { images } from "../icons/Stack";

const generateParticleConfig = () => {
  return {
    background: {
      color: "#1B1B1E",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
    detectRetina: true,
    fpsLimit: 60,
    fullScreen: {
      zIndex: -1,
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 300,
          duration: 3,
          factor: 100,
          speed: 0.5,
          maxSpeed: 50,
        },
      },
    },
    particles: {
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
        value: images.length * 1.25,
      },
      opacity: {
        random: true,
        value: {
          min: 0.5,
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
          images: images,
        },
        type: "image",
      },
      size: {
        value: 36,
        animation: {
          speed: 100,
          minimumValue: 0.1,
        },
      },
    },
  } as ISourceOptions;
};

export default generateParticleConfig();
