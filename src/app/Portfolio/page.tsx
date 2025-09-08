"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ScrollIndicator } from "../scrollIndicator/page";
import { AboutSection } from "../about/page";
import { PortfolioSection } from "../portfolioSection/page";
import { ServicesSection } from "../servicesSection/page";
import { TestimonialSection } from "../testimonialSection/page";
import { ExperienceSection } from "../experienceSection/page";
import { BlogSection } from "../BlogSection/page";
import { ContactSection } from "../contactSection/page";
import { IndividualProfile } from "../individualProfile/page";

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("ABOUT ME");
  const [currentView, setCurrentView] = useState<"main" | string>("main");

  const sectionRefs = {
    "ABOUT ME": useRef<HTMLElement>(null),
    PORTFOLIO: useRef<HTMLElement>(null),
    SERVICES: useRef<HTMLElement>(null),
    TESTIMONIAL: useRef<HTMLElement>(null),
    EXPERIENCE: useRef<HTMLElement>(null),
    BLOG: useRef<HTMLElement>(null),
    CONTACT: useRef<HTMLElement>(null),
  };

  const navigationItems = [
    { name: "ABOUT ME" },
    { name: "PORTFOLIO" },
    { name: "SERVICES" },
    // { name: "TESTIMONIAL" },
    { name: "EXPERIENCE" },
    // { name: "BLOG" },
    { name: "CONTACT" },
  ];

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const [sectionName, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionName);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionName: string) => {
    const ref = sectionRefs[sectionName as keyof typeof sectionRefs];
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleProfileClick = (profileId: string) => {
    setCurrentView(profileId);
  };

  const handleBackToMain = () => {
    setCurrentView("main");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollIndicator />
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden bg-black text-white hover:bg-gray-800"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      {/* Sidebar Navigation */}
      <div
        className={`  fixed inset-y-0 left-0 z-40 w-48 bg-black text-white transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="p-8 h-full flex flex-col">
          <nav className="space-y-6 flex-1">
            {navigationItems.map((item, index) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <button
                  onClick={() => scrollToSection(item.name)}
                  className={`text-left text-sm font-medium tracking-wider ${
                    activeSection === item.name
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  } transition-colors`}
                >
                  {item.name}
                </button>
                <div className="flex items-center space-x-2">
                  {activeSection === item.name && (
                    <div className="w-3 h-3 rounded-full border-2 border-white"></div>
                  )}
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-44">
        {/* Header */}
        <header className="fixed top-0 right-0 left-0 md:left-96 z-30 ">
          <div className="flex justify-between items-center p-6 md:p-8">
            <div className="flex-1"></div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3 text-sm font-medium">
                <span className="cursor-pointer hover:text-gray-600">WA</span>
                <span className="cursor-pointer hover:text-gray-600">IN</span>
                <span className="cursor-pointer hover:text-gray-600">IG</span>
                <span className="cursor-pointer hover:text-gray-600">TL</span>
              </div>
            </div>
          </div>
        </header>

        {currentView === "main" ? (
          <main className="">
            <section
              ref={sectionRefs["ABOUT ME"]}
              id="about"
              className="min-h-screen px-6 md:px-8 py-12 flex flex-col justify-center"
            >
              <AboutSection onProfileClick={handleProfileClick} />
            </section>

            <section
              ref={sectionRefs["PORTFOLIO"]}
              id="portfolio"
              className="min-h-screen px-6 md:px-8  flex flex-col justify-center"
            >
              <PortfolioSection />
            </section>

            <section
              ref={sectionRefs["SERVICES"]}
              id="services"
              className="min-h-screen px-6 md:px-8 py-12 flex flex-col justify-center"
            >
              <ServicesSection />
            </section>

            {/* <section
              ref={sectionRefs["TESTIMONIAL"]}
              id="testimonial"
              className="min-h-screen px-6 md:px-8 py-12 flex flex-col justify-center"
            >
              <TestimonialSection />
            </section> */}

            <section
              ref={sectionRefs["EXPERIENCE"]}
              id="experience"
              className="min-h-screen px-6 md:px-8 py-12 flex flex-col justify-center"
            >
              <ExperienceSection />
            </section>

            {/* <section
              ref={sectionRefs["BLOG"]}
              id="blog"
              className="min-h-screen px-6 md:px-8 py-12 flex flex-col justify-center"
            >
              <BlogSection />
            </section> */}

            <section
              ref={sectionRefs["CONTACT"]}
              id="contact"
              className="min-h-screen px-6 md:px-8 py-12 flex flex-col justify-center"
            >
              <ContactSection />
            </section>
          </main>
        ) : (
          <IndividualProfile
            profileId={currentView}
            onBack={handleBackToMain}
          />
        )}
      </div>
    </div>
  );
}
