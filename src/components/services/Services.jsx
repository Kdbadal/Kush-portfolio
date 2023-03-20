import React from "react";
import "./services.css";
import { BiRightArrow } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Services I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>CI/CD pipeline</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>
              A pipeline is a process that drives software development through a path of building, testing, and deploying code
              </p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>
               A single source repository
              </p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Frequent check-ins to main branch</p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Automated builds and Self-testing builds</p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Frequent iterations</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Automation and testing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Unlike manual testing, automatic test cases make testing faster, which means you can deploy products to market more quickly.</p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>
              Improved team collaboration between quality assurance architects and developers, which ensures an efficient software lifecycle
              </p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Integrating multimedia content onto a site</p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Testing web applications</p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>
                Troubleshooting problems with performance or user experience
              </p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Collaborating with designers, developers, and stakeholders</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Cloud Infrastructure Management</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>I can help you build and manage a secure and scalable cloud infrastructure using platforms such as AWS, Azure or GCP.</p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>I will assist you in selecting the right cloud provider based on your requirements,</p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>architect, deploy, and maintain the cloud infrastructure to meet your business needs.</p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Necessary and basic knowledge of microservices and instances</p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p></p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;