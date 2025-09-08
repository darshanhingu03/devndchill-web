"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/magicui/text-animate";

interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  experiences: Experience[];
  skills: { name: string; level: number }[];
}

function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("sanjay");

  const teamMembers: TeamMember[] = [
    {
      id: "darshan",
      name: "Darshan Hingu",
      role: "Backend Developer",
      experiences: [
        {
          period: "2023 - Present",
          title: "Senior Backend Developer",
          company: "ProcureMent Genie Pvt. Ltd.",
          description:
            "Designing and developing scalable backend systems for procurement and logistics platforms. Spearheading API architecture, database design, and system optimization while mentoring junior developers.",
          technologies: [
            "Express.js",
            "PostgreSQL",
            "MySQL",
            "Prisma ORM",
            "sequelize ORM",
            "AWS EC2 S3 and RDS",
            "Redis",
            "Apache Kafka",
            "Kubernetes",
          ],
        },
        {
          period: "2022 - 2023 ",
          title: "Junior Backend Developer",
          company: "Grab The Site ",
          description:
            "Assisted in developing and maintaining server-side logic, database management, and API integrations. Focused on improving application performance and data security.",
          technologies: ["Node js", "MongoDB", "mongoose ORM", "REST APIs", ""],
        },
      ],
      skills: [
        { name: "Node.js / Express.js", level: 90 },
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "PostgreSQL / MongoDB", level: 85 },
        { name: "Docker / Kubernetes", level: 80 },
        { name: "Redis ", level: 75 },
        { name: "System Design", level: 60 },
      ],
    },
    {
      id: "rahul",
      name: "Rahul Kambariya",
      role: "Front-End Engineer",
      experiences: [
        {
          period: "2023 - Present",
          title: "Front-End Engineer",
          company: "ProcureMent Genie Pvt. Ltd.",
          description:
            "Developing responsive and user-friendly web applications using React and modern front-end frameworks. Collaborating closely with designers and backend teams to deliver seamless user experiences.",
          technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "ReactQuery",
            "Tailwind CSS",
            "Redux",
            "REST APIs",
          ],
        },
      ],
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "JavaScript / TypeScript", level: 85 },
        { name: "Tailwind CSS / CSS3", level: 80 },
        { name: "Redux / Zustand", level: 75 },
        { name: "REST & GraphQL APIs", level: 70 },

        { name: "UI/UX Principles", level: 60 },
      ],
    },
    {
      id: "dhaval",
      name: "Dhaval Karaniya",
      role: "Front-End App Developer",
      experiences: [
        {
          period: "2024 - Present",
          title: "Front-End Developer",
          company: "ProcureMent Genie Pvt. Ltd.",
          description:
            "Building responsive and interactive user interfaces with a focus on performance and accessibility. Collaborating with designers and backend teams to deliver seamless web experiences.",
          technologies: [
            "React",
            "React Native",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "ReactQuery",
            "Tailwind CSS",
            "Redux",
            "REST APIs",
          ],
        },
        {
          period: "2023-2024",
          title: "Front-End Developer",
          company: "WEDO WebApps",
          description:
            "Building responsive and interactive user interfaces with a focus on performance and accessibility. Collaborating with designers and backend teams to deliver seamless web experiences.",
          technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "ReactQuery",
            "Tailwind CSS",
            "Redux",
            "REST APIs",
          ],
        },
      ],
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "JavaScript / TypeScript", level: 85 },
        { name: "Tailwind CSS / CSS3", level: 80 },
        { name: "Redux / Zustand", level: 75 },
        { name: "REST & GraphQL APIs", level: 90 },
        { name: "React Native", level: 70 },
      ],
    },
  ];

  const activeMember =
    teamMembers.find((member) => member.id === activeTab) || teamMembers[0];

  return (
    <div>
      <div className="mb-12">
        <div className="text-xs font-medium text-gray-500 tracking-wider mb-4">
          // EXPERIENCE
        </div>
        <h1 className="text-4xl md:text-4xl font-bold text-black mb-4">
          <TextAnimate animation="slideLeft" by="character">
            Our Journey
          </TextAnimate>
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Combined 8+ years of professional experience in web development,
          design, and infrastructure, working with startups to enterprise
          companies.
        </p>
      </div>

      {/* Team Member Tabs */}
      <div className="flex flex-wrap gap-4 mb-8">
        {teamMembers.map((member) => (
          <Button
            key={member.id}
            onClick={() => setActiveTab(member.id)}
            variant={activeTab === member.id ? "default" : "outline"}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === member.id
                ? "bg-black text-white"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}
          >
            {member.name}
          </Button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Experience Timeline */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-black">
              {activeMember.name}
            </h2>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
              {activeMember.role}
            </span>
          </div>
          <div className="space-y-8">
            {activeMember.experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-gray-200 last:border-l-0"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full"></div>
                <div className="text-xs font-medium text-gray-500 tracking-wider mb-2">
                  {exp.period}
                </div>
                <h3 className="text-xl font-bold text-black mb-1">
                  {exp.title}
                </h3>
                <div className="text-sm font-medium text-gray-600 mb-3">
                  {exp.company}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-8">Skills</h2>
          <div className="space-y-6">
            {activeMember.skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-black">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-black h-2 rounded-full transition-all duration-300"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
