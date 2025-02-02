import React from "react";
import clsx from "clsx";

export function Button({ className, children, ...props }) {
  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300",
        "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800",
        "shadow-md hover:shadow-lg active:scale-95",
        "focus:outline-none focus:ring-4 focus:ring-blue-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
