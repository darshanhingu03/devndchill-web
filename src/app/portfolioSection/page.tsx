import Image from "next/image";

export function PortfolioSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with React and Node.js",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "Healthcare Dashboard",
      category: "UI/UX Design",
      description: "Patient management system for healthcare providers",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
    },
    {
      title: "Food Delivery App",
      category: "Mobile Development",
      description: "Cross-platform mobile app for food delivery service",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native", "Firebase", "Redux", "Maps API"],
    },
    {
      title: "Education Platform",
      category: "Full Stack",
      description: "Online learning platform with video streaming",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Express", "AWS", "WebRTC"],
    },
  ];

  return (
    <div>
      <div className="mb-12">
        <div className="text-xs font-medium text-gray-500 tracking-wider mb-4">
          // PORTFOLIO
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
          Our Recent Works
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Here are some of my recent projects that showcase my skills in web
          development, mobile apps, and creative solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-medium text-gray-500 tracking-wider">
                {project.category}
              </div>
              <h3 className="text-xl font-bold text-black group-hover:text-gray-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
