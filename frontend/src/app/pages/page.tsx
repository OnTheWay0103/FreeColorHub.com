import { Sidebar } from "../../components/layout/Sidebar";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";

const mockCategories = [
  "Animals",
  "Cartoon",
  "Holiday",
  "Nature",
  "Vehicles",
  "Adults",
];

const mockPages = [
  { id: 1, title: "Cute Cat", image: "/images/cat.png", category: "Animals" },
  { id: 2, title: "Dragon", image: "/images/dragon.png", category: "Fantasy" },
  { id: 3, title: "Mandala", image: "/images/mandala.png", category: "Art" },
  { id: 4, title: "Car", image: "/images/car.png", category: "Vehicles" },
  { id: 5, title: "Butterfly", image: "/images/butterfly.png", category: "Nature" },
];

export default function CategoryPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar header="Categories" className="hidden md:block">
        <ul>
          {mockCategories.map((cat) => (
            <li key={cat} className="mb-2 cursor-pointer hover:text-blue-600">
              {cat}
            </li>
          ))}
        </ul>
      </Sidebar>
      <main className="flex-1 p-6">
        {/* Breadcrumb and Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <div className="text-sm text-gray-500">Home / Categories / <span className="text-blue-600 font-medium">All</span></div>
          <div className="w-full md:w-64">
            <Input placeholder="Search coloring pages..." />
          </div>
        </div>
        {/* Template Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockPages.map((page) => (
            <Card key={page.id} className="flex flex-col items-center">
              <img src={page.image} alt={page.title} className="w-28 h-28 object-contain mb-2" />
              <div className="font-semibold mb-1">{page.title}</div>
              <div className="text-xs text-gray-500 mb-2">{page.category}</div>
              <button className="w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700 transition">View Details</button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
} 