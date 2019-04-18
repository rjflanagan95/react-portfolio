import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./style.css";

class PortfolioItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      subtitle: this.props.subtitle,
      text: this.props.text,
      githubLink: this.props.githubLink,
      hostLink: this.props.hostLink,
      image: this.props.image
    }
  }
  render() {
    const hostLink = this.state.hostLink;
    let projectLinks;
    if (hostLink === "") {
      projectLinks = <p><a className="codeLink" href={this.state.githubLink}>Code base</a></p>
    } else {
      projectLinks = <p><a className="codeLink" href={this.state.githubLink}>Code base</a> || <a className="codeLink" href={this.state.hostLink}>Deployed site</a></p>
    }
    return (
      <Card className="projectCard">
        <div className="projectImageWrapper">
          <CardImg className="projectImage" src={this.state.image}/>
        </div>
        <CardBody className="projectBody">
          <CardTitle className="projectTitle">{this.state.title}</CardTitle>
          <CardSubtitle className="projectTech">{this.state.subtitle}</CardSubtitle>
          <CardText className="projectText">{this.state.text}</CardText>
          <div className="projectLinksArea">{projectLinks}</div>
        </CardBody>
      </Card>
    );
  }
}

export default PortfolioItem;
