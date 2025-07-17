import {
  Code,
  Smartphone,
  Palette,
  Database,
  Globe,
  AppWindow,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Custom web applications using modern frameworks like React, Next.js, and Vue.js",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Friendly",
        "Cross-browser Compatible",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "React Native",
        "Flutter",
        "Native iOS/Android",
        "App Store Deployment",
      ],
    },
    {
      icon: <AppWindow className="w-8 h-8" />,
      title: "SaaS Development",
      description:
        "We build scalable, secure, and high-performance SaaS applications.",
      features: [
        "Multi-Tenant Architecture",
        "User Authentication & Roles",
        "Subscription & Billing Integration",
        "Scalable Backend Infrastructure",
      ],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that enhance user experience",
      features: [
        "Wireframing",
        "Prototyping",
        "User Research",
        "Design Systems",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Scalable server-side solutions and API development",
      features: [
        "REST APIs",
        "Database Design",
        "Cloud Integration",
        "Security Implementation",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with payment integration",
      features: [
        "Shopping Cart",
        "Payment Gateway",
        "Inventory Management",
        "Order Processing",
      ],
    },
  ];

  return (
    <div>
      <div className="mb-12">
        <div className="text-xs font-medium text-gray-500 tracking-wider mb-4">
          // SERVICES
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
          What We Do
        </h1>
        <p className="text-gray-600 max-w-2xl">
          We provide comprehensive digital solutions to help businesses grow and
          succeed in the digital world.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
          >
            <div className="text-black mb-4 group-hover:text-gray-600 transition-colors">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-black mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="text-xs text-gray-500 flex items-center"
                >
                  <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
