import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { TemplateCard } from "../components/pages/TemplateCard";
import { Search, Sparkles, Palette, Download, Star, Heart, Zap } from "lucide-react";

const mockHotPages = [
  {
    id: 1,
    title: "Cute Cat",
    image: "https://placehold.co/160x160/png?text=Cat",
    difficulty: "Simple",
    ageGroup: "Kids",
    downloads: 1200,
    rating: 4.8,
    isFavorite: true,
  },
  {
    id: 2,
    title: "Dragon",
    image: "https://placehold.co/160x160/png?text=Dragon",
    difficulty: "Complex",
    ageGroup: "Teens",
    downloads: 980,
    rating: 4.6,
    isFavorite: false,
  },
  {
    id: 3,
    title: "Mandala",
    image: "https://placehold.co/160x160/png?text=Mandala",
    difficulty: "Intricate",
    ageGroup: "Adults",
    downloads: 1500,
    rating: 4.9,
    isFavorite: false,
  },
  {
    id: 4,
    title: "Butterfly",
    image: "https://placehold.co/160x160/png?text=Butterfly",
    difficulty: "Medium",
    ageGroup: "Kids",
    downloads: 850,
    rating: 4.7,
    isFavorite: true,
  },
  {
    id: 5,
    title: "Robot",
    image: "https://placehold.co/160x160/png?text=Robot",
    difficulty: "Complex",
    ageGroup: "Teens",
    downloads: 720,
    rating: 4.5,
    isFavorite: false,
  },
  {
    id: 6,
    title: "Flower Garden",
    image: "https://placehold.co/160x160/png?text=Garden",
    difficulty: "Medium",
    ageGroup: "Adults",
    downloads: 1100,
    rating: 4.8,
    isFavorite: false,
  },
];

const mockCategories = [
  { name: "Animals", icon: "🐶", color: "bg-blue-100", count: 156 },
  { name: "Cartoon", icon: "🦄", color: "bg-pink-100", count: 89 },
  { name: "Holiday", icon: "🎄", color: "bg-green-100", count: 67 },
  { name: "Nature", icon: "🌳", color: "bg-emerald-100", count: 134 },
  { name: "Vehicles", icon: "🚗", color: "bg-yellow-100", count: 78 },
  { name: "Adults", icon: "🧘", color: "bg-purple-100", count: 92 },
];

const mockWireframeCategories = [
  { name: "UI Components", icon: "📱", color: "bg-indigo-100", count: 45 },
  { name: "Web Layouts", icon: "💻", color: "bg-cyan-100", count: 32 },
  { name: "Mobile Apps", icon: "📲", color: "bg-blue-100", count: 28 },
  { name: "Dashboard", icon: "📊", color: "bg-green-100", count: 19 },
  { name: "E-commerce", icon: "🛒", color: "bg-orange-100", count: 23 },
  { name: "Landing Pages", icon: "🏠", color: "bg-purple-100", count: 15 },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Hero Section */}
        <section className="mb-16 text-center py-16 rounded-3xl bg-gradient-to-r from-blue-100 via-white to-pink-100 shadow-lg border border-blue-200/50">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-sm">
              FreeColorHub
            </h1>
            <p className="text-2xl text-gray-700 mb-8 font-medium leading-relaxed">
              Free, printable, and AI-powered coloring pages for all ages. 
              <br />
              Plus, create stunning wireframes with AI assistance.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for coloring pages, wireframes, or categories..."
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-full focus:border-blue-500 focus:outline-none shadow-sm"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="flex items-center gap-2 px-8 py-4 text-lg shadow-lg hover:scale-105 transition-transform bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold">
                <Sparkles className="w-5 h-5" />
                Try AI Coloring Generator
              </button>
              <button className="flex items-center gap-2 px-8 py-4 text-lg shadow-lg hover:scale-105 transition-transform bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold">
                <Zap className="w-5 h-5" />
                Generate Wireframes
              </button>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Coloring Pages</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Wireframe Templates</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">1M+</div>
              <div className="text-gray-600">Downloads</div>
            </div>
          </div>
        </section>

        {/* Popular Coloring Pages */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Popular Coloring Pages</h2>
            <a href="/coloring" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
              View All <span>→</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {mockHotPages.map((page) => (
              <TemplateCard key={page.id} {...page} />
            ))}
          </div>
        </section>

        {/* AI Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">AI-Powered Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI Coloring Generator */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl shadow-lg border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-600 rounded-full">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">AI Coloring Generator</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Describe what you want and let our AI generate unique, printable coloring pages. 
                Perfect for kids, adults, and creative projects.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Custom themes and styles
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Multiple difficulty levels
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Instant download
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Try AI Coloring Generator
              </button>
            </div>

            {/* AI Wireframe Generator */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl shadow-lg border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-600 rounded-full">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">AI Wireframe Generator</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Generate professional wireframes and UI mockups with AI. 
                Perfect for designers, developers, and product managers.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Multiple design systems
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Export to Figma/Sketch
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Responsive layouts
                </div>
              </div>
              <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors">
                Generate Wireframes
              </button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Browse Categories</h2>
            <a href="/categories" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
              View All Categories <span>→</span>
            </a>
          </div>
          
          {/* Coloring Categories */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-700 mb-6">Coloring Pages</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {mockCategories.map((cat) => (
                <div key={cat.name} className={`flex flex-col items-center p-4 rounded-2xl cursor-pointer hover:scale-105 transition-transform ${cat.color} shadow-md hover:shadow-xl border border-white/50`}>
                  <div className="text-3xl mb-2 drop-shadow">{cat.icon}</div>
                  <div className="font-semibold text-sm text-gray-700 text-center">{cat.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{cat.count} pages</div>
                </div>
              ))}
            </div>
          </div>

          {/* Wireframe Categories */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-6">Wireframe Templates</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {mockWireframeCategories.map((cat) => (
                <div key={cat.name} className={`flex flex-col items-center p-4 rounded-2xl cursor-pointer hover:scale-105 transition-transform ${cat.color} shadow-md hover:shadow-xl border border-white/50`}>
                  <div className="text-3xl mb-2 drop-shadow">{cat.icon}</div>
                  <div className="font-semibold text-sm text-gray-700 text-center">{cat.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{cat.count} templates</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-10 text-center py-12 rounded-3xl bg-gradient-to-r from-purple-100 via-white to-blue-100 shadow-lg border border-purple-200/50">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Get Creative?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already creating amazing coloring pages and wireframes with our AI-powered tools.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="flex items-center gap-2 px-8 py-4 text-lg shadow-lg hover:scale-105 transition-transform bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold">
              <Download className="w-5 h-5" />
              Start Coloring
            </button>
            <button className="flex items-center gap-2 px-8 py-4 text-lg shadow-lg hover:scale-105 transition-transform bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold">
              <Zap className="w-5 h-5" />
              Create Wireframes
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
