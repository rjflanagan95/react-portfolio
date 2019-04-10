import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import PortfolioItem from "../PortfolioItem/index.js";
import projects from "../../projects.json";
import "./style.css";

class Main extends Component {
  state = {
    projects
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="3">bio stuff</Col>
          <Col className="portfolioArea">
            {this.state.projects.map((val, index) => 
              <PortfolioItem className="portfolioItem" key={index} title={val.title} subtitle={val.subtitle} text={val.text} githubLink={val.githubLink} hostLink={val.hostLink} image={val.image}/>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
