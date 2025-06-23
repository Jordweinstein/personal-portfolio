import React from "react";

function ExperienceSection({ data, title }) {
    return (
        <>
        <h3 className="mb-4">
            <i className="bi bi-briefcase me-2" /> {title} 
        </h3>
        {
            data.map((item, i) => (
                <ExperienceCard 
                    title={item.title} 
                    organization={item.organization} 
                    date={item.date} r
                    description={item.description}
                    tags={item.tags} 
                />
            ))
        }
        </>
    )
}

export default ExperienceSection;

