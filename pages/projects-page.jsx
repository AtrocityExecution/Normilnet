import React from "react";
import ProjectCard1 from "../components/project-card";
import ProjectCard2 from "../components/project-card2";
import ProjectCard3 from "../components/project-card3";
import ProjectCard4 from "../components/project-card4";
import Draggable from "react-draggable";

const ProjectsPage = () => {
        
            return (
                <div className="projects-page">

                    <div className="project-cards">
                        <Draggable defaultPosition={{x: 50, y: 50}}>
                        <div id="project-card1" className="card-position1">
                            <ProjectCard1 />
                        </div>
                        </Draggable>

                        <Draggable defaultPosition={{x: 200, y: 200}}>
                        <div id="project-card2">
                            <ProjectCard2 />
                        </div>
                        </Draggable>

                        <Draggable defaultPosition={{x: 350, y: 350}}>
                        <div id="project-card3">
                            <ProjectCard3 />
                        </div>
                        </Draggable>

                        <Draggable defaultPosition={{x: 500, y: 500}}>
                        <div id="project-card4">
                            <ProjectCard4 />
                        </div>
                        </Draggable>
                        
                    </div>
                    
                </div>
            )
}

export default ProjectsPage