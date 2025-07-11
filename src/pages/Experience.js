import React from "react";
import ExperienceSection from "../components/ExperienceSection";
import { experienceData } from "../experienceData";
import { Container } from "react-bootstrap";

function Experience() {
    return (
        <Container className="m-3">
            <ExperienceSection data={experienceData.internships} title="Internships" />
            <div id="leadership-volunteering">
                <ExperienceSection data={experienceData.experience} title="Leadership and Volunteering" />
            </div>

        </Container>
    )
}

export default Experience;