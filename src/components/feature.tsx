"use client";

import React from "react";
import {
  SparklesIcon,
  HeartIcon,
  MoonIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { Typography, Container } from "@mui/material";

// Feature Card Component
const FeatureCard = ({
  icon: Icon,
  title,
  children,
}: {
  icon: any;
  title: string;
  children: string;
}) => {
  return (
    <div className="relative group">
      {/* Subtle gradient border with softer colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-400 rounded-2xl opacity-30 blur-sm group-hover:opacity-40 transition-opacity duration-300"></div>

      {/* Card content */}
      <div className="relative backdrop-blur-sm bg-white/5 backdrop-saturate-150 border border-white/10 rounded-2xl p-6 h-full flex flex-col">
        {/* Feature Icon */}
        <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-400 inline-flex w-12 h-12 items-center justify-center">
          <Icon className="h-6 w-6 text-white" />
        </div>

        {/* Feature Details */}
        <Typography variant="h5" className="font-semibold text-white mb-2">
          {title}
        </Typography>
        <Typography variant="body1" className="text-gray-300">
          {children}
        </Typography>
      </div>
    </div>
  );
};

// Features Data
const FEATURES = [
  {
    icon: StarIcon,
    title: "Personalized Horoscopes",
    children:
      "Receive daily, weekly, and monthly horoscopes tailored to your birth chart, helping you navigate life's challenges with cosmic wisdom.",
  },
  {
    icon: HeartIcon,
    title: "Emotional Support",
    children:
      "Connect with compassionate astrology experts who provide guidance during difficult times and help you understand your emotions through celestial patterns.",
  },
  {
    icon: MoonIcon,
    title: "Lunar Cycle Tracking",
    children:
      "Follow the moon's phases and understand how they affect your mood, energy levels, and emotional wellbeing with personalized insights.",
  },
  {
    icon: SparklesIcon,
    title: "Cosmic Compatibility",
    children:
      "Explore relationship dynamics through astrological compatibility readings that help you build stronger connections with friends, family, and partners.",
  },
];

export function Features() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Elements - Mystical astrology theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 opacity-10 z-0"></div>
      <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-purple-500 filter blur-3xl opacity-10 z-0"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-indigo-500 filter blur-3xl opacity-10 z-0"></div>

      <Container maxWidth="lg" className="relative z-10">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
            <Typography variant="subtitle2" className="text-white font-medium">
              Features
            </Typography>
          </div>

          <Typography variant="h3" className="mb-4 font-bold text-white">
            Cosmic{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Guidance
            </span>{" "}
            & Support
          </Typography>

          <Typography
            variant="body1"
            className="mx-auto max-w-2xl text-gray-300 leading-relaxed"
          >
            Navigate life's journey with celestial wisdom and emotional support
            at your fingertips. Whether you're seeking clarity, comfort, or
            connection, our app brings the cosmos to your daily life.
          </Typography>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              children={feature.children}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
