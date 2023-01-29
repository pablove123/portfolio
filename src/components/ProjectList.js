import projectList from "../data/projects";
import ProjectPreview from "./ProjectPreview";

const ProjectList = (props) => {
  return ( 
<>
    <ul>
    {props.project.map(project => (
      <li> <ProjectPreview title={project.title}/></li>
    ))}
    </ul>
    </>
   );
}
 
export default ProjectList;