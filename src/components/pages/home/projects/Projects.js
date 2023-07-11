import { Container } from "@mui/material";
import ProjectCard from "./projectCard/ProjectCard";
import Title from "../../../ui/pageTitle/PageTitle.js";
import { projectContent } from "../../../../data/projectContent.tsx";

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
