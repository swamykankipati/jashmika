import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectSection(props) {
  const img1 = require("../images/p1.jpeg");
  const img2 = require("../images/p2.jpeg");
  const img3 = require("../images/p3.jpeg");
  const projects = [
    {
      id: 1,
      title: "Work From Home",
      imageurl: img1,
      content: "Work Online Stay Home ",
    },
    {
      id: 2,
      title: "Visualization",
      imageurl: img2,
      content: "Visualization is creating images, diagrams, or animations to communicate a message.",
    },
    {
      id: 3,
      title: "Portfolio",
      imageurl:img3,
      content: "thinking about things other than making the best products",
    },
  ];
  return (
    // <!-- Projects section  -->
    <div className="container text-center my-5">
      <h1 className="font-weight-light">
        My <span className="text-success">Projects</span>
      </h1>
      <div className="lead">Im Done with My Work like This</div>
      <div className="row my-5 pt-3">
        {projects.map((project) => (
          <div key={project.id} className="col-12 col-md-4 my-2">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div className="my-5">
        <a href="/" className="text-dark text-right">
          <h5>
            See more Works
            <i className="fas fa-arrow-right align-middle"></i>
          </h5>
        </a>
      </div>
    </div>
  );
}
export default ProjectSection;
