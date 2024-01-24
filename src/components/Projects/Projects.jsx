import React from 'react'
import { Typography } from '@mui/material'
import "./Projects.css"
import { AiOutlineProject } from "react-icons/ai";
import { Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
}) => {
    return (
        <>
            <a href={url} className="projectCard">
                <div>
                    <img src={projectImage} alt="Project" />
                    <Typography variant="h5">{projectTitle}</Typography>
                </div>
                <div>
                    <Typography variant="h4"> About Project </Typography>
                    <Typography>{description}</Typography>
                    <Typography variant="h6"> Technologies: {technologies} </Typography>
                </div>
            </a>
            {isAdmin && (
                <Button>
                    <Delete />
                </Button>
            )}
        </>
    )
}
const Projects = () => {
    const projects = [1, 2, 3];

    return (
        <div className="projects">
            <Typography variant="h3">
                Projects <AiOutlineProject />
            </Typography>
            <div className="projectsWrapper">
                {projects.map((project, index) => (
                    <ProjectCard
                        url="https://www.youtube.com/channel/UClcyEdGTJdPMohIF6mL9t2w"
                        projectImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMujesLWftdxM6DVObQ9rW8BOdW8bZAvKUzA&uspq=CAU"
                        projectTitle="Sample Project"
                        description="Sample project "
                        technologies="Mongodb, React, NodeJs, Express" />))}
            </div>

        </div>
    )
}

export default Projects
