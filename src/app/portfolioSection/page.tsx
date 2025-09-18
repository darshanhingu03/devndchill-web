import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";
import smartPocketImage from "../../assets/smartPocket.png";
import madSolutionImage from "../../assets/madSolution.png";
import miracalMeImage from "../../assets/miracalMe.jpeg";
import prazzelImage from "../../assets/prazzel.png";
function PortfolioSection() {
  const projects = [
    {
      title: "Finance Management App",
      category: "Revolutionary Finance App",
      description: "Transaction categorization and smart pocket allocation",
      image: smartPocketImage,
      technologies: ["React", "Next.js", "Postgres"],
    },
    {
      title: "Event Organizer",
      category: "Web Development",
      description: "Event planning and management platform",
      image: madSolutionImage,
      technologies: ["React", "Next.js", "Docker"],
    },
    {
      title: "Miracle-Me App",
      category: "Mobile Development",
      description: "Chat app with voice and video calls",
      image: miracalMeImage,
      technologies: ["React Native", "Firebase", "Redux", "WebRTC"],
    },
    {
      title: "Prazzel Inc.",
      category: "E-Commerce Platform",
      description: "Online marketplace for buying and selling products",
      image: prazzelImage,
      technologies: ["Next.js", "Express", "AWS"],
    },
  ];

  return (
    <div>
      <div className="mb-12">
        <div className="text-xs font-medium text-gray-500 tracking-wider mb-4">
          // PORTFOLIO
        </div>
        <h1 className="text-4xl md:text-4xl font-bold text-black mb-4">
          <TextAnimate animation="slideLeft" by="character">
            Our Recent Works
          </TextAnimate>
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
export default PortfolioSection;
