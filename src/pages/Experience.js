import React from "react";
import ExperienceSection from "../components/ExperienceCard";
import { experienceData } from "../experienceData";

function Experience() {
    return (
        <>
            <ExperienceSection data={experienceData.internships} title="Internships" />
            <ExperienceSection data={experienceData.experience} title="Leadership and Volunteering" />

        </>
    )
}

export default Experience;