import hyphenate from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";

const ProjectPreview = (props) => {
    const url = hyphenate(props.project.title)
    
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