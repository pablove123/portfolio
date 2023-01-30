import projectList from "../data/projects";

const ProjectDetails = (props) => {
  return ( 
    <>
    <h1>{projectList[1].title} </h1>
    <p>{projectList[1].description}</p>
    <img 
        src={projectList[1].image} 
        alt={props.title}
    />
    
    </>
   );
}
 
export default ProjectDetails;