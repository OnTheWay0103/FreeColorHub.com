import React from "react";

export interface SidebarProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/**
 * Sidebar - A vertical sidebar container with optional header.
 */
export const Sidebar: React.FC<SidebarProps> = ({ header, children, className = "" }) => (
  <aside className={`w-64 bg-white border-r p-4 ${className}`}>
    {header && <div className="mb-4 font-semibold text-lg">{header}</div>}
    <div>{children}</div>
  </aside>
);
