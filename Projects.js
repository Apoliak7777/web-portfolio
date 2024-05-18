export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards */}
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="text-xl font-bold mb-2">Project 1</h3>
            <p className="text-gray-700">Description of project 1.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="text-xl font-bold mb-2">Project 2</h3>
            <p className="text-gray-700">Description of project 2.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
