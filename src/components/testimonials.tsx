"use client";

import React from "react";
import { Typography, Box, Container, Avatar, Rating } from "@mui/material";

const TESTIMONIALS = [
  {
    feedback:
      "AstroTalk has completely transformed my approach to life's challenges. Luna's celestial guidance helped me navigate a difficult career transition with confidence. The cosmic insights were eerily accurate and the emotional support was genuine and healing.",
    client: "Samantha Chen",
    title: "Weekly Consultation • 6 months",
    img: "/image/avatar1.jpg",
    rating: 5,
  },
  {
    feedback:
      "I was skeptical at first, but Atlas's natal chart reading was mind-blowingly accurate. He identified childhood patterns I've never shared with anyone. The emotional healing techniques he suggested have helped me process years of buried grief.",
    client: "Michael Rodriguez",
    title: "Natal Chart Reading • 3 months",
    img: "/image/avatar2.jpg",
    rating: 5,
  },
  {
    feedback:
      "Nova helped me understand why my relationships kept following the same painful patterns. Her compassionate approach and astrological insights gave me clarity during my darkest moments. Worth every penny for the emotional peace I've found.",
    client: "Priya Sharma",
    title: "Relationship Readings • 4 months",
    img: "/image/avatar3.jpg",
    rating: 4.5,
  },
  {
    feedback:
      "During my anxiety spiral, I connected with Selena at 2 AM. She was immediately available and her lunar cycle insights helped me understand the emotional waves I was experiencing. I've had three sessions since and sleep better than I have in years.",
    client: "James Wilson",
    title: "Crisis Support • 2 months",
    img: "/image/avatar4.jpg",
    rating: 5,
  },
  {
    feedback:
      "Orion's career guidance through astrology has been spot on. I was stuck in a toxic job and his reading gave me the confidence to make a change. Three months later, I'm in a position that aligns perfectly with my birth chart strengths.",
    client: "Aisha Johnson",
    title: "Career Path Reading • 5 months",
    img: "/image/avatar5.jpg",
    rating: 4.5,
  },
  {
    feedback:
      "The monthly subscription is incredible value. I've worked with different guides for various aspects of my life. Their consistent emotional support during my divorce was life-saving. The app interface is beautiful and intuitive too.",
    client: "Thomas Lee",
    title: "Premium Member • 8 months",
    img: "/image/avatar6.jpg",
    rating: 5,
  },
];

// TestimonialCard Component
const TestimonialCard = ({
  img,
  feedback,
  client,
  title,
  rating,
}: {
  img: string;
  feedback: string;
  client: string;
  title: string;
  rating: number;
}) => {
  return (
    <div className="relative group">
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Card content */}
      <div className="relative backdrop-blur-sm bg-white/5 backdrop-saturate-150 border border-white/10 rounded-2xl p-6 h-full flex flex-col">
        {/* Quote icon */}
        <div className="absolute top-6 right-6 opacity-20">
          <i className="fa-solid fa-quote-right text-4xl text-blue-400"></i>
        </div>

        {/* Rating */}
        <div className="mb-4">
          <Rating
            value={rating}
            precision={0.5}
            readOnly
            sx={{
              color: "#8b5cf6", // purple-500
              "& .MuiRating-iconEmpty": {
                color: "rgba(255, 255, 255, 0.3)",
              },
            }}
          />
        </div>

        {/* Testimonial content */}
        <Typography
          variant="body1"
          className="text-gray-300 mb-6 relative z-10"
        >
          &quot;{feedback}&quot;
        </Typography>

        {/* Client info */}
        <div className="mt-4 flex items-center">
          <Avatar
            src={img}
            alt={client}
            sx={{ width: 56, height: 56 }}
            className="border-2 border-purple-500"
          />
          <div className="ml-4">
            <Typography variant="h6" className="font-medium text-white">
              {client}
            </Typography>
            <Typography
              variant="caption"
              className="text-gray-400 tracking-wider text-xs"
            >
              {title}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export function CustomerReviews() {
  // Calculate average rating
  const averageRating =
    TESTIMONIALS.reduce((acc, testimonial) => acc + testimonial.rating, 0) /
    TESTIMONIALS.length;

  // Rating distribution
  const ratings: any = {
    5: TESTIMONIALS.filter((t) => t.rating === 5).length,
    4: TESTIMONIALS.filter((t) => t.rating >= 4 && t.rating < 5).length,
    3: TESTIMONIALS.filter((t) => t.rating >= 3 && t.rating < 4).length,
    2: TESTIMONIALS.filter((t) => t.rating >= 2 && t.rating < 3).length,
    1: TESTIMONIALS.filter((t) => t.rating >= 1 && t.rating < 2).length,
  };

  const maxCount = Math.max(...(Object.values(ratings) as any));

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Elements - Matching cosmic theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 opacity-10 z-0"></div>
      <div className="absolute top-40 left-20 w-80 h-80 rounded-full bg-purple-500 filter blur-3xl opacity-10 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-500 filter blur-3xl opacity-10 z-0"></div>

      <Container maxWidth="lg" className="relative z-10">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
            <Typography variant="subtitle2" className="text-white font-medium">
              Reviews
            </Typography>
          </div>

          <Typography variant="h3" className="mb-4 font-bold text-white">
            Cosmic{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Connections
            </span>{" "}
            & Healing
          </Typography>

          <Typography
            variant="body1"
            className="mx-auto max-w-2xl text-gray-300 leading-relaxed"
          >
            Read what our community says about their transformative experiences
            with our astrology experts and emotional support guides. Real
            stories from real people on their journey to healing and
            self-discovery.
          </Typography>
        </div>

        {/* Rating Summary Card */}
        <div className="backdrop-blur-sm bg-white/5 backdrop-saturate-150 border border-white/10 rounded-2xl p-6 mb-12 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <Typography variant="h2" className="font-bold text-white">
                {averageRating.toFixed(1)}
                <span className="text-2xl text-gray-400 ml-1">/5.0</span>
              </Typography>
              <div className="my-2">
                <Rating
                  value={averageRating}
                  precision={0.1}
                  readOnly
                  sx={{
                    fontSize: "1.5rem",
                    color: "#8b5cf6",
                    "& .MuiRating-iconEmpty": {
                      color: "rgba(255, 255, 255, 0.3)",
                    },
                  }}
                />
              </div>
              <Typography variant="body2" className="text-gray-300">
                Based on {728} verified reviews
              </Typography>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex gap-3 mb-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex flex-col items-center gap-1">
                    <div
                      className={`w-4 rounded-full ${
                        star === 5
                          ? "bg-green-500"
                          : star === 4
                          ? "bg-green-400"
                          : star === 3
                          ? "bg-yellow-500"
                          : star === 2
                          ? "bg-orange-500"
                          : "bg-red-500"
                      }`}
                      style={{
                        height: `${(ratings[star] / maxCount) * 80}px`,
                        minHeight: "4px",
                      }}
                    ></div>
                    <Typography variant="caption" className="text-gray-400">
                      {star}
                    </Typography>
                  </div>
                ))}
              </div>
              <Typography variant="body2" className="text-gray-400 mt-1">
                Rating distribution
              </Typography>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Bottom element */}
        {/* <div className="flex justify-center mt-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-600 p-0.5 rounded-full">
            <a
              href="/all-reviews"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <span className="text-white font-medium">
                Read more cosmic stories
              </span>
              <i className="fa-solid fa-stars text-blue-400"></i>
            </a>
          </div>
        </div> */}
      </Container>
    </section>
  );
}

export default CustomerReviews;
