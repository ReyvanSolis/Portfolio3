import React from "react";
import "./hero.scss";
import Links from "../sidebar/links/Links";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const items = ["Contact"];
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            REYVAN SABBATHINNO SOLIS
          </motion.h2>
          <motion.h1 variants={textVariants}>Game and VR Developer</motion.h1>
          <p className="introduction">
            Hello, I'm Reyvan Sabbathinno Solis, a passionate Game and VR
            Developer. I love creating immersive experiences and pushing the
            boundaries of technology. I'm always keen to connect with
            like-minded people, discuss exciting projects, and explore potential
            collaborations.
          </p>

          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        VR Developer Video Editor Game Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/prof.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
