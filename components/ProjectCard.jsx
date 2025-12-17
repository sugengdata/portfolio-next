import { FiEye, FiCode } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition flex flex-col">
      <div className="flex-1">
        <h4 className="font-semibold text-lg text-gray-800">
          {project.title}
        </h4>

        <p className="text-sm text-gray-600 mt-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition"
          >
            <FiEye /> Live Demo
          </a>
        )}

        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm px-4 py-2 border rounded-full hover:bg-gray-100 transition"
          >
            <FiCode /> Source Code
          </a>
        )}
      </div>
    </div>
  );
}
