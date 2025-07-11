import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Row, Col } from "react-bootstrap";

function ExperienceSection({ data, title }) {
    return (
        <>
        <h3 className="mb-4 section-title">
            { title === "Internships" ? 
            <i className="bi bi-briefcase me-2" ></i>
            :
            <i className="bi bi-person-walking"></i>
            }
        {title} 
        </h3>
        <Row className="g-4">
            {
                data.map((item, i) => (
                    <Col key={i} xs={12} md={6} lg={4} className="mb-4">
                        <ExperienceCard 
                            title={item.title} 
                            organization={item.organization} 
                            date={item.date}
                            description={item.description}
                            tags={item.tags} 
                            image={item.image}
                        />
                    </Col>
                ))
            }
        </Row>
        </>
    )
}

export default ExperienceSection;

