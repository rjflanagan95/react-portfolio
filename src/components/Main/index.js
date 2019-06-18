import React, { Component } from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import PortfolioItem from "../PortfolioItem/index.js";
import projects from "./projects.json";
import "./style.css";

class Main extends Component {
  state = {
    projects,
    bioImage: "https://lh3.googleusercontent.com/d2IIOewuOV50jU_1h0Yfx728bnQQ1AEm3hCx0ouO0BNXV2-9lE3UKOAkHP8Y6bY1crl8SMbZ6yGmyJB-CgJEsxb4SAOu8mr-xhtjKS1Q1L8T9XTiAKQXfefm0n83cQpm925h3Mze6EkjI6_w0Yka53N0P0QtC7sXCDCFJC6RPELi9Q2uD6yBYtuwyuGDp5pFLkwyZ1rSnwJoF3eD4ep6cGCX88edBJRDA1oPqLkIAeOeaoYr__29mPQo5p4AQJ9iA8mjI1WE88jsuVBV9PG7Lu_5Eik0Y5ZDY7MjJg3_xxteh7XEv9AUvi7XOrVZLIhUymtmRksSqGNSrrFC5LNhLbB7pO3CPkFveVRIuC0yXMnjBPHXlzv5PW3uDbsZhXRPPMRyRmhDIsDa17fVraSaflx9nX_xZHGs0ZGO9wz-c7ogdDceYMLXq87XuAJHd3cEJ0oWOya1Sr4cUUmn1oDir4Hz5GsKbnIrrcGJf5L_51b9Sq-FZZJlQae4NMAG4qjqJMuIhLfes6Lwe1-xG-kKIjVcwwL5RnB8__bzAv59t-ebNXXXtatDNd_poIn_NVJqAcBilR_MaGctlLxKW9p1Fn59EnPPs8h-LZRLdjsOcvAxtNtcr2J8K9CV3wglEFKOkCgglpf0n3dsKO4V31hsTRGSFF9T3xc=s960-no",
    personalGithub: "https://github.com/rjflanagan95",
    githubImg: "http://www.stickpng.com/assets/images/5847f98fcef1014c0b5e48c0.png",
    linkedIn: "https://www.linkedin.com/in/robertjflanagan",
    linkedinImg: "https://lh3.googleusercontent.com/XOe4_rgK4hpaZSYMBz0QziRJivZoYmeitL4cTHdhPhqPgJPgG16XohbpvZ6wl-pUrWPRVagmpDqR_Bh2wOoD8gx5aESD0LbuNzgXBP9uiJG3gs-UZWKUf1UC5mKkSxLdQcyCCvWwGwun3eNajC1bV4sKMueYPydeYMvz0J7vmatCCI5Kl32jEQ_CA5gdIEWeSwgYdqNDLfn_9fYUy8GjFgtL9qni2jF3AFsUvHZkNH0QkzqaB7fGx1KTfn9IQSr2ki_2XwM-Qx07Mm_fBOwQkhoCxQA_bMzuZxwCquZCALKcNIdUwTrFt8rTHUGKvZMqbMwUJ3Qx-R4C65rXUGxVqAJj1Avz2CDUq76io15QQzbi-ssTsXhvt4SlxHeGkGC1fpFJGLY2pbV3We9yMsyfpiuak216tU-ZNe49IOP3nT34AThGOvlLWt4n7sv5SpHm7L7taVUW3zKH9r5qk2PDquWDnkIa-HdMt_VWgwkyqZN_TNjCc5tqmX3O6GX7rYJi3XgpRarVAfCPLG1p2VuSceU6Mv8f9Lev3Bp-H1BQIA4kNQvyqXCc5MdgTYQr9yxv2mbPIf5ppxZjZwfPUtN08qGBWksOsv2lvA0978ad3R6LlDm_B4SfZPhj9IF96vIPxgLLmdWzg5YpB8L3Bnrto09hJ8G2QaA=w1017-h900-no",
    resume: "https://drive.google.com/file/d/1m0C6b7NL_q7IlBT9NTQMrBDKCrjIpTGU/view?usp=sharing"
  }


  render() {
    let projectCards = this.state.projects.map((val, index) =>
      <PortfolioItem className="portfolioItem" key={index} title={val.title} subtitle={val.subtitle} text={val.text} githubLink={val.githubLink} hostLink={val.hostLink} image={val.image}/>
    );

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
            {projectCards}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
