import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap"
import headshot from "../images/headshot.jpg"
import Github from "../images/github.png"
import Linkedin from "../images/linkedin.png"
import ResumeImg from "../images/resume.png"

function Introduction() {
    return (
        <Container className="text-center py-1 intro-div align-content-center my-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <img
                        src={headshot}
                        alt="Profile"
                        className="rounded-circle mb-4 img-fluid profile-pic"
                    />
                    <h1>Hi, I'm Jordan</h1>
                    <p className="text-muted">
                        Full-Stack developer passionate about seeking knowledge, 
                        sharing it with others, and using it to make a difference!
                    </p>
                    <div className="d-flex justify-content-center gap-1 mt-4">
                        <Button variant="outline-dark" href="https://www.linkedin.com/in/jordan-weinstein-aa50661ab/">
                            <img src={Linkedin} alt="LinkedIn" className="rounded-circle img-fluid logo-img"></img>
                        </Button>
                        <Button variant="outline-dark" href="https://github.com/Jordweinstein">
                            <img src={Github} alt="Github" className="rounded-circle img-fluid logo-img"></img>
                        </Button>
                        <a href="/Jordan_Weinstein_Resume.pdf" download>
                            <Button variant="outline-dark">
                                <img src={ResumeImg} alt="Resume" className="rounded-circle img-fluid logo-img"></img>
                            </Button>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Introduction;