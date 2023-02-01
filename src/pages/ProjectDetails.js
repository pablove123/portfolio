
import { useParams } from "react-router-dom";
import findProject from "../utilities/findProjects";

const ProjectDetails = (props) => {
  const pro = useParams()
  let url = pro.project
  let project = findProject(url)
  console.log("this is pro" , pro.project)
  console.log(findProject("mymoodymonster"))
  console.log("this is project", project)
  return ( 
    <>
    <h1>{project.title} </h1>
    <p>{project.description}</p>
    <img 
        src={project.image} 
        alt={props.key}
    />
    <a rel="noreferrer" target="_blank"  href={project.repositoryLink}><button>Github</button></a>
    </>
   );
}
 
export default ProjectDetails;