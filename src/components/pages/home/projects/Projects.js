import { Container } from "@mui/material";
import ProjectCard from "./projectCard/ProjectCard";
import Title from "../SectionTitle.js";
import { projectContent } from "../../../../data/homeProjectContent.tsx";

const Projects = (props) => {

  return (
    <Container  id="projects" name="projects">

      <Title title="Projects" />
      {projectContent.map((project) => (
        <ProjectCard {...props} project={project} key={project.id} />
      ))}
    </Container>
  );
};

export default Projects;
