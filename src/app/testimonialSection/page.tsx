import Image from "next/image";
import { Star } from "lucide-react";

export function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Sanjay delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are outstanding.",
    },
    {
      name: "Michael Chen",
      position: "Product Manager, HealthCorp",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Working with Sanjay was a pleasure. He understood our healthcare requirements perfectly and delivered a robust, secure solution on time.",
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, FoodieApp",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The mobile app Sanjay developed for us has been a game-changer. User engagement increased by 300% after launch. Highly recommended!",
    },
    {
      name: "David Thompson",
      position: "CTO, EduTech Solutions",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Sanjay's full-stack development skills are impressive. He built our entire learning platform from scratch with excellent performance and scalability.",
    },
  ];

  return (
    <div>
      <div className="mb-12">
        <div className="text-xs font-medium text-gray-500 tracking-wider mb-4">
          // TESTIMONIALS
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
          What Clients Say
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Don't just take my word for it. Here's what my clients have to say
          about working with me.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              "{testimonial.text}"
            </p>
            <div className="flex items-center">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-black">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
