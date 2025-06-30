"use client";

import { useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Button } from "../../components/ui/Button";
import { 
  Sparkles, 
  Download, 
  Copy, 
  RefreshCw, 
  Settings, 
  Palette,
  Monitor,
  Smartphone,
  Tablet,
  Layout,
  Grid,
  List,
  ArrowLeft
} from "lucide-react";

const designSystems = [
  { id: "material", name: "Material Design", icon: "🎨" },
  { id: "ios", name: "iOS Design", icon: "📱" },
  { id: "bootstrap", name: "Bootstrap", icon: "🔧" },
  { id: "tailwind", name: "Tailwind CSS", icon: "💨" },
  { id: "ant", name: "Ant Design", icon: "🐜" },
];

const wireframeTypes = [
  { id: "landing", name: "Landing Page", icon: "🏠" },
  { id: "dashboard", name: "Dashboard", icon: "📊" },
  { id: "ecommerce", name: "E-commerce", icon: "🛒" },
  { id: "blog", name: "Blog", icon: "📝" },
  { id: "portfolio", name: "Portfolio", icon: "💼" },
  { id: "contact", name: "Contact Form", icon: "📧" },
];

export default function GeneratePage() {
  const [prompt, setPrompt] = useState("");
  const [selectedSystem, setSelectedSystem] = useState("material");
  const [selectedType, setSelectedType] = useState("landing");
  const [selectedDevice, setSelectedDevice] = useState("desktop");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedWireframe, setGeneratedWireframe] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedWireframe("https://placehold.co/800x600/png?text=Generated+Wireframe");
      setIsGenerating(false);
    }, 3000);
  };

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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">AI Wireframe Generator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Generate professional wireframes and UI mockups with AI. Describe your idea and let our AI create stunning designs for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="space-y-8">
            {/* Prompt Input */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Describe Your Design</h2>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the wireframe you want to generate. For example: 'A modern landing page for a SaaS product with hero section, features, pricing, and contact form'"
                className="w-full h-32 p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none resize-none"
              />
              <div className="mt-4 text-sm text-gray-500">
                {prompt.length}/500 characters
              </div>
            </div>

            {/* Design System Selection */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Design System</h3>
              <div className="grid grid-cols-2 gap-3">
                {designSystems.map((system) => (
                  <button
                    key={system.id}
                    onClick={() => setSelectedSystem(system.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedSystem === system.id
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="text-2xl mb-2">{system.icon}</div>
                    <div className="font-semibold text-sm">{system.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Wireframe Type */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Wireframe Type</h3>
              <div className="grid grid-cols-2 gap-3">
                {wireframeTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedType === type.id
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="text-2xl mb-2">{type.icon}</div>
                    <div className="font-semibold text-sm">{type.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Device Selection */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Device Type</h3>
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedDevice("desktop")}
                  className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                    selectedDevice === "desktop"
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Monitor className="w-6 h-6 mx-auto mb-2" />
                  <div className="font-semibold text-sm">Desktop</div>
                </button>
                <button
                  onClick={() => setSelectedDevice("tablet")}
                  className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                    selectedDevice === "tablet"
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Tablet className="w-6 h-6 mx-auto mb-2" />
                  <div className="font-semibold text-sm">Tablet</div>
                </button>
                <button
                  onClick={() => setSelectedDevice("mobile")}
                  className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                    selectedDevice === "mobile"
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Smartphone className="w-6 h-6 mx-auto mb-2" />
                  <div className="font-semibold text-sm">Mobile</div>
                </button>
              </div>
            </div>

            {/* Generate Button */}
            <Button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin mr-2" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Wireframe
                </>
              )}
            </Button>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            {/* Generated Wireframe */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Generated Wireframe</h2>
                {generatedWireframe && (
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Link
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
                {isGenerating ? (
                  <div className="text-center">
                    <RefreshCw className="w-12 h-12 animate-spin mx-auto mb-4 text-purple-600" />
                    <p className="text-gray-600">Generating your wireframe...</p>
                  </div>
                ) : generatedWireframe ? (
                  <img
                    src={generatedWireframe}
                    alt="Generated wireframe"
                    className="max-w-full h-auto rounded-lg shadow-md"
                  />
                ) : (
                  <div className="text-center text-gray-500">
                    <Layout className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Your generated wireframe will appear here</p>
                  </div>
                )}
              </div>
            </div>

            {/* Recent Generations */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Generations</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Layout className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">E-commerce Landing Page</div>
                    <div className="text-xs text-gray-500">2 hours ago</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Layout className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">Dashboard Layout</div>
                    <div className="text-xs text-gray-500">1 day ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 