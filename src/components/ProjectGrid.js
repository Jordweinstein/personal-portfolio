import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import { projects } from '../ProjectData';

function ProjectGrid() {
    return(
        <div id="projects-div" className="m-2 p-2">
            <Row className="g-4">
                {projects.map((project, i) => (
                <Col key={i} xs={12} md={6} lg={4}>
                    <ProjectCard {...project} />
                </Col>
                ))}
            </Row>
        </div>
    )
};

export default ProjectGrid;
