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
    githubImg: "../assets/githubicon.png",
    linkedIn: "https://www.linkedin.com/in/robertjflanagan",
    linkedinImg: "../assets/linkedinicon.png",
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
                <CardText className="bioText">
                  <p className="bio">
                    Full-stack developer.
                  </p>
                  <p className="skills">
                    Skills: JavaScript (jQuery, Node.js, Express.js, React.js), HTML + CSS, Bootstrap, Handlebars, MySQL, MongoDB, Firebase
                  </p>
                  <div className="bioLinksArea">
                    <p><a className="socialLink" href={this.state.personalGithub}>GitHub </a><img className="socialIcon" src={this.state.githubImg} alt="GitHub icon"/></p>
                    <p><a className="socialLink" href={this.state.linkedIn}>LinkedIn </a><img className="socialIcon" src={this.state.linkedinImg} alt="LinkedIn icon"/></p>
                    <p><a className="socialLink" href={this.state.resume}>Resume</a></p>
                  </div>
                </CardText>
              </CardBody>
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
