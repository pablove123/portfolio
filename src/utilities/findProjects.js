import projectList from "../data/projects";
import hyphenate from "./hyphenateWords";

  function findProject(str) {
  const project = projectList.find(project => hyphenate(project.title) === str
  )
  return project
}



  

export default findProject;