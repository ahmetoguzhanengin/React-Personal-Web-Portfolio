import { Container, Col, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/LOGO.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';
import navIcon6 from '../assets/img/nav-icon6.svg';

export const Footer = () =>{

    return(
        <footer className="footer">
            <Container>
                <Row className ="align-item-center">
                    <MailchimpForm/>
                    <Col sm ={2}>
                        <div id ="footer-logo">
                        <img src ={logo} alt="Logo"/>
                        </div>
                    </Col>
                    <Col>
                    <span> Bu site yapılırken logo için Midjourney kullanılmıştır. Site React ve Node js kullanılarak yapılmıştır. Sitenin kaynak kodlarına github hesabımı ziyaret ederek ulaşabilirsiniz.</span>
                    </Col>
                    <Col sm ={4} className="text-center text-sm-end">
                    <div classNane ="social-icon" id = "social-icons-footer">
                        <a href ="https://www.linkedin.com/in/ahmet-o%C4%9Fuzhan-engin-267667184/"><img src ={navIcon1}/></a>
                        <a href="https://github.com/ahmetoguzhanengin"><img src={navIcon6} alt=""/></a>
                        <a href ="https://discord.gg/YewzCcgTFs"><img src ={navIcon4}/></a>
                        <a href ="mailto:ahmetoguzhanengin@gmail.com"><img src ={navIcon5}/></a>
                    </div>
                    <p>CopyRight 2022. All Right Reserved</p>
                    
                </Col>

                </Row>
            
            </Container>

        </footer>
    )
}