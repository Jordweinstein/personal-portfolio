import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import unc from "../images/unc.jpg";
import panel from "../images/panel.jpg"
import gwc from "../images/gwc-1.jpeg"

const AboutMe = () => {
  return (
    <Container id="about-me" className="text-center my-5">
      <h2 className="fw-bold">My Story</h2>
      <p className="text-muted mb-5">
        My journey is guided by three core principles that shape everything I do
      </p>

      <Row className="g-4">
        {/* Continuous Learning */}
        <Col md={4}>
          <Card className="p-4 shadow-sm border-0 h-100">
            <img src={unc} alt="UNC" className="story-img mb-3 rounded" />
            <h5 className="fw-bold">Seeking Knowledge</h5>
            <p className="text-muted">
            My diverse curriculum mirrors my broad range
            of interests and intellectual curiosity. While my main focus is CS, the math courses at UNC futher satisfy my problem-solving itch, and by studying
            neuroscience I have been able to learn more about something that has always fascinated me.
            </p>
          </Card>
        </Col>

        {/* Knowledge Sharing */}
        <Col md={4}>
          <Card className="p-4 shadow-sm border-0 h-100">
            <img src={panel} alt="Panel" className="story-img mb-3 rounded" />
            <h5 className="fw-bold">Sharing Knowledge</h5>
            <p className="text-muted">
            I've been a tutor since as long as I can remember. With two little sisters, I've always loved
            to share my knowledge with others. From volunteering with young girls of all different abilities as a Girls Who Code TA
            to leading workshops for higher-level college students taking COMP 301 at UNC, I’ve learned how to adapt my communication 
            style to meet the needs of diverse learners.
            </p>
          </Card>
        </Col>

        {/* Making Impact */}
        <Col md={4}>
          <Card className="p-4 shadow-sm border-0 h-100">
            <img src={gwc} alt="girls who code" className="story-img mb-3 rounded" />
            <h5 className="fw-bold">Making a Difference</h5>
            <p className="text-muted">
            Whether building tools that improve workflows, mentoring students in computer science, or leading initiatives that promote diversity and inclusion, 
                            I'm most motivated when my work has a meaningful impact. At UNC, I’ve helped organize panels like Women in Tech to amplify underrepresented voices, 
                            collaborated with nonprofits through CS + Social Good, and contributed to real-world projects during my internships. 
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
