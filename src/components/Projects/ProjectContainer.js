import "../../styles/projects/projectContainer.css";

function ProjectContainer(props) {
  return (
    <div className="project-container">
      <img className="project-image"></img>
      <h2 className="project-title">{props.projectName}</h2>
      <p className="project-description">{props.projectDesc}</p>
    </div>
  );
}

export default ProjectContainer;