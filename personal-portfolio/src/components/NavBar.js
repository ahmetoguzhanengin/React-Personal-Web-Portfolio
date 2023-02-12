import { useState, useEffect } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/img/LOGO.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';
import navIcon6 from '../assets/img/nav-icon6.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";


export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
return(
    <Router>
    <Navbar expand="lg" className={scrolled ?  "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="#home">
      <img src = {logo} alt="Logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
      <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick ={() => onUpdateActiveLink('home')}>Ana Sayfa</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick ={() => onUpdateActiveLink('skills')}>Yetenekler</Nav.Link>
          <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projeler</Nav.Link>
        </Nav>
        <span className="navbar-text">
            <div className="social-icon" >
                <a href="https://www.linkedin.com/in/ahmet-o%C4%9Fuzhan-engin-267667184/"><img src={navIcon1} alt=""/></a>
                <a href="https://github.com/ahmetoguzhanengin"><img src={navIcon6} alt=""/></a>
                <a href="https://discord.gg/YewzCcgTFs"><img src={navIcon4} alt=""/></a>
                <a href="mailto:ahmetoguzhanengin@gmail.com"><img src={navIcon5} alt=""/></a>
            </div>
            <HashLink to='#connect'>
            <button  className="vvd"><span>İletişim</span></button>
            </HashLink>
            </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </Router>

)
}   