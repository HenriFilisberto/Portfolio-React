import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, eu sou o <span className="purple">Henri Filisberto </span>
            de <span className="purple"> Paula Freitas, Paraná.</span>
            <br /> Estou no 6º período de Engenharia de Software na Instituição UGV.
            <br />
            <br />
            Fora programação, outras coisas que gosto de fazer.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar
            </li>
            <li className="about-activity">
              <ImPointRight /> Ler
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
