const ProjectPreview = (props) => {
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
				<button>
            Learn more
        </button>
    </section>
</div>
    </>
   );
}
 
export default ProjectPreview;