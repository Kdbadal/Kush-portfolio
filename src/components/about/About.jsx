import React from "react";
import "./about.css";
import ME from "../../assets/coverr.png";
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
            <article className="about__card">
              <VscFileCode className="about__icon" />
              <h5>Projects</h5>
              <small>5+ FrontEnd Projects</small>
            </article>
          </div>

          <p align="justify">
          I am a 3rd year student in Engineering in Information and Communication Technology, i have a keen interest in DevOps and are passionate about exploring this field further. I understand that DevOps is a critical part of modern software development, and i am eager to learn more about its principles and practices.

I have a solid foundation in programming, software development, and infrastructure management, which gives you a good understanding of how software systems work. I am also familiar with various DevOps tools and technologies, such as Git, Jenkins, Docker, and Kubernetes, and you are keen to gain more experience in using them.

I am an analytical thinker who enjoys solving problems and improving processes. I understand the importance of collaboration between development and operations teams, and I believe that DevOps can help organizations achieve better software quality, faster time-to-market, and greater efficiency.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;