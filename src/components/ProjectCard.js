import React from 'react';
import { Card, Badge, Row, Col } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa'; 

function ProjectCard({ title, description, tags, category, link }){
    return (
        <Card className="shadow-sm border-0">
            <Card.Body>
                <Row className="align-items-space-between">
                    <Col>
                        <Card.Subtitle className="text-muted mb-2">{category}</Card.Subtitle>
                        <Card.Title>{title}</Card.Title>
                    </Col>
                    <Col xs="auto" className="ms-auto">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                                <FaGithub color="black" size={30} />
                        </a>
                    </Col>
                </Row>
                <Card.Text>{description}</Card.Text>
                <div>
                    {tags.map((tag, i) => (
                    <Badge key={i} bg="light" text="dark" className="me-2">{tag}</Badge>
                    ))}
                </div>
            </Card.Body>
        </Card>
    )
};

export default ProjectCard;
