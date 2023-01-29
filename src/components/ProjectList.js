import projectList from "../data/projects";

const ProjectList = (props) => {
  return ( 
<>
    <ul>
    {projectList.map(project => (
      <li> {project.title}</li>
    ))}
    </ul>
    </>
   );
}
 
export default ProjectList;