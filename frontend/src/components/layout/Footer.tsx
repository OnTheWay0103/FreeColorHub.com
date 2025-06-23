import React from "react";

export const Footer: React.FC = () => (
  <footer className="w-full py-6 px-4 bg-gray-100 text-center text-sm text-gray-500 mt-8 border-t">
    <div className="mb-2">&copy; {new Date().getFullYear()} FreeColorHub.com. All rights reserved.</div>
    <div className="flex justify-center gap-4 mb-2">
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Twitter</a>
      <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">Facebook</a>
      <a href="mailto:contact@freecolorhub.com" className="hover:text-green-600">Contact</a>
    </div>
    <div>Made with ❤️ for coloring lovers worldwide.</div>
  </footer>
);
