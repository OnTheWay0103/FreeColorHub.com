import React from "react";

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationProps {
  items: NavItem[];
  className?: string;
}

/**
 * Navigation - Renders a horizontal navigation bar from an array of items.
 */
export const Navigation: React.FC<NavigationProps> = ({ items, className = "" }) => (
  <nav className={`flex gap-4 ${className}`}>
    {items.map((item) => (
      <a
        key={item.href}
        href={item.href}
        className="text-gray-700 hover:text-blue-600 transition"
      >
        {item.label}
      </a>
    ))}
  </nav>
);
