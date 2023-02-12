import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import c from "../assets/img/c.svg";
import Html from "../assets/img/Html.svg";
import Css from "../assets/img/Css.svg";
import React from  "../assets/img/react.svg"
import Python from  "../assets/img/Python.svg"
import Sql from  "../assets/img/Sql.svg"
import PSql from  "../assets/img/PSQL.svg"
import Js from  "../assets/img/Js.svg"
import Java from  "../assets/img/Java.svg"
import Net from  "../assets/img/Net.svg"
import Core from  "../assets/img/Core.svg"
import Api from  "../assets/img/API.svg"
import Km from  "../assets/img/KM.svg"
import colorsharp from "../assets/img/color-sharp.png";
import Ef from "../assets/img/Entity-Framework.png";
import Mvc from "../assets/img/MVC.png";
import Node from "../assets/img/Node.svg";
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

       return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                        <h2>
                           Yetenekler
                        </h2>
                        <p>Burada benim  yeteneklim bulunmaktadır. Buradan yaptığım projelerde kullandığım dillere ve Frameworklere ne kadar hakim olduğumu görebilirsiniz.</p>
                        <Carousel responsive={responsive} infinite={true} className ="skill-slider">
                            <div className="item">
                            <img src ={React} alt ="Image"/>
                            <h5>React</h5>
                        </div>
                        <div className="item">
                        <img src ={Js} alt ="Image"/>
                        <h5>JavaScript</h5>
                        </div>
                        <div className="item">
                                <img src ={Html} alt ="Image"/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src ={Css} alt ="Image"/>
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                            <img src ={Node} alt ="Image"/>
                            <h5>Node.js</h5>
                        </div>
                        <div className="item">
                                <img src ={c} alt ="Image"/>
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src ={Sql} alt ="Image"/>
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                            <img src ={PSql} alt ="Image"/>
                            <h5>Postgre SQL</h5>
                        </div>
                            
                            <div className="item">
                                <img src ={Net} alt ="Image"/>
                                <h5>ASP.NET</h5>
                            </div>
                            <div className="item">
                                <img src ={Core} alt ="Image"/>
                                <h5>ASP.NET CORE</h5>
                            </div>
                                <div className="item">
                                <img src ={Ef} width="512" height="512"  />
                                <h5>Entity Framework</h5>
                            </div>
                            <div className="item">
                            <img src ={Mvc} width="512" height="512" alt ="Image"/>    
                            <h5>MVC</h5>
                            </div>
                            <div className="item">
                            <img src ={Km} alt ="Image"/>
                            <h5>Katmanlı Mimari</h5>
                            <h5>OOP</h5>
                            </div>
                            <div className="item">
                            <img src ={Api} alt ="Image"/>
                            <h5>API</h5>
                        </div>
                               
                            <div className="item">
                                <img src ={Python} alt ="Image"/>
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                            <img src ={Java} alt ="Image"/>
                            <h5>Java</h5>
                        </div>
                   
                        </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src = {colorsharp}/>
        </section>
       )
}