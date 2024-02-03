import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "VRPasgat",
    img: "/VRpasgat.png",
    desc: "VRPasgat is a tactical combat simulation using Virtual Reality to enhance user experience and the immersivnes of the game. VRPasgat is a colaboration work between Universitas Klabat and Indonesian Air Force to be used in Military Cadet Training.",
  },
  {
    id: 2,
    title: "Boi-Boian",
    img: "/Boi.png",
    desc: "Boi-boian is a traditional Indonesian game that we created using Virtual Reality. By using Virtual Reality technology and supported by VR Interaction Framework, this game provides a fun gaming experience. This game is the first traditional game to be played on a VR platform and the environment design is made to reflect Indonesian culture and tradition.",
  },
  {
    id: 3,
    title: "Intelli Mart",
    img: "/Intell.png",
    desc: "This research studies the integration of drone and robotic technology in the modernisation of traditional market systems. Traditional markets, characterised by unclean environments, overcrowding, irregular sales areas, and mostly cash-based transactions, face many challenges.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
