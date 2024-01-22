import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-[#023e8a]",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-3 rounded-full text-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
