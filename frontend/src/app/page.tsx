import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

const mockHotPages = [
  { id: 1, title: "Cute Cat", image: "/images/cat.png", category: "Animals" },
  { id: 2, title: "Dragon", image: "/images/dragon.png", category: "Fantasy" },
  { id: 3, title: "Mandala", image: "/images/mandala.png", category: "Art" },
];

const mockCategories = [
  { name: "Animals", icon: "🐶" },
  { name: "Cartoon", icon: "🦄" },
  { name: "Holiday", icon: "🎄" },
  { name: "Nature", icon: "🌳" },
  { name: "Vehicles", icon: "🚗" },
  { name: "Adults", icon: "🧘" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 w-full">
        {/* Brand Section */}
        <section className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2">FreeColorHub</h1>
          <p className="text-lg text-gray-600 mb-4">
            Free, printable, and AI-powered coloring pages for all ages.
          </p>
          <Button variant="primary" className="mb-6">Try AI Coloring Page Generator</Button>
        </section>
        {/* Hot Templates */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Popular Coloring Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mockHotPages.map((page) => (
              <Card key={page.id} className="flex flex-col items-center">
                <img src={page.image} alt={page.title} className="w-32 h-32 object-contain mb-2" />
                <div className="font-semibold mb-1">{page.title}</div>
                <div className="text-xs text-gray-500 mb-2">{page.category}</div>
                <Button variant="secondary" className="w-full">View Details</Button>
              </Card>
            ))}
          </div>
        </section>
        {/* Category Entry */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Browse by Category</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {mockCategories.map((cat) => (
              <Card key={cat.name} className="flex flex-col items-center w-32 cursor-pointer hover:bg-blue-50">
                <div className="text-3xl mb-2">{cat.icon}</div>
                <div className="font-medium">{cat.name}</div>
              </Card>
            ))}
          </div>
        </section>
        {/* AI Generate Entry */}
        <section className="mb-10 text-center">
          <h2 className="text-2xl font-semibold mb-2">Create Your Own Coloring Page</h2>
          <p className="text-gray-600 mb-4">Describe what you want and let AI generate a unique coloring page for you.</p>
          <Button variant="primary">Go to AI Generator</Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
