import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus trabalhos recentes
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos que eu estou trabalhando.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "305px", paddingTop: "30px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Titulo do Projeto"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus ex neque, tempus rhoncus ligula hendrerit eget. Fusce tincidunt sagittis nisl, non sollicitudin nunc."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Titulo do Projeto"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus ex neque, tempus rhoncus ligula hendrerit eget. Fusce tincidunt sagittis nisl, non sollicitudin nunc."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Titulo do Projeto"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus ex neque, tempus rhoncus ligula hendrerit eget. Fusce tincidunt sagittis nisl, non sollicitudin nunc."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
