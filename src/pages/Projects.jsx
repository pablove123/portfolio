import projectList from "../data/projects";
import ProjectList from "../components/ProjectList";

const Projects = (props) => {
  return ( 
    <>
    <ProjectList project={projectList}/>
    </>
   );
}
 
export default Projects;