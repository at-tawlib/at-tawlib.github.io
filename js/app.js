particlesJS("particles-js", 
    {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#2f8749",
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0,
        color: "#000",
      },
      polygon: {
        nb_sides: 6,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 40,
      random: true,
      anim: {
        enable: true,
        speed: 80,
        size_min: 40,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: "#ca9f15",
      opacity: 1,
      width: 3.3144200948555453,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "bottom",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "grab",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#000000",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }}

);
