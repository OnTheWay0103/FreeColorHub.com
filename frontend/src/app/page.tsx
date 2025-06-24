import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { TemplateCard } from "../components/pages/TemplateCard";

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
];

const mockCategories = [
  { name: "Animals", icon: "🐶", color: "bg-blue-100" },
  { name: "Cartoon", icon: "🦄", color: "bg-pink-100" },
  { name: "Holiday", icon: "🎄", color: "bg-green-100" },
  { name: "Nature", icon: "🌳", color: "bg-emerald-100" },
  { name: "Vehicles", icon: "🚗", color: "bg-yellow-100" },
  { name: "Adults", icon: "🧘", color: "bg-purple-100" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-10 w-full">
        {/* Brand Section */}
        <section className="mb-14 text-center py-12 rounded-2xl bg-gradient-to-r from-blue-100 via-white to-pink-100 shadow-md">
          <h1 className="text-5xl font-extrabold mb-4 text-blue-700 drop-shadow">FreeColorHub</h1>
          <p className="text-xl text-gray-700 mb-6 font-medium">Free, printable, and AI-powered coloring pages for all ages.</p>
          <button className="mb-2 px-8 py-3 text-lg shadow-lg hover:scale-105 transition-transform bg-blue-600 text-white rounded font-semibold">Try AI Coloring Page Generator</button>
        </section>
        {/* Hot Templates - 复刻截图风格 */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Popular Coloring Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {mockHotPages.map((page) => (
              <TemplateCard key={page.id} {...page} />
            ))}
          </div>
        </section>
        {/* Category Entry */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Browse by Category</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {mockCategories.map((cat) => (
              <div key={cat.name} className={`flex flex-col items-center w-36 h-36 justify-center cursor-pointer hover:scale-105 transition-transform ${cat.color} shadow-md hover:shadow-xl`}>
                <div className="text-4xl mb-3 drop-shadow">{cat.icon}</div>
                <div className="font-semibold text-lg text-gray-700">{cat.name}</div>
              </div>
            ))}
          </div>
        </section>
        {/* AI Generate Entry */}
        <section className="mb-10 text-center py-10 rounded-2xl bg-gradient-to-r from-pink-100 via-white to-blue-100 shadow-md">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Create Your Own Coloring Page</h2>
          <p className="text-lg text-gray-600 mb-6">Describe what you want and let AI generate a unique coloring page for you.</p>
          <button className="px-8 py-3 text-lg shadow-lg hover:scale-105 transition-transform bg-blue-600 text-white rounded font-semibold">Go to AI Generator</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
