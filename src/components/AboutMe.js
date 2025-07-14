import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import unc from "../images/unc.jpg";
import panel from "../images/panel.jpg"
import gwc from "../images/gwc-1.jpeg"

function AboutMe() {
    return (
        <div>
            <Container fluid className="bg-secondary-subtle">
                <Row className="align-items-center">
                    <Col md={6} className="p-4 justify-content-center">
                        <h3>Seeking Knowledge</h3>
                        <p className="p-4 text-muted">
                            My diverse curriculum mirrors my broad range
                            of interests and intellectual curiosity. While my main focus is computer science, I enjoy taking
                            advantage of the math courses at UNC to futher satisfy my problem-solving itch, and by studying
                            neuroscience I have been able to learn more about something that has always fascinated me.
                        </p>
                    </Col>
                    <Col md={6} className="px-0">
                        <img
                            src={unc}
                            alt="UNC"
                            className="w-100 full-image"
                        />
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row className="align-items-center">
                    <Col md={6} className="px-0">
                        <img
                            src={gwc}
                            alt="Panel"
                            className="w-100 full-image"
                        />
                    </Col>
                    <Col md={6} className="p-4 justify-content-center">
                        <h3>Sharing it with others</h3>
                        <p className="p-4 text-muted">
                            I've been a tutor since as long as I can remember. With two little sisters, I've always loved
                            to share what I learn with others. At UNC I carry this on through Girls Who Code and as a UTA (undergraudate
                            teaching assistant) for the CS department. From volunteering with young girls of all different abilities
                            to leading workshops for higher-level college students taking advanced programming courses, I’ve learned how to adapt my communication 
                            style to meet the needs of diverse learners.
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="bg-secondary-subtle">
                <Row className="align-items-center">
                    <Col md={6} className="p-4 justify-content-center">
                        <h3>Making an Impact</h3>
                        <p className="p-4 text-muted">
                            Whether building tools that improve workflows, mentoring students in computer science, or leading initiatives that promote diversity and inclusion, 
                            I'm most motivated when my work has a meaningful impact. At UNC, I’ve helped organize panels like Women in Tech to amplify underrepresented voices, 
                            collaborated with nonprofits through CS + Social Good, and contributed to real-world projects during my internships. 
                        </p>
                    </Col>
                    <Col md={6} className="px-0">
                        <img
                            src={panel}
                            alt="UNC"
                            className="w-100 full-image"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe;