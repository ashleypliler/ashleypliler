import React from "react";
import styles from "./Footer.module.css";
import { AiOutlineInstagram, AiFillLinkedin} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.linkContainer} >
        <a href="https://www.instagram.com/ashleypliler/?hl=en"><AiOutlineInstagram className={styles.links}/></a>
        <a href="https://www.linkedin.com/in/ashley-pliler-862b5a193/"><AiFillLinkedin className={styles.links}/></a>
      </div>
    </footer>
  );
};

export default Footer;
