import React from "react";
import clsx from "clsx";

export function Card({
  className,
  children,
  title = "Featured YouTube Videos",
  shadow = "shadow-lg",
  hoverEffect = true,
  borderColor = "border-gray-200",
  ...props
}) {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-white p-6 transition-all duration-300",
        shadow,
        borderColor,
        hoverEffect && "hover:scale-105 hover:shadow-2xl",
        className
      )}
      {...props}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      {children}
    </div>
  );
}
