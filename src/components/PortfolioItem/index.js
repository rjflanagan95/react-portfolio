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
    return (
      <Card>
        <CardImg width="50px" src={this.state.image}/>
        <CardBody>
          <CardTitle><a href={this.state.hostLink}>{this.state.title}</a></CardTitle>
          <CardSubtitle>{this.state.subtitle}</CardSubtitle>
          <CardText>{this.state.text}</CardText>
          <a href={this.state.githubLink}>Code base</a>
        </CardBody>
      </Card>
    );
  }
}

export default PortfolioItem;
