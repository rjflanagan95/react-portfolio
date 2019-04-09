import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import PortfolioItem from "../PortfolioItem/index.js";
import projects from "../../projects.json";

class Main extends Component {
  state = {
    projects
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="3">bio stuff</Col>
          <Col>
            {this.state.projects.map((val, index) => 
              <Row>
                <PortfolioItem key={index} title={val.title} subtitle={val.subtitle} text={val.text} githubLink={val.githubLink} hostLink={val.hostLink} image={val.image}/>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
