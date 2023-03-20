import React from "react";
import "./about.css";
import ME from "../../assets/cover.png";
import { FiBook } from "react-icons/fi";
import { TbAward } from "react-icons/tb";
import { VscFileCode } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Who Am I?</h5>
      <h2>About ME</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiBook className="about__icon" />
              <h5>Education</h5>
              <small>BE/B.Tech</small>
            </article>
            <article className="about__card">
              <TbAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            {/* <article className="about__card">
              <VscFileCode className="about__icon" />
              <h5>Projects</h5>
              <small>5+ FrontEnd Projects</small>
            </article> */}
          </div>

          <p align="justify">
          I am Kushal Badal, a passionate DevOps enthusiast currently pursuing my Engineering degree in Information and Communications Technology. With a strong interest in software development and infrastructure management, I have been exploring various DevOps tools and practices to improve the quality and efficiency of software delivery.
          {'\n'}


        Apart from technical skills, I possess excellent communication and teamwork abilities, which I believe are essential in any DevOps team. I am always eager to learn new technologies and practices and stay up-to-date with the latest industry trends. With my passion for DevOps, I am confident in my ability to contribute to any team working towards achieving their DevOps goals.

          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;