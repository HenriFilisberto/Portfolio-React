import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> Permita-me que eu me apresente </span> 
            </h1>
            <p className="home-about-body">
            Meu nome é Henri, sou estudante do 7º Período de Engenharia de Software da Instituição UGV.
              <br />
              <br />
              Nasci na cidade de 
              <i>
                <b className="purple"> União da Vitória, </b> e neste momento sou residente no município de {" "}
                <b className="purple">
                  Paula Freitas.
                </b>
              </i>
              <br />
              <br />
              Atualmente estou aprimorando meus conhecimentos através de projetos, cursos e da graduação para encontrar uma oportunidade e dar inicio a minha carreira
              <i>
                <b className="purple">
                  {" "}
                  como desenvolvedor.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="purple">SOCIAIS</h1>
            <p>
              Entre em contato comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/henrifilisberto"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/henri_filisberto"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/henri-filisberto-88047729b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillLinkedin/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
