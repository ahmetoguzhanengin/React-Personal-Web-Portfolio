import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Pm from "../assets/img/ProcessMining.PNG"
import Blog from "../assets/img/Blog.PNG";
import PersonalWeb from "../assets/img/aspKisiselWeb.PNG";
import AdviceProject from "../assets/img/reactAdviceProject.PNG";
import ReactPW from "../assets/img/ReactPersonalWeb.PNG";
import toDo from "../assets/img/toDoListProject.PNG";
import carSeller from "../assets/img/CarSeller.PNG";
import AdminDash from "../assets/img/AdminDashboard.JPG";
import aspAdmin from "../assets/img/aspAdmin.PNG";
import WriterDash from "../assets/img/WriterDashboard.PNG";
import HotelService from "../assets/img/HotelService.PNG";


import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Projects = () => {
    const fullStackProjects = [
        {
          title: " Asp.Net Core 5.0 Blog Projesi",
          description: "Asp.Net Core 5.0 ile yapılmış kendi içinde admin ve yazar kontrol paneline sahip aynı zamanda mesajlaşma mekanizması bulunan blog projesi.",
          imgUrl: Blog,
          projectlink: "https://github.com/ahmetoguzhanengin/Asp.Net-Core-5.0-Blog-Project",
        },
        {
          title: " Asp.Net Core 5.0 Blog Projesi",
          description: "Asp.Net Core 5.0 ile yapılmış kendi içinde admin ve yazar kontrol paneline sahip aynı zamanda mesajlaşma mekanizması bulunan blog projesi.",
          imgUrl: AdminDash,
          projectlink: "https://github.com/ahmetoguzhanengin/Asp.Net-Core-5.0-Blog-Project",
        },
        {
          title: " Asp.Net Core 5.0 Blog Projesi",
          description: "Asp.Net Core 5.0 ile yapılmış kendi içinde admin ve yazar kontrol paneline sahip aynı zamanda mesajlaşma mekanizması bulunan blog projesi.",
          imgUrl: WriterDash,
          projectlink: "https://github.com/ahmetoguzhanengin/Asp.Net-Core-5.0-Blog-Project",
        },
        {
          title: "Admin Panelli Kişisel Web Projesi",
          description: "Admin panelinden ikonları içeriği ve resminizi güncelleyebildiğiniz kişisel web projesi.",
          imgUrl: PersonalWeb,
          projectlink: "https://github.com/ahmetoguzhanengin/My-Personal-Web-Site",
        },
        {
          title: "Admin Panelli Kişisel Web Projesi",
          description: "Admin panelinden ikonları içeriği ve resminizi güncelleyebildiğiniz kişisel web projesi.",
          imgUrl: aspAdmin,
          projectlink: "https://github.com/ahmetoguzhanengin/My-Personal-Web-Site",
        },
     
      ];
      const frontEndProjects = [
        {
          title: "React Random Advice Projesi",
          description: "React ile yapılmış olan bu projede her tıkladığınızda size rastgele bir advice vermektedir.",
          imgUrl: AdviceProject,
          projectlink: "https://github.com/ahmetoguzhanengin/React-Mini-RandomAdvice-Project",
        },
        {
          title: "Kişisel Web Projesi",
          description: "React ile yapılmış olan bu projeyi şuanda incelediğiniz projedir. ",
          imgUrl: ReactPW,
          projectlink: "https://github.com/ahmetoguzhanengin/React-Personal-Web-Portfolio",
        },
        {
          title: "To Do List Project",
          description: "Javascript ile yapılmış bu ufak projeyi eklenti olarak projelerine ekleyip kullanabilirsiniz. ",
          imgUrl: toDo,
           projectlink: "https://github.com/ahmetoguzhanengin/To-Do-List-Project",
        },
      ];
      const backEndProjects = [
        {
          title: "Araba Satış Sitesi Back-End Projesi",
          description: "Bir araba satış sitesinin back-end kısmını yapmış olduğum projedir. Detayına Github hesabımdan ulaşabilirsiniz.",
          imgUrl: carSeller,
          projectlink: "https://github.com/ahmetoguzhanengin/Car-Seller-Project",
        },
        {
          title: "Hotel Service Web API",
          description: "Bir Hotel servis hizmetleri için web API service projesi.",
          imgUrl: HotelService,
          projectlink: "https://github.com/ahmetoguzhanengin/Web_API_Template",
        },
        {
          title: "Python Procces Mining ",
          description: "Python ile yapmış olduğum veri madenciliği denemelerim.",
          imgUrl: Pm,
          projectlink: "https://github.com/ahmetoguzhanengin/Python_Process_Mining",
        },
      ];


    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col> 
                    <TrackVisibility>
                    {({isVisible}) =>
                     <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h2>Projeler</h2>
                        <p>Projelerime buradan ulaşabilirsiniz. Projeleri incelemek için github hesabıma göz atabilirsiniz. Benimle iletişime geçmek için iletişime tıklayabilirsiniz.</p>
                        </div>}
                        </TrackVisibility>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                <Nav.Link eventKey="first">Full-Stack</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second">Front-End</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="third" >Back-End</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                            <Tab.Pane eventKey = "first">
                                <Row>
                                    {
                                        fullStackProjects.map((fullStackProjects, index) => {
                                            return (
                                                <ProjectCard key ={index} {...fullStackProjects}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row>
                            {
                                frontEndProjects.map((frontEndProjects, index) => {
                                    return (
                                        <ProjectCard key ={index} {...frontEndProjects}/>
                                    )
                                })
                            }
                        </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Row>
                            {
                              backEndProjects.map((backEndProjects, index) => {
                                    return (
                                        <ProjectCard key ={index} {...backEndProjects}/>
                                    )
                                })
                            }
                        </Row>
                            
                            </Tab.Pane>
                            </Tab.Content>
                      </Tab.Container>
                      
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>

    )
}