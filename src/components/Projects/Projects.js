import "../../styles/projects/projects.css";
import ProjectContainer from "./ProjectContainer";


function Projects() {
  return (
    <div className="projects">
      <h1 className="projects-title">Projects</h1>
      <ProjectContainer projectName="Example Project" projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      <ProjectContainer projectName="Example Project" projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      <ProjectContainer projectName="Example Project" projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
    </div>
  );
}

export default Projects;