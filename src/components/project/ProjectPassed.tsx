import { useLocation } from "react-router-dom";

const ProjectPassed = () => {
  const location = useLocation();
  const project = location.state?.project;

  if (!project) {
    return <div>No project data found.</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{project.projectTitle}</h1>
      <img
        src={project.img}
        alt={project.projectTitle}
        className="w-full max-w-lg rounded-lg mb-4"
      />
      <p className="text-lg mb-2">
        <strong>Overview:</strong> {project.overview}
      </p>
      <p className="text-lg mb-2">
        <strong>Date:</strong> {project.date}
      </p>
      <p className="text-lg mb-2">
        <strong>Area:</strong> {project.area}
      </p>
      <p className="text-lg mb-2">
        <strong>Scope:</strong> {project.scope}
      </p>
      <p className="text-lg">
        <strong>Summary:</strong> {project.summary}
      </p>
    </div>
  );
};

export default ProjectPassed;
