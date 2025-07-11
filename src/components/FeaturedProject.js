import React from 'react';
import { Row, Badge, Button, Image, Col } from 'react-bootstrap';
import CampusClosets from '../images/campus-closets.jpeg';

function FeaturedProject() {
    return (
        <div className="bg-light p-4 rounded shadow-sm mb-5 py-5">
            <Row className="align-items-center">
                <Col xs={12} md={3} className="text-center text-md-start mb-3 mb-md-0">
                    <Image src={CampusClosets} alt="Campus Closets" fluid rounded/>
                </Col>
                <Col xs={12} md={9}>
                    <div className="mb-2">
                        <Badge bg="dark" className="me-2">Featured</Badge>
                        <Badge bg="secondary">Full Stack iOS Application</Badge>
                    </div>
                    <h4>Campus Closets </h4>
                    <p className="text-muted">
                        An iOS application to encourage sustainability and style on campus
                    </p>
                    <ul className="text-muted">
                        <li>Built with React Native and Expo to support cross-platform development and rapid iteration.</li>
                        <li>Implemented Firebase Authentication and Cloud Storage, improving data retrieval by 15% and storage efficiency by 20%.</li>
                        <li>Developed a custom Stripe seller onboarding flow using Stripe APIs and Firebase Functions (Node.js), with 7+ endpoints for secure account creation, payment processing, and compliance.</li>
                        <li>Deployed the app to TestFlight, enabling beta testing with 50+ users to gather feedback and optimize UX.</li>
                    </ul>
                    <div className="mb-3">
                        {['React Native', 'Firebase', 'Cloud Functions (Node.js)', 'Stripe API'].map((tech, i) => (
                        <Badge key={i} bg="light" text="dark" className="me-2">{tech}</Badge>
                        ))}
                    </div>
                    <div>
                        {/* <Button variant="dark" className="me-2">Download Link</Button> */}
                        <Button href="https://github.com/Jordweinstein/campus-closet" target="_blank" rel="noopener noreferrer" variant="outline-dark">Source Code</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default FeaturedProject;