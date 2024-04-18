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
              title="Sistema de Controle Escolar"
              description={
                <>
                  Para o meu Trabalho de Conclusão de Curso estou desenvolvendo um sistema para gerenciamento escolar, com intuito de automatizar processos administrativos, melhorar a comunicação entre os membros da comunidade e fornecer um acompanhamento mais individualizado dos alunos. Entre alguns dos módulos do sistema estão:
                  <br />
                  <br />
                  Módulo de Controle de Presença: ele permitirá a automatização da lista de chamada, permitindo que os alunos registrem sua própria presença de forma rápida e precisa utilizando biometria facial.
                  <br />
                  <br />
                  Módulo de Observação dos Alunos: com ele será possível que os diretores, pedagogas e professores possam registrar observações, tanto positivas quanto negativas, sobre o desempenho acadêmico, comportamento e necessidades individuais de cada aluno e ainda poderão anexar atestados e justificativas de faltas.
                  <br />
                  <br />
                  No sistema é possível fazer uma pesquisa por aluno, tanto por nome, data de nascimento, CPF, RG ou Nº de Matrícula, e o resultado será a ficha do aluno com todas as informações que ja foram adicionadas sobre ele.
                  <br />
                  <br />
                  Módulo de Gerenciamento: este módulo fornecerá uma lista completa dos alunos matriculados, destacando aqueles que apresentam dificuldades no estudo, que precisam de aulas de reforço em determinadas matérias, que possuem um número de faltas elevado ou necessitam de atenção especial, cada circunstância recebe uma cor diferente no sistema, dessa forma diretores, pedagogas e professores podem analisar a condição de cada aluno e tomar as medidas disciplinares necessárias. 
                  <br />
                  O sistema também identifica os alunos nota dez, alunos que durante o ano letivo se destacaram participando das aulas, atividades extracurriculares e com excelentes notas, no final do ano letivo o sistema identifica os três melhores e como método de incentivo, eles são premiados pelo colégio.
                  <br />
                  <br />
                  Para o desenvolvimento deste projeto estou utilizando as linguagens HTML, CSS, Javascript e PostgreSQL.
                </>
              }
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Sistema de Gestão de Saúde PF"
              description={
                <>
                  Este sistema é uma ferramenta essencial para otimizar a gestão e comunicação interna entre os funcionários, visando melhorar a eficiência e a colaboração em todos os setores da empresa. Além de facilitar a interação entre os colaboradores.
                  <br/> <br/>
                  Um dos principais recursos deste sistema é o módulo de quadro de avisos interativo. Neste módulo, os funcionários têm a capacidade de adicionar informações relevantes e urgentes, como anúncios de eventos de saúde, alertas de segurança, atualizações de políticas internas ou até mesmo dicas de saúde e bem-estar.
                  <br/> <br/>
                  Pesquisas de satisfação e feedback: Um recurso que permite aos pacientes fornecer feedback sobre os serviços de saúde oferecidos pela Secretaria de Saúde. Pesquisas de satisfação periódicas podem ser conduzidas para identificar áreas de melhoria e garantir que as necessidades dos pacientes sejam atendidas de forma eficaz.
                  <br/> <br/>
                  Diretório de recursos de saúde: Uma seção que fornece informações sobre recursos externos de saúde, como clínicas, hospitais, médicos especialistas, centros de bem-estar e farmácias próximas. Isso permite que os funcionários encontrem facilmente os serviços de saúde para auxiliar os pacientes com seus agendamentos de consultas, exames e busca de medicamentos.
                  <br/> <br/>
                  Análise de dados e estoque: Uma ferramenta de análise integrada que coleta e analisa dados de saúde e dados oferecidos pelos funcionários mensalmente. Isso inclui quantidade de vacinas aplicadas, total de exames feitos e requisados, consultas agendadas e realizadas, transportes agendados, percentual de pacientes faltantes, contagem e gestão de estoque de materiais da enfermagem, materiais administrativos e de escritório.
                  <br/> <br/>
                  Auxiliei no desenvolvimento e estilização da interface, no suporte aos funcionários e nas manutenções periódicas para manter o bom funcionamento. Para isso foi necessário conhecimento e habilidade em HTML, CSS, Javascript, React e PostegreSQL.
                </>
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
