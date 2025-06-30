"use client";

import { useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Search, Filter, Grid, List, ArrowLeft } from "lucide-react";

const coloringCategories = [
  { name: "Animals", icon: "🐶", color: "bg-blue-100", count: 156, description: "Cute and wild animals for all ages" },
  { name: "Cartoon", icon: "🦄", color: "bg-pink-100", count: 89, description: "Fun cartoon characters and scenes" },
  { name: "Holiday", icon: "🎄", color: "bg-green-100", count: 67, description: "Seasonal and holiday themed pages" },
  { name: "Nature", icon: "🌳", color: "bg-emerald-100", count: 134, description: "Beautiful nature scenes and landscapes" },
  { name: "Vehicles", icon: "🚗", color: "bg-yellow-100", count: 78, description: "Cars, planes, boats and more" },
  { name: "Adults", icon: "🧘", color: "bg-purple-100", count: 92, description: "Complex designs for adult coloring" },
  { name: "Fantasy", icon: "🐉", color: "bg-indigo-100", count: 45, description: "Magical creatures and fantasy worlds" },
  { name: "Food", icon: "🍕", color: "bg-orange-100", count: 56, description: "Delicious food and treats" },
  { name: "Sports", icon: "⚽", color: "bg-red-100", count: 34, description: "Sports and athletic activities" },
  { name: "Space", icon: "🚀", color: "bg-slate-100", count: 28, description: "Space exploration and astronomy" },
  { name: "Ocean", icon: "🐠", color: "bg-cyan-100", count: 41, description: "Underwater life and ocean scenes" },
  { name: "Flowers", icon: "🌸", color: "bg-rose-100", count: 73, description: "Beautiful flowers and gardens" },
];

const wireframeCategories = [
  { name: "UI Components", icon: "📱", color: "bg-indigo-100", count: 45, description: "Buttons, forms, navigation elements" },
  { name: "Web Layouts", icon: "💻", color: "bg-cyan-100", count: 32, description: "Complete website layouts and structures" },
  { name: "Mobile Apps", icon: "📲", color: "bg-blue-100", count: 28, description: "Mobile application interfaces" },
  { name: "Dashboard", icon: "📊", color: "bg-green-100", count: 19, description: "Analytics and admin dashboards" },
  { name: "E-commerce", icon: "🛒", color: "bg-orange-100", count: 23, description: "Online shopping interfaces" },
  { name: "Landing Pages", icon: "🏠", color: "bg-purple-100", count: 15, description: "Marketing and conversion pages" },
  { name: "Blog", icon: "📝", color: "bg-emerald-100", count: 12, description: "Content and article layouts" },
  { name: "Portfolio", icon: "💼", color: "bg-slate-100", count: 8, description: "Personal and business portfolios" },
  { name: "Social Media", icon: "📱", color: "bg-pink-100", count: 16, description: "Social platform interfaces" },
  { name: "Gaming", icon: "🎮", color: "bg-red-100", count: 11, description: "Game UI and interface elements" },
  { name: "Education", icon: "📚", color: "bg-yellow-100", count: 14, description: "Learning platform interfaces" },
  { name: "Healthcare", icon: "🏥", color: "bg-teal-100", count: 9, description: "Medical and health app interfaces" },
];

export default function CategoriesPage() {
  const [activeTab, setActiveTab] = useState<"coloring" | "wireframes">("coloring");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredColoringCategories = coloringCategories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredWireframeCategories = wireframeCategories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Back Navigation */}
        <div className="mb-8">
          <a href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Browse Categories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our extensive collection of coloring pages and wireframe templates organized by categories.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 rounded-lg transition-colors ${
                  viewMode === "grid" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 rounded-lg transition-colors ${
                  viewMode === "list" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("coloring")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === "coloring"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Coloring Pages ({coloringCategories.length})
              </button>
              <button
                onClick={() => setActiveTab("wireframes")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === "wireframes"
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Wireframes ({wireframeCategories.length})
              </button>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-12">
          {activeTab === "coloring" ? (
            <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" : "space-y-4"}>
              {filteredColoringCategories.map((category) => (
                <div
                  key={category.name}
                  className={`bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-pointer ${
                    viewMode === "list" ? "flex items-center p-6" : "p-6 text-center"
                  }`}
                >
                  {viewMode === "list" ? (
                    <>
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl mr-4 ${category.color}`}>
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{category.name}</h3>
                        <p className="text-gray-600 mb-2">{category.description}</p>
                        <span className="text-sm text-gray-500">{category.count} pages</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 ${category.color}`}>
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{category.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                      <span className="text-sm text-gray-500">{category.count} pages</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" : "space-y-4"}>
              {filteredWireframeCategories.map((category) => (
                <div
                  key={category.name}
                  className={`bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-pointer ${
                    viewMode === "list" ? "flex items-center p-6" : "p-6 text-center"
                  }`}
                >
                  {viewMode === "list" ? (
                    <>
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl mr-4 ${category.color}`}>
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{category.name}</h3>
                        <p className="text-gray-600 mb-2">{category.description}</p>
                        <span className="text-sm text-gray-500">{category.count} templates</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 ${category.color}`}>
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{category.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                      <span className="text-sm text-gray-500">{category.count} templates</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Empty State */}
        {((activeTab === "coloring" && filteredColoringCategories.length === 0) ||
          (activeTab === "wireframes" && filteredWireframeCategories.length === 0)) && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No categories found</h3>
            <p className="text-gray-600">Try adjusting your search terms or browse all categories.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
} 