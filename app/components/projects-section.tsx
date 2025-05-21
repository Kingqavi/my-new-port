export default function ProjectsSection() {
  const projects = [
    { name: 'DarkHosting', description: 'A hosting platform with 10k+ Discord members and 200+ customers.' },
    { name: 'HyperByte', description: 'Another successful hosting venture.' },
    { name: 'DarkHosting 2.0', description: 'The next generation of DarkHosting.' },
  ]

  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-xl font-semibold">500+ servers running across all projects</p>
      </div>
    </section>
  )
}

