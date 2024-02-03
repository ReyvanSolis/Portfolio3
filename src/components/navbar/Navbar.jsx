import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio.
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/reyvan-sabbathinno-solis-01649b2b1/">
            <img src="/Linkedin2.png" alt="" />
          </a>
          <a href="https://www.instagram.com/reyvans_solis/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.discordapp.com/users/690523187061981214">
            <img src="/discord.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
