import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// Custom components
const ProjectCard = ({ project }) => {
  const [isJoined, setIsJoined] = useState(false);

  const handleJoinClick = () => {
    setIsJoined(!isJoined);
  };

  return (
    <div>
      <h3 style={{ fontWeight: "bold" }}>{project.name}</h3>
      <List>
        {project.homeworkSets.map((homeworkSet) => (
          <ListItem key={homeworkSet.id}>
            {homeworkSet.name}: {homeworkSet.completed}/{homeworkSet.total}
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        onClick={handleJoinClick}
      >
        Join
      </Button>
      {isJoined && <span>You are joined!</span>}
    </div>
  );
};

const ProjectsList = ({ projects }) => {
  return (
    <List>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </List>
  );
};

const App = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Project 1",
      homeworkSets: [
        { id: 1, name: "HWSet1", completed: 50, total: 100 },
        { id: 2, name: "HWSet2", completed: 0, total: 100 },
      ],
    },
    {
      id: 2,
      name: "Project 2",
      homeworkSets: [{ id: 1, name: "HWSet2", completed: 0, total: 100 }],
    },
    {
      id: 3,
      name: "Project 3",
      homeworkSets: [
        { id: 1, name: "HWSet1", completed: 0, total: 100 },
        { id: 2, name: "HWSet2", completed: 0, total: 100 },
      ],
    },
  ]);

  // Pass props to child components
  const projectsListProps = { projects };

  return (
    <div>
      <h1>Projects</h1>
      <ProjectsList {...projectsListProps} />
    </div>
  );
};

export default App;
