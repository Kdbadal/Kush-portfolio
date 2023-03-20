
import React from "react";
import "./experience.css";
import { BiCheckbox } from "react-icons/bi";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I offer</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Tools I know</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>Git</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>Github</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>Docker</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>Kubernetes</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>Terraform</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>Jenkins</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>Grafana</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>Ansible</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>OS, Cloud and Languages </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>Linux</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>AWS</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>Server Maintainance</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>Java</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>Python</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>MySQL</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;