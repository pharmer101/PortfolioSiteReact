import "./Projects.css"

function Projects (props){


    return(

        <div className="boxes">

            <h3>{props.name}</h3>
           <a href={props.github}>Github Link</a>
           <a href={props.app}>App Link</a>
        </div>
    )
}
export default Projects