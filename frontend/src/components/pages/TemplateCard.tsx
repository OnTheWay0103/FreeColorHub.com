import React from "react";
import { Button } from "../ui/Button";

interface TemplateCardProps {
  image: string;
  title: string;
  difficulty: string;
  ageGroup: string;
  downloads: number;
  rating: number;
  isFavorite?: boolean;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  image,
  title,
  difficulty,
  ageGroup,
  downloads,
  rating,
  isFavorite = false,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col items-center w-full max-w-xs mx-auto group cursor-pointer border border-gray-100">
      <div className="relative w-40 h-40 mb-4 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
        <img src={image} alt={title} className="object-contain w-36 h-36" />
        <button className="absolute top-2 right-2 text-gray-400 hover:text-pink-500 transition">
          {isFavorite ? (
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
          ) : (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" /></svg>
          )}
        </button>
      </div>
      <div className="w-full flex flex-col items-center mb-2">
        <div className="font-bold text-lg text-gray-800 mb-1 text-center line-clamp-2">{title}</div>
        <div className="flex gap-2 mb-2">
          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-xs font-medium">{difficulty}</span>
          <span className="px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs font-medium">{ageGroup}</span>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mb-3 px-2">
        <div className="flex items-center gap-1 text-yellow-400">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
          <span className="text-sm font-semibold text-gray-700">{rating}</span>
        </div>
        <div className="text-xs text-gray-400">{downloads} downloads</div>
      </div>
      <div className="flex gap-2 w-full mt-auto">
        <Button variant="primary" className="flex-1 py-1 text-sm">Download</Button>
        <Button variant="secondary" className="flex-1 py-1 text-sm">Color Online</Button>
      </div>
    </div>
  );
}; 