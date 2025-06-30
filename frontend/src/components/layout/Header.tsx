import React from "react";
import { Button } from "../ui/Button";
import { Sparkles, Zap } from "lucide-react";

export const Header: React.FC = () => (
  <header className="w-full flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50">
    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
      FreeColorHub
    </div>
    <nav className="hidden md:flex gap-6">
      <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
      <a href="/categories" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Categories</a>
      <a href="/generate" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">AI Generate</a>
      <a href="/wireframes" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Wireframes</a>
      <a href="/coloring" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Online Coloring</a>
    </nav>
    <div className="flex items-center gap-3">
      <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
        <Sparkles className="w-4 h-4" />
        AI Coloring
      </Button>
      <Button size="sm" className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
        <Zap className="w-4 h-4" />
        AI Wireframes
      </Button>
    </div>
  </header>
);