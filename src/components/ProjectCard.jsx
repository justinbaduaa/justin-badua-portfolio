import { NavLink } from "react-router-dom";

const ProjectCard = ({ category, title, imageSrc, year, to }) => {
  return (
    <NavLink
      to={to}
      className="group flex h-full min-w-0 flex-col gap-6 overflow-hidden rounded-[8px] border border-neutral-200/60 bg-white p-6 pb-8 shadow-[0_22px_45px_-32px_rgba(15,23,42,0.18)] transition-all duration-500 hover:-translate-y-[6px] hover:border-neutral-200 hover:shadow-[0_40px_70px_-45px_rgba(15,23,42,0.25)]"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-[6px] bg-neutral-100">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`${title} preview`}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-neutral-400">
            Preview coming soon
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-end">
        <div className="flex items-end justify-between gap-6">
          <div className="space-y-1">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-400/80">
              {category}
            </p>
            <h3 className="text-2xl font-semibold text-neutral-800">{title}</h3>
          </div>
          <span className="text-sm font-medium text-neutral-400">{year}</span>
        </div>
      </div>
    </NavLink>
  );
};

export default ProjectCard;

