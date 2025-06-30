"use client";

import { useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  ArrowLeft, 
  Download, 
  Eye, 
  Zap,
  Sparkles,
  Monitor,
  Smartphone,
  Tablet
} from "lucide-react";

const wireframeTemplates = [
  {
    id: 1,
    title: "E-commerce Landing Page",
    category: "E-commerce",
    image: "https://placehold.co/400x300/png?text=E-commerce+Landing",
    device: "desktop",
    downloads: 234,
    rating: 4.8,
    tags: ["landing", "shopping", "responsive"],
    description: "Modern e-commerce landing page with hero section, product showcase, and call-to-action buttons."
  },
  {
    id: 2,
    title: "Mobile App Dashboard",
    category: "Dashboard",
    image: "https://placehold.co/400x300/png?text=Mobile+Dashboard",
    device: "mobile",
    downloads: 189,
    rating: 4.6,
    tags: ["mobile", "dashboard", "analytics"],
    description: "Clean mobile dashboard with key metrics, charts, and navigation menu."
  },
  {
    id: 3,
    title: "Blog Layout",
    category: "Blog",
    image: "https://placehold.co/400x300/png?text=Blog+Layout",
    device: "desktop",
    downloads: 156,
    rating: 4.7,
    tags: ["blog", "content", "reading"],
    description: "Professional blog layout with sidebar, article grid, and social sharing."
  },
  {
    id: 4,
    title: "Contact Form",
    category: "UI Components",
    image: "https://placehold.co/400x300/png?text=Contact+Form",
    device: "desktop",
    downloads: 298,
    rating: 4.9,
    tags: ["form", "contact", "validation"],
    description: "User-friendly contact form with validation and modern design."
  },
  {
    id: 5,
    title: "Portfolio Gallery",
    category: "Portfolio",
    image: "https://placehold.co/400x300/png?text=Portfolio+Gallery",
    device: "desktop",
    downloads: 167,
    rating: 4.5,
    tags: ["portfolio", "gallery", "showcase"],
    description: "Elegant portfolio gallery with filtering and lightbox functionality."
  },
  {
    id: 6,
    title: "Social Media Feed",
    category: "Social Media",
    image: "https://placehold.co/400x300/png?text=Social+Feed",
    device: "mobile",
    downloads: 145,
    rating: 4.4,
    tags: ["social", "feed", "mobile"],
    description: "Instagram-style social media feed with stories and posts."
  },
];

const categories = [
  { name: "All", count: wireframeTemplates.length },
  { name: "UI Components", count: 45 },
  { name: "Web Layouts", count: 32 },
  { name: "Mobile Apps", count: 28 },
  { name: "Dashboard", count: 19 },
  { name: "E-commerce", count: 23 },
  { name: "Landing Pages", count: 15 },
];

const devices = [
  { name: "All", icon: Monitor },
  { name: "Desktop", icon: Monitor },
  { name: "Mobile", icon: Smartphone },
  { name: "Tablet", icon: Tablet },
];

export default function WireframesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDevice, setSelectedDevice] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredTemplates = wireframeTemplates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory;
    const matchesDevice = selectedDevice === "All" || template.device === selectedDevice.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesDevice;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-blue-50">
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Wireframe Templates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional wireframe templates for designers, developers, and product managers. 
            Create stunning UI mockups with our pre-built templates or generate custom ones with AI.
          </p>
          
          {/* AI Generator CTA */}
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-2xl border border-purple-200 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Need a Custom Wireframe?</h2>
            <p className="text-gray-600 mb-4">Use our AI-powered wireframe generator to create unique designs based on your requirements.</p>
            <a 
              href="/generate" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all"
            >
              <Zap className="w-5 h-5" />
              Generate Custom Wireframe
            </a>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search wireframe templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === category.name
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Device Filter */}
            <div className="flex gap-2">
              {devices.map((device) => {
                const Icon = device.icon;
                return (
                  <button
                    key={device.name}
                    onClick={() => setSelectedDevice(device.name)}
                    className={`p-3 rounded-lg transition-colors ${
                      selectedDevice === device.name
                        ? "bg-purple-100 text-purple-600"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                    title={device.name}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                );
              })}
            </div>

            {/* View Mode */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 rounded-lg transition-colors ${
                  viewMode === "grid" ? "bg-purple-100 text-purple-600" : "bg-gray-100 text-gray-600"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 rounded-lg transition-colors ${
                  viewMode === "list" ? "bg-purple-100 text-purple-600" : "bg-gray-100 text-gray-600"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {filteredTemplates.length} of {wireframeTemplates.length} templates
          </p>
        </div>

        {/* Templates Grid */}
        <div className="mb-12">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template) => (
                <div key={template.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all overflow-hidden">
                  <div className="relative">
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                      {template.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{template.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{template.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {template.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {template.downloads}
                        </span>
                        <span className="flex items-center gap-1">
                          ⭐ {template.rating}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTemplates.map((template) => (
                <div key={template.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all p-6">
                  <div className="flex gap-6">
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-32 h-24 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{template.title}</h3>
                        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                          {template.category}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{template.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {template.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            {template.downloads} downloads
                          </span>
                          <span className="flex items-center gap-1">
                            ⭐ {template.rating} rating
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors border border-gray-200 rounded-lg hover:border-purple-200">
                            <Eye className="w-4 h-4 inline mr-2" />
                            Preview
                          </button>
                          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            <Download className="w-4 h-4 inline mr-2" />
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No templates found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search terms or filters.</p>
            <a 
              href="/generate" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all"
            >
              <Zap className="w-5 h-5" />
              Generate Custom Template
            </a>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
} 