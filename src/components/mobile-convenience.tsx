"use client";

import React, { useState } from "react";
import { Typography, Container, Rating, Avatar, Button } from "@mui/material";
import Link from "next/link";

// Sample listeners with ratings, experience, age and descriptions
const LISTENERS = [
  {
    name: "Luna Stargazer",
    avatar: "/image/listener1.jpg",
    age: 34,
    experience: "8 years",
    specialties: ["Zodiac Readings", "Emotional Healing"],
    rating: 4.9,
    ratingCount: 836,
    description:
      "Intuitive empath specializing in zodiac compatibility and emotional healing through celestial guidance. My readings blend traditional astrology with modern therapeutic approaches.",
    available: true,
  },
  {
    name: "Orion Phoenix",
    avatar: "/image/listener2.jpg",
    age: 42,
    experience: "15 years",
    specialties: ["Tarot", "Career Guidance"],
    rating: 4.8,
    ratingCount: 1243,
    description:
      "Vedic astrologer focusing on career transitions and life path alignment. I help you navigate challenging decisions with cosmic wisdom and practical advice.",
    available: false,
  },
  {
    name: "Selena Moonsong",
    avatar: "/image/listener3.jpg",
    age: 29,
    experience: "6 years",
    specialties: ["Relationship Readings", "Moon Cycles"],
    rating: 5.0,
    ratingCount: 742,
    description:
      "Relationship astrologer and moon phase specialist. I provide compassionate guidance through emotional turbulence and help you harness lunar energy for personal growth.",
    available: true,
  },
  {
    name: "Atlas Skyward",
    avatar: "/image/listener4.jpg",
    age: 51,
    experience: "25 years",
    specialties: ["Natal Charts", "Past Life"],
    rating: 4.7,
    ratingCount: 1896,
    description:
      "Master astrologer with expertise in detailed natal chart analysis and karmic patterns. My readings reveal your soul's purpose and help heal past life wounds.",
    available: true,
  },
  {
    name: "Nova Celestine",
    avatar: "/image/listener5.jpg",
    age: 37,
    experience: "11 years",
    specialties: ["Horoscope Analysis", "Shadow Work"],
    rating: 4.9,
    ratingCount: 1053,
    description:
      "Modern psychological astrologer specializing in shadow work and personal transformation. I help you understand your deeper patterns through astrological insights.",
    available: true,
  },
  {
    name: "Solaris Brightstar",
    avatar: "/image/listener6.jpg",
    age: 45,
    experience: "18 years",
    specialties: ["Solar Returns", "Life Transitions"],
    rating: 4.8,
    ratingCount: 1572,
    description:
      "Expert in solar return charts and navigating major life transitions. I provide clarity during times of change and help you align with your highest potential.",
    available: false,
  },
];

// Single listener card component
const ListenerCard = ({ listener }) => {
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
          {listener.specialties.map((specialty) => (
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

export function Listeners() {
  // Calculate average rating
  const averageRating =
    LISTENERS.reduce((acc, listener) => acc + listener.rating, 0) /
    LISTENERS.length;

  const totalReadings = LISTENERS.reduce(
    (acc, listener) => acc + listener.ratingCount,
    0
  );

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Elements - Mystical theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 opacity-10 z-0"></div>
      <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-purple-500 filter blur-3xl opacity-10 z-0"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-indigo-500 filter blur-3xl opacity-10 z-0"></div>

      <Container maxWidth="lg" className="relative z-10">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
            <Typography variant="subtitle2" className="text-white font-medium">
              Listeners
            </Typography>
          </div>

          <Typography variant="h3" className="mb-4 font-bold text-white">
            Our Cosmic{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Guides
            </span>{" "}
            & Healers
          </Typography>

          <Typography
            variant="body1"
            className="mx-auto max-w-2xl text-gray-300 leading-relaxed"
          >
            Connect with our experienced astrologers and emotional support
            specialists who are here to guide you through life's journey with
            celestial wisdom.
          </Typography>

          {/* Overall Stats */}
          <div className="flex gap-8 mt-6">
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

        {/* Listeners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LISTENERS.map((listener, index) => (
            <ListenerCard key={index} listener={listener} />
          ))}
        </div>

        {/* Bottom element */}
        <div className="flex justify-center mt-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-600 p-0.5 rounded-full">
            <Link
              href="/listeners"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <i className="fa-solid fa-stars text-blue-400"></i>
              <span className="text-white font-medium">View All Listeners</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Listeners;
