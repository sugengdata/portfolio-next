import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-emerald-100 to-emerald-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 text-center mb-10">
          My Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
