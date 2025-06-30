import React from "react";
import { Heart, Download, Star } from "lucide-react";

interface TemplateCardProps {
  id: number;
  title: string;
  image: string;
  difficulty: string;
  ageGroup: string;
  downloads: number;
  rating: number;
  isFavorite: boolean;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  title,
  image,
  difficulty,
  ageGroup,
  downloads,
  rating,
  isFavorite,
}) => {
  const [favorite, setFavorite] = React.useState(isFavorite);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorite(!favorite);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "simple":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "complex":
      case "intricate":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all overflow-hidden cursor-pointer group">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${
              favorite ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </button>
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
            {ageGroup}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">{title}</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Download className="w-4 h-4" />
              {downloads.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              {rating}
            </span>
          </div>
          
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
            Download
          </button>
        </div>
      </div>
    </div>
  );
}; 