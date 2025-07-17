"use client";

import React, { useState } from "react";
import {
  Typography,
  Container,
  Rating,
  Avatar,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const LISTENERS = [
  {
    name: "Aarav Sharma",
    avatar: "/image/listener1.jpg",
    age: 38,
    experience: "12 years",
    specialties: ["Vedic Astrology", "Marriage Compatibility"],
    rating: 4.9,
    ratingCount: 1034,
    description:
      "Vedic astrologer specializing in marriage matching and planetary doshas. I guide you through traditional remedies and modern interpretations.",
    available: true,
  },
  {
    name: "Meera Desai",
    avatar: "/image/listener2.jpg",
    age: 33,
    experience: "9 years",
    specialties: ["Tarot", "Career Guidance"],
    rating: 4.8,
    ratingCount: 886,
    description:
      "Intuitive tarot reader blending ancient symbolism with career counseling. I help professionals find clarity and purpose through the cards.",
    available: true,
  },
  {
    name: "Rohan Iyer",
    avatar: "/image/listener3.jpg",
    age: 45,
    experience: "18 years",
    specialties: ["Numerology", "Business Success"],
    rating: 4.7,
    ratingCount: 1240,
    description:
      "Numerologist focused on business growth and financial stability. My readings are tailored for entrepreneurs and startups seeking alignment.",
    available: false,
  },
  {
    name: "Kavya Nair",
    avatar: "/image/listener4.jpg",
    age: 29,
    experience: "7 years",
    specialties: ["Chakra Healing", "Emotional Balance"],
    rating: 5.0,
    ratingCount: 912,
    description:
      "Chakra healer helping clients regain emotional balance through energy alignment and traditional Indian techniques.",
    available: true,
  },
  {
    name: "Arjun Verma",
    avatar: "/image/listener5.jpg",
    age: 41,
    experience: "15 years",
    specialties: ["Kundli Analysis", "Health Astrology"],
    rating: 4.8,
    ratingCount: 1156,
    description:
      "Astrologer experienced in detailed Kundli (birth chart) analysis and health predictions based on planetary positions.",
    available: true,
  },
  {
    name: "Diya Kapoor",
    avatar: "/image/listener6.jpg",
    age: 35,
    experience: "10 years",
    specialties: ["Past Life Reading", "Spiritual Guidance"],
    rating: 4.9,
    ratingCount: 997,
    description:
      "Spiritual guide offering past life readings and soul path alignment through ancient Indian wisdom and mantras.",
    available: true,
  },
  {
    name: "Neel Joshi",
    avatar: "/image/listener7.jpg",
    age: 50,
    experience: "22 years",
    specialties: ["Palmistry", "Family Harmony"],
    rating: 4.6,
    ratingCount: 1344,
    description:
      "Veteran palmist reading hand lines to reveal family patterns, relationships, and life purpose with clarity.",
    available: false,
  },
  {
    name: "Ishita Rao",
    avatar: "/image/listener8.jpg",
    age: 27,
    experience: "5 years",
    specialties: ["Moon Cycles", "Fertility Readings"],
    rating: 4.9,
    ratingCount: 768,
    description:
      "Astrologer working with moon phases to support women’s wellness, fertility cycles, and emotional clarity.",
    available: true,
  },
  {
    name: "Devansh Kulkarni",
    avatar: "/image/listener9.jpg",
    age: 39,
    experience: "13 years",
    specialties: ["Horoscope Matching", "Vastu Consultation"],
    rating: 4.7,
    ratingCount: 982,
    description:
      "Expert in Kundli matching and Vastu for harmonious living. My sessions blend cosmic insight with practical home energy balance.",
    available: true,
  },
  {
    name: "Ananya Mehta",
    avatar: "/image/listener10.jpg",
    age: 31,
    experience: "8 years",
    specialties: ["Shadow Work", "Self-Healing"],
    rating: 5.0,
    ratingCount: 801,
    description:
      "Guide for inner transformation and healing through shadow work and mindfulness-based astrology.",
    available: true,
  },
  {
    name: "Yuvraj Singh",
    avatar: "/image/listener11.jpg",
    age: 44,
    experience: "19 years",
    specialties: ["Remedies & Mantras", "Life Path Reading"],
    rating: 4.8,
    ratingCount: 1190,
    description:
      "Life path reader providing personalized astrological remedies and mantra practices for balance and success.",
    available: false,
  },
  {
    name: "Priya Banerjee",
    avatar: "/image/listener12.jpg",
    age: 36,
    experience: "11 years",
    specialties: ["Dream Interpretation", "Intuition Training"],
    rating: 4.9,
    ratingCount: 943,
    description:
      "Intuitive coach decoding dreams and helping clients trust their inner voice through Indian symbolic traditions.",
    available: true,
  },
  {
    name: "Nikhil Reddy",
    avatar: "/image/listener13.jpg",
    age: 40,
    experience: "16 years",
    specialties: ["Planetary Remedies", "Karma Reading"],
    rating: 4.7,
    ratingCount: 1074,
    description:
      "Astrologer offering in-depth karma readings and personalized planetary remedies using gemstones and rituals.",
    available: true,
  },
  {
    name: "Saanvi Pillai",
    avatar: "/image/listener14.jpg",
    age: 30,
    experience: "6 years",
    specialties: ["Crystal Healing", "Love Readings"],
    rating: 4.8,
    ratingCount: 865,
    description:
      "Crystal healer focused on relationship growth and emotional healing using sacred Indian stones and practices.",
    available: true,
  },
  {
    name: "Rajeev Bhatia",
    avatar: "/image/listener15.jpg",
    age: 48,
    experience: "20 years",
    specialties: ["Jyotish", "Meditation Guidance"],
    rating: 5.0,
    ratingCount: 1311,
    description:
      "Jyotish master combining astrological insight with ancient meditation techniques for clarity and peace.",
    available: false,
  },
];

// Filter options for specialties
const SPECIALTIES = [
  "Vedic Astrology",
  "Marriage Compatibility",
  "Tarot",
  "Career Guidance",
  "Numerology",
  "Business Success",
  "Chakra Healing",
  "Emotional Balance",
  "Kundli Analysis",
  "Health Astrology",
  "Past Life Reading",
  "Spiritual Guidance",
  "Palmistry",
  "Family Harmony",
  "Moon Cycles",
  "Fertility Readings",
  "Horoscope Matching",
  "Vastu Consultation",
  "Shadow Work",
  "Self-Healing",
  "Remedies & Mantras",
  "Life Path Reading",
  "Dream Interpretation",
  "Intuition Training",
  "Planetary Remedies",
  "Karma Reading",
  "Crystal Healing",
  "Love Readings",
  "Jyotish",
  "Meditation Guidance",
];

// Single listener card component
const ListenerCard = ({ listener }: any) => {
  return (
    <div className="relative group">
      {/* Subtle gradient border with softer colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-400 rounded-2xl opacity-30 blur-sm group-hover:opacity-40 transition-opacity duration-300"></div>

      {/* Card content */}
      <div className="relative backdrop-blur-sm bg-white/5 backdrop-saturate-150 border border-white/10 rounded-2xl p-6 h-full flex flex-col">
        {/* Availability indicator */}
        <div className="absolute top-6 right-6">
          <span className={`flex h-3 w-3 relative`}>
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                listener.available ? "bg-green-400" : "bg-gray-400"
              } opacity-75`}
            ></span>
            <span
              className={`relative inline-flex rounded-full h-3 w-3 ${
                listener.available ? "bg-green-500" : "bg-gray-500"
              }`}
            ></span>
          </span>
        </div>

        {/* Header with avatar and ratings */}
        <div className="flex flex-col items-center mb-4 text-center">
          <Avatar
            src={listener.avatar}
            alt={listener.name}
            sx={{ width: 80, height: 80 }}
            className="ring-2 ring-purple-500 mb-3"
          />
          <Typography variant="h6" className="font-medium text-white">
            {listener.name}
          </Typography>
          <Typography variant="caption" className="text-gray-400">
            Age: {listener.age} • {listener.experience} experience
          </Typography>

          {/* Rating */}
          <div className="mt-2 flex items-center">
            <Rating
              value={listener.rating}
              precision={0.1}
              readOnly
              sx={{
                color: "#8b5cf6", // purple-500
                "& .MuiRating-iconEmpty": {
                  color: "rgba(255, 255, 255, 0.3)",
                },
              }}
            />
            <Typography variant="body2" className="ml-2 text-gray-300">
              {listener.rating} ({listener.ratingCount})
            </Typography>
          </div>
        </div>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {listener.specialties.map((specialty: any) => (
            <span
              key={specialty}
              className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-200"
            >
              {specialty}
            </span>
          ))}
        </div>

        {/* Description */}
        <Typography variant="body2" className="text-gray-300 mb-4 text-center">
          {listener.description}
        </Typography>

        {/* Connect button */}
        <div className="mt-3.5">
          <Button
            variant="contained"
            fullWidth
            className={`py-2 ${
              listener.available
                ? "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            disabled={!listener.available}
          >
            {listener.available ? "Connect Now" : "Currently Unavailable"}
          </Button>
        </div>
      </div>
    </div>
  );
};

// Filter component
const ListenerFilter = ({
  onFilterChange,
  activeFilters,
  onAvailabilityChange,
  showAvailableOnly,
}: any) => {
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);

  const handleSpecialtyClick = (specialty: any) => {
    const isSelected = selectedSpecialties.includes(specialty);
    let newSelection: any;

    if (isSelected) {
      newSelection = selectedSpecialties.filter((s) => s !== specialty);
    } else {
      newSelection = [...selectedSpecialties, specialty];
    }

    setSelectedSpecialties(newSelection);
    onFilterChange(newSelection);
  };

  return (
    <div className="backdrop-blur-sm bg-white/5 backdrop-saturate-150 border border-white/10 rounded-2xl p-6 mb-8">
      <div className="flex flex-wrap items-center justify-between mb-4">
        <Typography
          variant="h6"
          className="text-white font-medium mb-2 md:mb-0"
        >
          Filter by Specialty
        </Typography>

        <div className="flex items-center">
          <Typography variant="body2" className="text-gray-300 pr-3">
            Show Available Only
          </Typography>
          <div
            onClick={() => onAvailabilityChange(!showAvailableOnly)}
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
              showAvailableOnly ? "bg-purple-500" : "bg-gray-700"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                showAvailableOnly ? "translate-x-6" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {SPECIALTIES.map((specialty: any) => (
          <span
            key={specialty}
            onClick={() => handleSpecialtyClick(specialty)}
            className={`px-3 py-1 text-xs rounded-full cursor-pointer transition-colors duration-300 ${
              selectedSpecialties.includes(specialty)
                ? "bg-purple-500 text-white"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            {specialty}
          </span>
        ))}
      </div>
    </div>
  );
};

export function ListenersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  // Filter listeners based on search, specialties, and availability
  const filteredListeners = LISTENERS.filter((listener) => {
    const matchesSearch =
      listener.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listener.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialties =
      activeFilters.length === 0 ||
      listener.specialties.some((specialty) =>
        activeFilters.includes(specialty)
      );

    const matchesAvailability = !showAvailableOnly || listener.available;

    return matchesSearch && matchesSpecialties && matchesAvailability;
  });

  // Calculate average rating
  const averageRating =
    LISTENERS.reduce((acc, listener) => acc + listener.rating, 0) /
    LISTENERS.length;

  const totalReadings = LISTENERS.reduce(
    (acc, listener) => acc + listener.ratingCount,
    0
  );

  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden py-24">
        {/* Background Elements - Mystical theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 opacity-10 z-0"></div>
        <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-purple-500 filter blur-3xl opacity-10 z-0"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-indigo-500 filter blur-3xl opacity-10 z-0"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-blue-500 filter blur-3xl opacity-10 z-0"></div>

        <Container maxWidth="lg" className="relative z-10">
          {/* Header Section */}
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <Typography
                variant="subtitle2"
                className="text-white font-medium"
              >
                Cosmic Connection
              </Typography>
            </div>

            <Typography variant="h3" className="mb-4 font-bold text-white">
              Find Your Perfect{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Celestial Guide
              </span>
            </Typography>

            <Typography
              variant="body1"
              className="mx-auto max-w-2xl text-gray-300 leading-relaxed"
            >
              Our listeners are here to provide cosmic guidance, emotional
              support, and spiritual insights tailored to your unique journey.
              Browse our collection of experienced astrologers and healers.
            </Typography>

            {/* Overall Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-6">
              <div className="text-center">
                <Typography variant="h4" className="text-white font-bold">
                  {averageRating.toFixed(1)}
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Average Rating
                </Typography>
              </div>
              <div className="text-center">
                <Typography variant="h4" className="text-white font-bold">
                  {totalReadings.toLocaleString()}
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Successful Readings
                </Typography>
              </div>
              <div className="text-center">
                <Typography variant="h4" className="text-white font-bold">
                  {LISTENERS.length}
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Expert Listeners
                </Typography>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <TextField
              fullWidth
              placeholder="Search by name or description..."
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "rgba(255, 255, 255, 0.5)" }} />
                  </InputAdornment>
                ),
                sx: {
                  color: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "12px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 255, 255, 0.1)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(139, 92, 246, 0.5)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#8b5cf6",
                  },
                  "&::placeholder": {
                    color: "rgba(255, 255, 255, 0.5)",
                  },
                },
              }}
            />
          </div>

          {/* Filter Section */}
          <ListenerFilter
            onFilterChange={setActiveFilters}
            activeFilters={activeFilters}
            onAvailabilityChange={setShowAvailableOnly}
            showAvailableOnly={showAvailableOnly}
          />

          {/* Results Stats */}
          <div className="flex justify-between items-center mb-6">
            <Typography variant="body1" className="text-gray-300">
              Showing listeners
            </Typography>
          </div>

          {/* Listeners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredListeners.length > 0 ? (
              filteredListeners.map((listener, index) => (
                <ListenerCard key={index} listener={listener} />
              ))
            ) : (
              <div className="col-span-3 text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <Typography variant="h6" className="text-white mb-2">
                  No listeners found
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Try adjusting your filters or search term to find your perfect
                  guide
                </Typography>
              </div>
            )}
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default ListenersPage;
