import { NavLink } from "react-router-dom";

const ProjectCard = ({
  index,
  category,
  title,
  description,
  imageSrc,
  year,
  to,
}) => {
  return (
    <NavLink
      to={to}
      className="group relative flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-neutral-300"
    >
      <div className="flex items-start justify-between text-xs uppercase tracking-[0.3em] text-neutral-400">
        <span>
          {String(index).padStart(2, "0")} | {category}
        </span>
        <span>{year}</span>
      </div>

      <div className="mt-6 flex flex-1 flex-col gap-6">
        <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={`${title} preview`}
              className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-48 items-center justify-center text-sm text-neutral-500">
              Preview coming soon
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
          <p className="text-sm leading-6 text-neutral-500">
            {description}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default ProjectCard;

