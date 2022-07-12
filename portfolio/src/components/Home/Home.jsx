import React from "react";
import "./Home.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import bilel from "../../img/bilel.png";
import instagram from "../../img/instagram.png";
import Particules from "../Particles/Particles";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="intro" id="Home">
      <div className="i-left">
        <div className="i-name">
          <span>Hi ! I am </span>
          <span>Bilel Sekarna</span>
          <span>

          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Full Stack Developer").start();
            }}
          />
          </span>
        </div>
        <a href="../../../public/img/CV_sekarna_bilel.pdf" download>
          <button className="button i-button">Hire me </button>
        </a>
        <Particules />
        <div className="i-icons">
          <div>
            <a href="https://github.com/SekarnaBilel">
              <img src={Github} alt="" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/bilel-sekarna-4551b5178/">
              <img src={LinkedIn} alt="" />
            </a>
          </div>
        </div>
        <hr className="hr1" />
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={bilel} alt="" />
        <div className="i-mail">
          <a classname="gmail" href="">
            Bilelsekarna5@gmail.com
          </a>
          <hr className="hr" />
        </div>
      </div>
    </div>
  );
};

export default Home;
