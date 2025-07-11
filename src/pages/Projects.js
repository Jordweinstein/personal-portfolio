import React from "react";
import ProjectsHeader from "../components/ProjectsHeader";
import FeaturedProject from "../components/FeaturedProject";
import ProjectGrid from "../components/ProjectGrid";

function Projects() {
    return(
        <>
            <ProjectsHeader />
            <FeaturedProject />
            <ProjectGrid />
        </>
    )
}

export default Projects;