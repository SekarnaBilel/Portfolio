import React from "react";
import "./About.css";
import { Link } from "react-scroll";
import { TagCloud } from "react-tagcloud";
import Symfony from "../../img/Symfony.png";
import Node from "../../img/node.png";
import Reacte from "../../img/react.png";
import Laravel from "../../img/laravel.png";
import { Canvas } from "@react-three/fiber";
import Box from "../Box/Box";
import { OrbitControls } from "@react-three/drei";

const About = () => {
  const data = [
    { value: "jQuery", count: 25 },
    { value: "MongoDB", count: 18 },
    { value: "JavaScript", count: 38 },
    { value: "React", count: 30 },
    { value: "Nodejs", count: 28 },
    { value: "Express.js", count: 25 },
    { value: "HTML5", count: 33 },
    { value: "CSS3", count: 20 },
    { value: "PHP", count: 22 },
    { value: "Babel.js", count: 7 },
    { value: "ECMAScript", count: 25 },
    { value: "Laravel", count: 15 },
    { value: "Symfony", count: 17 },
    { value: "React Native", count: 27 },
    { value: "Mongoose", count: 30 },
    { value: "MySQL", count: 15 },
    { value: "GitHub", count: 30 },
    { value: "NPM", count: 11 },
  ];

  // custom random color options
  // see randomColor package: https://github.com/davidmerfield/randomColor
  const options = {
    luminosity: "light",
    hue: "orange",
  };

  return (
    <div className="about" id="About">
      <div className="a-left">
        <span>Know</span>
        <span>Who I am</span>
        <span>
          I'm a Full Stack Web & Mobile Developer, with the passion in building
          <br /> professional and functional websites and applications.<br />
          Currently I'm studying at Epitech within the Web@cademy formation.
        </span>
        <span>
          Currently I'm studying at Epitech within the Web@cademy formation.
          <br />
          attention to detail. Fan of MMA, outdoor activities, TV series and
          English
          <br /> literature. A family person and father of two fractious boys,
        </span>
        <span>
          Interested in the entire frontend spectrum and working <br />
          on ambitious projects with positive people.
        </span>
        <Link spy={true} to="Contact" smooth={true}>
          <a className="aboute" href="">
            Let’s make something special.
          </a>
        </Link>
      </div>
      <div className="a-right">
        <ul className="UlAbout">
          <li className="a">Javascript</li>
          <li className="b">React</li>
          <li className="c">ReactNative</li>
          <li className="d">PHP</li>
          <li className="e">Laravel</li>
          <li className="f">Symfony</li>
          <li className="g">Jquery</li>
          <li className="h">HTML</li>
          <li className="i">MongoDB</li>
          <li className="j">MySQL</li>
          <li className="k">NodeJS</li>
          <li className="l">Git</li>
          <li className="m">Bootstrap</li>
          <li className="n">ES6</li>
          <li className="o">ExpressJs</li>
          <li className="p">CSS</li>
          <li className="q">SASS</li>
          <li className="r">TeamSpirit</li>
          <li className="s">WordPress</li>
          <li className="t">JSON</li>
          <li className="u">REST</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
