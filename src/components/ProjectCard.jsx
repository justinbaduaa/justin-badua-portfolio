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
      className="group relative flex h-full w-full min-w-0 max-w-full flex-col rounded-3xl bg-gradient-to-br from-neutral-50 to-neutral-100/50 p-5 shadow-md ring-1 ring-neutral-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-neutral-300/70 sm:p-6 lg:p-8"
    >
      {/* Header with category and year */}
      <div className="mb-4 flex min-w-0 items-start justify-between overflow-hidden text-xs uppercase tracking-[0.25em] text-neutral-400 sm:mb-5 sm:tracking-[0.3em]">
        <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap pr-2 font-medium">
          {String(index).padStart(2, "0")} | {category}
        </span>
        <span className="shrink-0 font-medium">{year}</span>
      </div>

      {/* Image container - centered in the card with flexible sizing */}
      <div className="relative flex flex-1 min-w-0 items-center justify-center py-2">
        <div className="relative w-full max-w-full overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-neutral-200/60 sm:rounded-2xl">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={`${title} preview`}
              className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex aspect-video w-full items-center justify-center text-sm text-neutral-400">
              Preview coming soon
            </div>
          )}
        </div>
      </div>

      {/* Content at bottom */}
      <div className="mt-4 min-w-0 space-y-2 sm:mt-5">
        <h3 className="text-lg font-semibold text-neutral-900 wrap-break-word sm:text-xl lg:text-2xl">{title}</h3>
        <p className="text-sm leading-relaxed text-neutral-500 wrap-break-word sm:text-base">
          {description}
        </p>
      </div>
    </NavLink>
  );
};

export default ProjectCard;

