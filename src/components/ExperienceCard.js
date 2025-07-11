import React from "react";
import { Card, Badge, Row, Col } from 'react-bootstrap';

function ExperienceCard({ title, organization, date, description, tags, image}) {
    return (
        <Card className="mb-4 shadow-sm rounded-4 p-3 experience-card-wrapper">
            <Card.Body>
                <Row className="align-items-start">
                    <Col md={1} className="p-0">
                        <Card.Img src={image} className="experience-card-img"/>
                    </Col>
                    <Col md={8}>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle><small className="text-muted">{organization}</small></Card.Subtitle>
                    </Col>
                    <Col>
                        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                    </Col>
                </Row>
                <Card.Text className="mt-4">{description}</Card.Text>
                <div>
                    {tags?.map((tag, i) => (
                        <Badge className="custom-badge me-1" key={i}>{tag}</Badge>
                    ))}
                </div>
            </Card.Body>
        </Card>
    )
}

export default ExperienceCard;