import { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

import TrackVisibility from 'react-on-screen';

export const Banner = () =>{ 
    
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Front-End", "Back-End", "Full-Stack"];
    const [text, setText] = useState('');
    const [delta, setDelta]= useState(300-Math.random()*100);
    const period = 2000;
    useEffect(()=>{
        let ticker = setInterval(() =>{
            tick();
        },delta)
        return () => {clearInterval(ticker)};
    }, [text])
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length-1):fullText.substring(0, text.length+1);
        
        setText(updateText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return(
     
        <section className="banner" id="home">
        <Router>
            <Container>
                <Row className ="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({isVisible}) =>
                     <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline">Portfolyoma Hoş Geldiniz</span><br/><br/>
                        <h1>{`Merhaba!`} <br/> {`Ben Ahmet Oğuzhan Engin.`}<span className="wrap"> <br/>{text}<br/></span>olarak çalışmaktayım.</h1>
                        <p>Üsküdar Üniversitesinde Nitelikli Bilişim Uzmanı adı altında “Web ve Mobil Programlama” kursuna katıldım. Mühendis olduğum için algoritma, C#, SQL, HTML, CSS, OOP, ASP.NET, ASP.NET CORE, API, Entity Framework, MVC, Katmanlı Mimari, JavaScript, React, Python ve Java gibi bir çok alanda kendimi hızlı bir şekilde geliştirdim. Benimle iletişime geçildiği zaman yeteneklerim ve çalışma disiplinim ile katkı sağlayabileceğim noktasında şüpheniz olmasın.</p>
                        <HashLink to='#connect'>
                        <button>İletişim <ArrowRightCircle size={25}/></button>
                        </HashLink>
                        </div> }
                        </TrackVisibility>
                        
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src = {headerImg} alt = "Headder Img"/>
                    </Col>
                </Row>
            </Container>
            </Router>
        </section>

    )
}