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
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg"
    >
      <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.35em] text-neutral-400">
        <span className="overflow-hidden text-ellipsis whitespace-nowrap pr-2 font-medium">
          {String(index).padStart(2, "0")} | {category}
        </span>
        <span className="shrink-0 font-medium">{year}</span>
      </div>

      <div className="relative mt-6 flex-1 min-h-[220px] overflow-hidden rounded-2xl bg-neutral-100">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`${title} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-neutral-400">
            Preview coming soon
          </div>
        )}
      </div>

      <div className="mt-6 space-y-3">
        <h3 className="text-xl font-semibold text-neutral-800">{title}</h3>
        <p className="text-sm leading-relaxed text-neutral-500">{description}</p>
      </div>
    </NavLink>
  );
};

export default ProjectCard;

