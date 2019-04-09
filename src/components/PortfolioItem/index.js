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
    let cardLinks;
    if (hostLink === "") {
      cardLinks = <p><a href={this.state.githubLink}>Code base</a></p>
    } else {
      cardLinks = <p><a href={this.state.githubLink}>Code base</a> || <a href={this.state.hostLink}>Deployed site</a></p>
    }
    return (
      <Card className="portfolioCard">
        <CardImg className="cardImage" src={this.state.image}/>
        <CardBody className="cardBody">
          <CardTitle className="cardTitle">{this.state.title}</CardTitle>
          <CardSubtitle className="cardSubTitle">{this.state.subtitle}</CardSubtitle>
          <CardText className="cardText">{this.state.text}</CardText>
          <div className="cardLinks">{cardLinks}</div>
        </CardBody>
      </Card>
    );
  }
}

export default PortfolioItem;
