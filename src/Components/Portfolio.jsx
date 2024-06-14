/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portafolio2.jpeg";

const imageAltText = "Frase que inspira";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Nasa Space Apps Challenge El Alto",
    description:
      "The Logistics Lead is responsible for the overall planning and execution of the hackathon's logistics. This includes tasks such as: Securing and managing the venue Coordinating transportation and accommodation for participants and staff Managing food an  bev rage",
    url: "https://www.facebook.com/leynavarinia.pachecoquisbert/posts/10233209425564033",
  },
  {
    title: "Líder de Logística",
    description:
      "Get ready to be inspired by her curiosity about new technologies that drives her to seek a more inclusive and diverse world in the field of technology",
    url: "https://www.facebook.com/leynavarinia.pachecoquisbert/posts/10232996153552366",
  },
  {
    title: "Nasa Space Apps Challenge El Alto #Hackatón global ",
    description:
      "Highly innovative and creative projects to transform the reality of the world were presented and defended by the participants of this impactful",
    url: "https://www.facebook.com/UnifranzElAltoOficial/posts/371034141918985",
  },
  {
    title: "En conmemoración del día de la Madre💕 te presentamos  el cronograma del Domingo 26 de mayo de la 8va versión de #mujeresqueinspiran ",
    description:
      "We invite you to join this talk that inspires you to be more efficient with #mujerqueinspiranbolivia, if you have not yet registered you can do so here: 📅Date: May 25 and 26 🚀Virtual Event",
    url: "https://www.facebook.com/mujeresqueinspiranBolivia/posts/471891038843735",
  },
  {
    title: "Topic: “Digital Brain With Obsidian”",
    description:
      "Do you accumulate information that you never use? Reading and learning are worthless if we do not know how to process correctly. Register so you don't miss an incredible talk: March 8 and 9: IWD El Alto 2024: Traces of Empowerment, Flourishing with Strength and Freedom!",
    url: "https://www.facebook.com/photo?fbid=243727748812232&set=a.233399016511772",
  },
  {
    title: " Hackaton: Before You Click 2022",
    description:
      "MENTOR For 3 days, 5 teams of students from #Law, #SystemsEngineering and #Psychology worked together to design and build technological solutions to combat cyberbullying. 💻🕵",
    url: "https://www.facebook.com/permalink.php?story_fbid=430446702616305&id=100069529353738",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
