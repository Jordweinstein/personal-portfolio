import React from "react";
import ExperienceSection from "../components/ExperienceSection";
import { experienceData } from "../experienceData";
import { Container } from "react-bootstrap";
import Skills from "../components/Skills";

function Experience() {
    return (
        <Container fluid className="m-3 px-5">
            <ExperienceSection data={experienceData.internships} title="Internships" />
            <div id="leadership-volunteering">
                <ExperienceSection data={experienceData.experience} title="Leadership and Volunteering" />
            </div>
            <Skills />

        </Container>
    )
}

export default Experience;