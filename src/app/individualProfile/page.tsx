"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface IndividualProfileProps {
  profileId: any;
  onBack: () => void;
}

export default function IndividualProfile() {
  const profiles = {
    darshan: {
      name: "Sanjay Dhamecha",
      role: "Full Stack Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. I specialize in React, Node.js, and cloud technologies. I love solving complex problems and creating efficient, user-friendly solutions that make a real impact.",
      fullBio: `I'm a dedicated full-stack developer with a passion for creating innovative web solutions. My journey in software development began 5 years ago, and since then, I've had the privilege of working on diverse projects ranging from e-commerce platforms to healthcare management systems.

      My expertise lies in modern JavaScript frameworks, particularly React and Node.js, combined with cloud technologies like AWS. I believe in writing clean, maintainable code and following best practices to ensure scalability and performance.

      When I'm not coding, I enjoy contributing to open-source projects, mentoring junior developers, and staying up-to-date with the latest technology trends. I'm always excited to take on new challenges and collaborate with teams to bring ideas to life.`,
      contact: {
        email: "sanjay@example.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
      },
      portfolio: [
        {
          title: "E-Commerce Platform",
          description: "Full-stack e-commerce solution with React and Node.js",
          image: "/placeholder.svg?height=200&width=300",
          technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        },
        {
          title: "Healthcare Dashboard",
          description: "Patient management system for healthcare providers",
          image: "/placeholder.svg?height=200&width=300",
          technologies: ["Next.js", "PostgreSQL", "Docker"],
        },
        {
          title: "Real-time Chat App",
          description: "WebSocket-based chat application with file sharing",
          image: "/placeholder.svg?height=200&width=300",
          technologies: ["Socket.io", "Express", "Redis"],
        },
      ],
      testimonials: [
        {
          name: "Sarah Johnson",
          position: "Product Manager",
          text: "Sanjay is an exceptional developer who consistently delivers high-quality code. His problem-solving skills and attention to detail are outstanding.",
        },
        {
          name: "Michael Chen",
          position: "CTO, TechStart",
          text: "Working with Sanjay was a pleasure. He understood our requirements perfectly and delivered a robust solution ahead of schedule.",
        },
      ],
    },
    rahul: {
      name: "Priya Sharma",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Creative UI/UX designer with 4+ years of experience crafting beautiful and intuitive user experiences. I specialize in user research, wireframing, and creating design systems that scale across products.",
      fullBio: `I'm a passionate UI/UX designer who believes that great design is not just about how something looks, but how it works. With 4+ years of experience in the field, I've had the opportunity to work on a wide range of projects, from mobile apps to enterprise software.

      My design philosophy centers around user-centered design principles. I start every project with thorough user research to understand the target audience, their needs, and pain points. This research forms the foundation for creating intuitive and engaging user experiences.

      I'm proficient in industry-standard tools like Figma, Adobe XD, and Sketch, and I stay current with the latest design trends and best practices. I also have a good understanding of front-end development, which helps me create designs that are both beautiful and technically feasible.`,
      contact: {
        email: "priya@example.com",
        phone: "+1 (555) 234-5678",
        location: "New York, NY",
      },
      portfolio: [
        {
          title: "Mobile Banking App",
          description: "Complete UI/UX design for a fintech mobile application",
          image: "/placeholder.svg?height=200&width=300",
          technologies: ["Figma", "Principle", "User Research"],
        },
        {
          title: "SaaS Dashboard",
          description:
            "Enterprise dashboard design with complex data visualization",
          image: "/placeholder.svg?height=200&width=300",
          technologies: ["Adobe XD", "Design System", "Prototyping"],
        },
        {
          title: "E-learning Platform",
          description:
            "Educational platform with focus on accessibility and usability",
          image: "/placeholder.svg?height=200&width=300",
          technologies: ["Sketch", "InVision", "Accessibility"],
        },
      ],
      testimonials: [
        {
          name: "David Wilson",
          position: "CEO, DesignCorp",
          text: "Priya's design skills are exceptional. She has a keen eye for detail and always delivers designs that exceed expectations.",
        },
        {
          name: "Lisa Rodriguez",
          position: "Product Owner",
          text: "Priya's user research and design process helped us create a product that our users absolutely love. Highly recommended!",
        },
      ],
    },
    dhaval: {
      name: "Arjun Patel",
      role: "DevOps Engineer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Experienced DevOps engineer with 4+ years of expertise in cloud infrastructure, containerization, and CI/CD pipelines. I help teams deploy faster and more reliably while maintaining security and scalability.",
      fullBio: `I'm a DevOps engineer passionate about bridging the gap between development and operations. With 4+ years of experience in the field, I specialize in creating robust, scalable infrastructure solutions that enable teams to deploy applications quickly and reliably.

      My expertise spans across cloud platforms (primarily AWS), containerization technologies like Docker and Kubernetes, and automation tools for CI/CD pipelines. I believe in Infrastructure as Code and have extensive experience with tools like Terraform and Ansible.

      Security is always at the forefront of my mind when designing systems. I implement best practices for secure deployments, monitoring, and incident response. I also enjoy mentoring developers on DevOps practices and helping organizations adopt cloud-native technologies.`,
      contact: {
        email: "arjun@example.com",
        phone: "+1 (555) 345-6789",
        location: "Austin, TX",
      },
      portfolio: [
        {
          title: "Kubernetes Migration",
          description: "Migrated legacy applications to Kubernetes cluster",
          image: "/placeholder.svg?height=200&width=300",
          technologies: ["Kubernetes", "Docker", "Helm", "Monitoring"],
        },
        {
          title: "CI/CD Pipeline",
          description:
            "Automated deployment pipeline for microservices architecture",
          image: "/placeholder.svg?height=200&width=300",
          technologies: ["Jenkins", "GitLab CI", "AWS", "Terraform"],
        },
        {
          title: "Infrastructure Automation",
          description:
            "Complete infrastructure automation using Infrastructure as Code",
          image: "/placeholder.svg?height=200&width=300",
          technologies: ["Terraform", "Ansible", "AWS", "Monitoring"],
        },
      ],
      testimonials: [
        {
          name: "Jennifer Kim",
          position: "Engineering Manager",
          text: "Arjun transformed our deployment process. What used to take hours now takes minutes, and our system reliability has improved dramatically.",
        },
        {
          name: "Robert Taylor",
          position: "CTO, CloudTech",
          text: "Arjun's expertise in cloud infrastructure is impressive. He designed a scalable solution that has served us well as we've grown.",
        },
      ],
    },
  };
  const router = useRouter();
  const profile = profiles["rahul"];

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Button
            onClick={() => router.back()}
            variant="ghost"
            className="flex items-center gap-2 text-gray-600 hover:text-black"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Team
          </Button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Profile Header */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="w-64 h-64 rounded-full overflow-hidden mx-auto mb-6">
              <Image
                src={profile.image || "/placeholder.svg"}
                alt={profile.name}
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-black mb-2">
                {profile.name}
              </h1>
              <p className="text-gray-600 font-medium mb-4">{profile.role}</p>
              <p className="text-gray-600 leading-relaxed">{profile.bio}</p>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-medium text-gray-500 tracking-wider mb-4">
              // FULL BIO
            </div>
            <div className="prose prose-gray max-w-none">
              {profile.fullBio.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed mb-4">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div className="mb-16">
          <div className="text-xs font-medium text-gray-500 tracking-wider mb-4">
            // PORTFOLIO
          </div>
          <h2 className="text-3xl font-bold text-black mb-8">Featured Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {profile.portfolio.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
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

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-xs font-medium text-gray-500 tracking-wider mb-4">
            // TESTIMONIALS
          </div>
          <h2 className="text-3xl font-bold text-black mb-8">
            What Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {profile.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-semibold text-black">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-xs font-medium text-gray-500 tracking-wider mb-4">
              // CONTACT
            </div>
            <h2 className="text-3xl font-bold text-black mb-8">Get in Touch</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-600 mr-3" />
                <span className="text-gray-600">{profile.contact.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-600 mr-3" />
                <span className="text-gray-600">{profile.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gray-600 mr-3" />
                <span className="text-gray-600">
                  {profile.contact.location}
                </span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="border-black hover:bg-black hover:text-white bg-transparent"
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-black hover:bg-black hover:text-white bg-transparent"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-black hover:bg-black hover:text-white bg-transparent"
              >
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-6">
              Send a Message
            </h3>
            <form className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  className="border-gray-300 focus:border-black"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="border-gray-300 focus:border-black"
                />
              </div>
              <div>
                <Input
                  placeholder="Subject"
                  className="border-gray-300 focus:border-black"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  className="border-gray-300 focus:border-black resize-none"
                />
              </div>
              <Button className="bg-black text-white hover:bg-gray-800 w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
