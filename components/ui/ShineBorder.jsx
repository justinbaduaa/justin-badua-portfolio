"use client";

import { cn } from "@/lib/utils";

/**
 * @name ShineBorder
 * @description A border that shines and rotates around the container.
 * @param borderRadius The border radius of the container.
 * @param borderWidth The width of the border.
 * @param duration The duration of the shine animation.
 * @param color The color of the shine.
 * @param className The class name of the container.
 * @param children The children of the container.
 */
export default function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#000000",
  className,
  children,
  ...props
}) {
  return (
    <div
      style={{
        "--border-radius": `${borderRadius}px`,
        ...props.style,
      }}
      className={cn(
        "relative min-h-[60px] w-full min-w-[300px] place-items-center rounded-[--border-radius] bg-white dark:bg-[#1c1c1e] p-3 text-black dark:text-white",
        className,
      )}
      {...props}
    >
      <div
        style={{
          "--border-width": `${borderWidth}px`,
          "--border-radius": `${borderRadius}px`,
          "--duration": `${duration}s`,
          "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          "--background-radial-gradient": `radial-gradient(transparent,transparent, ${
            Array.isArray(color) ? color.join(",") : color
          }, transparent, transparent)`,
        }}
        className={`before:bg-shine-size pointer-events-none absolute inset-0 size-full rounded-[--border-radius] p-[--border-width] will-change-[background-position] content-[''] before:absolute before:inset-[-50%] before:animate-shine before:bg-[length:300%_300%] before:p-[--border-width] before:will-change-[background-position] motion-safe:before:animate-shine before:[background-image:var(--background-radial-gradient)] before:[mask-composite:exclude] before:[mask-image:var(--mask-linear-gradient)]`}
      ></div>
      {children}
    </div>
  );
}

