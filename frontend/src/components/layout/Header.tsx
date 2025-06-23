import React from "react";
import { Button } from "../ui/Button";

export const Header: React.FC = () => (
  <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow">
    <div className="text-2xl font-bold text-blue-700">FreeColorHub</div>
    <nav className="flex gap-4">
      <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
      <a href="/categories" className="text-gray-700 hover:text-blue-600">Categories</a>
      <a href="/generate" className="text-gray-700 hover:text-blue-600">AI Generate</a>
      <a href="/coloring" className="text-gray-700 hover:text-blue-600">Online Coloring</a>
      <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
    </nav>
    <Button>Sign In</Button>
  </header>
);