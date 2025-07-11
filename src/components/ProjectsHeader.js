import React from 'react';
import { Button } from 'react-bootstrap';

function ProjectsHeader() { 
    return (
        <div className="text-center my-5">
            <h2 className="fw-bold">My Projects</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Explore my journey through code, creativity, and innovation. From web applications to mobile apps,
            each project tells a story of problem-solving and technical growth.
            </p>
            <div className="mt-4 d-flex justify-content-center gap-3">
                <Button
                    variant="dark"
                    onClick={() => {
                        const div = document.getElementById("projects-div");
                        div.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    View All Projects
                </Button>
                <Button variant="outline-dark" href="https://github.com/Jordweinstein">GitHub</Button>
            </div>
        </div>
    )
};

export default ProjectsHeader;