import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
  onClick?: () => void;
}

/**
 * Card - A simple container component with optional shadow and custom styles.
 */
export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  shadow = true,
  onClick,
  ...props
}) => {
  const base =
    "bg-white rounded-lg p-4" +
    (shadow ? " shadow-md hover:shadow-lg transition" : "");
  return (
    <div
      className={`${base} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};
