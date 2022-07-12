import snap from "../../img/snap.png";
import spotify from "../../img/spotiffy.png";
import css from "../../img/CSS.png";
import morpion from "../../img/morpion.png";
import meetic from "../../img/meetic.png";
import quiz from "../../img/quiz.png";
import p4 from "../../img/p4.png";
import cinema from "../../img/cinema.png";
import irc from "../../img/irc.png";
import "./Projects.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const data = [
    {
      id: 1,
      title: "Puissance 4",
      description: "I created the game Puissance 4, in PHP",
      image: p4,
      github: "https://github.com/SekarnaBilel/Puissance4",
    },
    {
      id: 2,
      title: "My Snapchat",
      description:
        "Project in React Native. I recteated and developed the Snapchat app.",
      image: snap,
      github: "https://github.com/SekarnaBilel/MySnapchat",
    },
    {
      id: 3,
      title: "Movies",
      description: "I created a cinema website with an API of movies in React ",
      image: css,
      github: "https://github.com/SekarnaBilel/Movies",
    },
    {
      id: 4,
      title: "Morpion",
      description: "I created the game morpion in 4 hours in Javascript.",
      image: morpion,
      github: "https://github.com/SekarnaBilel/Morpion",
    },
    {
      id: 5,
      title: "FreeAds",
      description:
        "Website for selling and buying second hand products in Laravel",
      image: meetic,
      github: "https://github.com/SekarnaBilel/FreeAds",
    },
    {
      id: 6,
      title: "My Quiz",
      description:
        "Project in Symfony to display, resopond and create quiz questions and themes.",
      image: quiz,
      github: "https://github.com/SekarnaBilel/MyQuizz-",
    },
  ];

  return (
    <section className="portfolio" id="Projects">
      <div className="p-name">
        <span>My </span>
        <span> Portfolio</span>
      </div>
      <div className="container portfolio_container">
        {data.map(({ id, title, image, description, github }) => (
          <article key={id} className="portfolio_item">
            <h3>{title}</h3>
            <div className="portfolio_item-image">
              {/* <img className="portfolio-image" src={image} alt={title} /> */}
            </div>
            <p>{description}</p>
            <div className="portfolio_item-cta"></div>
            <a href={github} className="btn" target="_blank">
              <button className="porfolio_btn">GitHub</button>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
