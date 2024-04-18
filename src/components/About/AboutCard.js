import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Quem é o<span className="purple"> Henri Filisberto </span>
            em seu tempo livre?
            <br /> Além de ser apaixonado pela programação e desenvolvimento, em meu tempo livre gosto de:
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar jogos que desafiem minha intelectualidade e criatividade, como jogos de tabuleiro e RPG.
            </li>
            <li className="about-activity">
              <ImPointRight /> Ler para obter novos conhecimentos e pontos de vista sobre diversos assuntos.
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar para me conectar com outras culturas, conhecer novas pessoas e explorar o mundo.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
