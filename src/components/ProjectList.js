
import ProjectPreview from "./ProjectPreview";

const ProjectList = (props) => {
  return ( 
<>
    <ul>
    {props.project.map(project => (
      <li> <ProjectPreview project={project}/></li>
    ))}
    </ul>
    </>
   );
}
 
export default ProjectList;