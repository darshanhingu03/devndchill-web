"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import rahulImage from "../../assets/rahul.jpeg";
import darshanImage from "../../assets/darshan.jpeg";
import dhavalImage from "../../assets/dhaval.jpeg";

interface Profile {
  id: string;
  name: string;
  role: string;
  tagline: string;
  image: any;
}

interface AboutSectionProps {
  onProfileClick: (profileId: string) => void;
}

export function AboutSection({ onProfileClick }: AboutSectionProps) {
  const profiles: Profile[] = [
    {
      id: "darshan",
      name: "Darshan Hingu",
      role: "Backend Developer",
      tagline:
        "Crafting robust, scalable backends that power seamless digital experiences",
      image: darshanImage,
    },
    {
      id: "rahul",
      name: "Rahul Kambariya",
      role: "Front-End Engineer",
      tagline:
        "Engineering elegant interfaces with a focus on usability and speed.",
      image: rahulImage,
    },
    {
      id: "dhaval",
      name: "Dhava Karaniya",
      role: "Front-End Developer",
      tagline: "Building dynamic and responsive web applications",
      image: dhavalImage,
    },
  ];

  return (
    <>
      {/* <div className="">
        <h1 className="text-7xl md:text-7xl font-bold mb-8">
          <span className="text-black">Your Imagination, </span>{" "}
          <span className="text-gray-400 font-light text-5xl md:text-5xl">
            {" "}
            We Build{" "}
          </span>
        </h1>
      </div> */}
      <div className="flex items-center justify-center ">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="relative">
            <h1 className="text-6xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
              <span className="text-black bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent drop-shadow-sm">
                Your Imagination,
              </span>
              <br />
              <span className="text-gray-400 font-light text-4xl md:text-4xl italic tracking-wider opacity-90 hover:opacity-100 transition-opacity duration-300">
                We Build
              </span>
            </h1>

            {/* Subtle decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-black opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-gray-400 opacity-30"></div>

            {/* Animated underline */}
            <div className="mt-6 mx-auto w-32 h-0.5 bg-gradient-to-r from-black via-gray-600 to-gray-400 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="text-xs font-medium text-gray-500 tracking-wider mb-4">
          // ABOUT US
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
          Building Web & Mobile Apps with Creativity.
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          We’re a team of passionate developers and designers with 8+ years of
          experience delivering impactful products across E-Commerce, Logistics,
          Education, and ERP. From astrology apps to CRMs, auction systems, and
          vendor portals—we build with a focus on performance, scalability, and
          user experience.
        </p>
      </div>

      {/* Team Profiles */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            onClick={() => onProfileClick(profile.id)}
            className="group cursor-pointer bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto relative">
                <Image
                  src={profile.image || "/placeholder.svg"}
                  alt={profile.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition-colors">
                {profile.name}
              </h3>
              <div className="text-sm font-medium text-gray-500 tracking-wider mb-3">
                {profile.role}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {profile.tagline}
              </p>
            </div>
            <div className="mt-4 text-center">
              <Button
                variant="outline"
                size="sm"
                className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 bg-transparent"
              >
                View Profile
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Team Statistics */}
      <div className="grid grid-cols-3 gap-8 text-center mb-16">
        <div>
          <div className="text-4xl font-bold text-black mb-1">
            8<span className="text-2xl">+</span>
          </div>
          <div className="text-xs font-medium text-gray-600 tracking-wider">
            YEARS COMBINED EXPERIENCE
          </div>
        </div>
        <div>
          <div className="text-4xl font-bold text-black mb-1">
            15<span className="text-2xl">k</span>
          </div>
          <div className="text-xs font-medium text-gray-600 tracking-wider">
            HOURS OF WORKING
          </div>
        </div>
        <div>
          <div className="text-4xl font-bold text-black mb-1">
            12<span className="text-2xl">+</span>
          </div>
          <div className="text-xs font-medium text-gray-600 tracking-wider">
            PROJECTS COMPLETED
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-2xl">
        <div className="text-xs font-medium text-gray-500 tracking-wider mb-4">
          // INTRO
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Need a Creative Product?
          <br />
          We can Help You!
        </h3>
        <p className="text-gray-600 leading-relaxed mb-8">
          Our team has been developing sites and apps for 8+ years and we know
          for sure the main trends and directions of modern design. We have been
          visionary and reliable software engineering partners for world-class
          brands. You will get a decent result as you expect.
        </p>
        <Button
          variant="outline"
          className="border-2 border-dashed border-black text-black hover:bg-black hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 bg-transparent"
        >
          Book a free consultation
        </Button>
      </div>
    </>
  );
}
