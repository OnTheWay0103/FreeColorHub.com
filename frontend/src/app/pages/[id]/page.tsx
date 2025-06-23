import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";

const mockPage = {
  id: 1,
  title: "Cute Cat",
  image: "/images/cat.png",
  category: "Animals",
  difficulty: "Simple",
  ageGroup: "Kids",
  description: "A cute cat coloring page for kids.",
};

const mockRelated = [
  { id: 2, title: "Dog", image: "/images/dog.png" },
  { id: 3, title: "Rabbit", image: "/images/rabbit.png" },
];

export default function PageDetail() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">Home / Categories / Animals / <span className="text-blue-600 font-medium">{mockPage.title}</span></div>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Image */}
        <div className="flex-shrink-0">
          <img src={mockPage.image} alt={mockPage.title} className="w-64 h-64 object-contain rounded shadow" />
        </div>
        {/* Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{mockPage.title}</h1>
          <div className="mb-2 text-gray-600">Category: {mockPage.category}</div>
          <div className="mb-2 text-gray-600">Difficulty: {mockPage.difficulty}</div>
          <div className="mb-2 text-gray-600">Age Group: {mockPage.ageGroup}</div>
          <p className="mb-4 text-gray-700">{mockPage.description}</p>
          <div className="flex gap-4 mb-4">
            <Button variant="primary">Download PDF</Button>
            <Button variant="secondary">Color Online</Button>
          </div>
        </div>
      </div>
      {/* Related */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Related Pages</h2>
        <div className="flex gap-4">
          {mockRelated.map((item) => (
            <Card key={item.id} className="flex flex-col items-center w-40">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-contain mb-2" />
              <div className="font-medium">{item.title}</div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
} 