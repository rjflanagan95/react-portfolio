import React, { Component } from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import PortfolioItem from "../PortfolioItem/index.js";
import projects from "../../projects.json";
import "./style.css";

class Main extends Component {
  state = {
    projects,
    bioImage: "../assets/cardimage.jpg",
    personalGithub: "https://github.com/rjflanagan95",
    linkedIn: "https://www.linkedin.com/in/robertjflanagan",
    resume: "https://drive.google.com/file/d/1QxDjM5YNukcydPeyycHjcOuUW98j2Lcm/view?usp=sharing"
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="3">
            <Card className="bioCard">
              <CardImg className="bioImage" src={this.state.bioImage}/>
              <CardBody className="bioBody">
                <CardTitle className="bioTitle">Robert Flanagan</CardTitle>
                <CardSubtitle className="bioContent">Brooklyn, NY</CardSubtitle>
                <CardText className="bioText">something</CardText>
              </CardBody>
              <div className="bioLinks">
                <p>
                  <a href={this.state.personalGithub}>GitHub</a>
                  <a href={this.state.linkedIn}>LinkedIn</a>
                  <a href={this.state.resume}>Resume</a>
                </p>
                {/* <a href="https://github.com/rjflanagan95">GitHub <img src="assets/githubicon.png" alt="GitHub icon" style="height: 17px;"/>
                <a href="https://www.linkedin.com/in/robertjflanagan">LinkedIn <img src="assets/linkedinicon.png" alt="LinkedIn icon" style="height:17px;"/>
                <a href="https://drive.google.com/file/d/1QxDjM5YNukcydPeyycHjcOuUW98j2Lcm/view?usp=sharing">Resume</a> */}
              </div>
            </Card>
          </Col>
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
