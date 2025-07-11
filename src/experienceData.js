import Fidelity from "./images/fidelity.png"
import BofA from "./images/bofa.png"
import KTP from "./images/ktp.png"
import GWC from "./images/gwc.png"
import CS from "./images/cs.png"
import CSSG from "./images/cssg.png"

export const experienceData = {
    internships: [
      {
        title: "Global Technology Analyst (SWE Track)",
        organization: "Bank of America",
        date: "Summer 2025",
        description: 
        "Interned on the Non-Financial Regulatory Reporting team, supporting the daily transmission of millions of OTC derivative records to global regulatory bodies. " +
        "Built dashboards in 3Forge using Java-inspired scripting and SQL queries on Oracle DB to enhance data visibility, streamline extraction workflows, and support compliance and internal audit efforts.",
        tags: ["SQL", "UX/UI", "Jira", "Java"],
        image: BofA
    },
    {
            title: "Full-Stack Software Engineering Intern",
            organization: "Fidelity Investments",
            date: "Summer 2024",
            description: 
      "Built a Chrome extension on a team using JavaScript and Chrome APIs, reducing manual testing by 20% and improving how visitor engagement is tracked. " +
      "Streamlined data extraction from Adobe and Google Analytics by simplifying the parsing of network requests. " +
      "Designed a clean, user-friendly interface using HTML, CSS, and Bootstrap to help non-technical users understand cookie data, visitor IDs, and privacy metrics.",
            tags: ["JavaScript", "UX/UI", "Analytics", "Agile"],
            image: Fidelity
        },
    ],
    experience: [
        {
            title: "Director of Diversity, Equity, and Inclusion",
            organization: "Kappa Theta Pi",
            date: "Spring 2024 - Present",
            description:  "Lead initiatives that boost participation in inclusion-focused events by 15% " +
            "to help build a more welcoming community.\n\n" +
            "Collaborate with industry leaders and campus groups to run workshops like the Women In Tech Panel (attended by" +
            " 100+ UNC students) that strengthen both the technical and professional skills of 50+ members and peers across UNC.",
            tags: ["Leadership", "DEI", "Community Engagement"],
            image: KTP
        },
        {
            title: "Teaching Assistant",
            organization: "Girls Who Code",
            date: "Sep 2023 – Present",
            description:
              "Mentor 20+ students in advanced Python and object-oriented programming to foster a welcoming environment for women in tech.\n\n" +
              "Boosted membership by coordinating with 4 local schools to increase visibility, resulting in 15+ new recruits as Community Outreach Coordinator.",
            tags: ["Python", "Teaching", "Outreach"],
            image: GWC
          },
          {
            title: "Undergraduate Teaching Assistant (UTA)",
            organization: "UNC Chapel Hill – COMP 301",
            date: "Aug 2024 – Present",
            description:
              "Support 350+ students in mastering Java and object-oriented programming through workshops, review sessions, and mentorship.\n\n" +
              "Collaborate with faculty to refine curriculum, and lead sessions on advanced topics like iterators, Git, and design patterns.",
            tags: ["Java", "Teaching", "Software Engineering"],
            image: CS
          },
          {
            title: "Backend Developer",
            organization: "CS + Social Good",
            date: "Sep 2023 – May 2024",
            description:
              "Developed 10+ API endpoints using SQLAlchemy for a local nonprofit, efficiently handling CRUD operations and complex database queries.\n\n" +
              "Designed and managed the database schema to support dynamic user features, and worked closely with the frontend team to ensure seamless integration.\n\n" +
              "Enabled real-time data access and streamlined backend logic to enhance the organization’s community-focused tools.",
            tags: ["SQLAlchemy", "Python", "Backend Development"],
            image: CSSG
          }
    ]
}