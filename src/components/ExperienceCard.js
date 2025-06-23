import React from "react";
import { Card, Badge } from 'react-bootstrap';

function ExperienceCard({ title, org, date, description, tags}) {
    return (
        <Card className="mb-4 shadow-sm">
            <Card.Body>
                <Card.Title>{title} <small className="text-muted">- {org}</small></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <div>
                    {tags?.map((tag, i) => (
                        <Badge bg="secondary" className="me-1" key={i}>{tag}</Badge>
                    ))}
                </div>
            </Card.Body>
        </Card>
    )
}

export default ExperienceCard;