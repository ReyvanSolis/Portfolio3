import { useRef } from "react";
import "./certifiicate.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "INVENTIA",
    img: "/Inven.png",
    desc: "1st Place in National Game Development Competition.                        ",
  },
  {
    id: 2,
    title: "INDONERIS",
    img: "/indo.png",
    desc: "2nd Place in National Game Design Competition.                           ",
  },
  {
    id: 3,
    title: "CORISINDO",
    img: "/coris.png",
    desc: "2nd Place in National Competition Category Business Plan.               ",
  },
  {
    id: 4,
    title: "VSGA KOMINFO",
    img: "/vsga.png",
    desc: "Participated in Data Management Staff Training by KOMINFO and DIGITALENT",
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

const Certificate = () => {
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
        <h1>Certificate and Awards</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Certificate;
