import hyphenate from "../utilities/hyphenateWords";
import find from "../utilities/findProjects";
import { Link } from "react-router-dom";
import findProject from "../utilities/findProjects";

const ProjectPreview = (props) => {
    const url = hyphenate(props.project.title)
    const rUrl = findProject(url)
    
    // console.log("after hyphenate", url)
    // console.log("all done", rUrl)
  return ( 
    <>
    <div>
    <img 
        src={props.project.image} 
        alt={props.title}
    />

    <section>
        <h3>
            {props.project.title}
        </h3>
        <Link to={`/${url}`}>
		<button>
            Learn more
        </button>
        </Link>
    </section>
</div>
    </>
   );
}
 
export default ProjectPreview;