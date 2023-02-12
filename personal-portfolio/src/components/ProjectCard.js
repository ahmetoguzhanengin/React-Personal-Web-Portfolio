import { Col } from "react-bootstrap";
import github from "../assets/img/nav-icon6.svg";
 
export const ProjectCard = ({title, description, imgUrl, projectlink}) => {
return(
    <Col sm = {6} md = {4}>
        <div className="proj-imgbx">
            <img src = {imgUrl} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span><br/>
                <span><a href={projectlink} id ="span-color" ><img  id="project-desc-icon" src={github} alt=""/><b> Github'da incele</b></a></span>
               
            </div>
        </div>
    </Col>

)
}