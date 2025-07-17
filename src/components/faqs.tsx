"use client";

import React, { useState } from "react";
import {
  Typography,
  Box,
  Container,
  Collapse,
  IconButton,
} from "@mui/material";
import Link from "next/link";

const FAQS = [
  {
    title: "How do I get started?",
    desc: "Getting started is easy! Simply create an account, download our app, and follow the onboarding wizard. Our intuitive setup process will have you up and running in minutes.",
  },
  {
    title: "Is there a free trial available?",
    desc: "Yes, we offer a 30 days free trial so you can experience our mobile application with no commitment. No credit card required to get started - just sign up and explore.",
  },
  {
    title: "How can I upgrade my account?",
    desc: "To upgrade your account, log in and navigate to the Account Settings in your dashboard. Click on 'Subscription' and follow the prompts to select your preferred plan with enhanced features.",
  },
  {
    title: "Can I cancel my subscription anytime?",
    desc: "Absolutely, you can cancel your subscription at any time with no questions asked. Your subscription will remain active until the end of the current billing cycle, giving you time to export your data if needed.",
  },
  {
    title: "How can I upgrade my account to paid?",
    desc: "To upgrade to a paid plan, head to your dashboard's Subscription section and choose from our Standard, Professional, or Enterprise tiers. Each offers progressively more features to match your needs.",
  },
  {
    title: "What if I need help or have technical issues?",
    desc: "Our dedicated support team is here to assist you 24/7. Reach out via live chat, email at support@example.com, or schedule a video call with one of our technical specialists for hands-on assistance.",
  },
];

export function Faqs() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index: any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-20">
      {/* Background Elements - Matching Footer */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 opacity-10 z-0"></div>
      <div className="absolute top-40 left-20 w-80 h-80 rounded-full bg-purple-500 filter blur-3xl opacity-10 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-500 filter blur-3xl opacity-10 z-0"></div>

      <Container maxWidth="lg" className="relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col gap-2 items-center text-center mb-14">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
            <Typography variant="subtitle2" className="text-white font-medium">
              Support Center
            </Typography>
          </div>

          <Typography variant="h3" className="mb-4 font-bold text-white">
            Frequently Asked{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
              Questions
            </span>
          </Typography>

          <Typography
            variant="body1"
            className="mx-auto max-w-2xl text-gray-300 leading-relaxed"
          >
            Everything you need to know about our platform. Can't find the
            answer you're looking for?
            <a
              href="/contact"
              className="text-pink-400 hover:text-pink-300 ml-1 font-medium transition-colors"
            >
              Contact our support team
            </a>
            .
          </Typography>
        </div>

        {/* FAQs */}
        <div className="grid gap-6 max-w-3xl mx-auto">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/5 backdrop-saturate-150 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div
                className={`px-6 py-5 cursor-pointer flex justify-between items-center ${
                  expandedIndex === index ? "border-b border-white/10" : ""
                }`}
                onClick={() => handleToggle(index)}
              >
                <Typography variant="h6" className="font-medium text-white">
                  {faq.title}
                </Typography>
                <IconButton
                  className={`transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                  size="small"
                >
                  <i
                    className={`fa-solid fa-chevron-down ${
                      expandedIndex === index
                        ? "text-pink-400"
                        : "text-gray-400"
                    }`}
                  ></i>
                </IconButton>
              </div>

              <Collapse in={expandedIndex === index}>
                <Box className="px-6 py-5 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
                  <Typography
                    variant="body1"
                    className="text-gray-300 leading-relaxed"
                  >
                    {faq.desc}
                  </Typography>
                </Box>
              </Collapse>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 p-0.5 rounded-full">
            <Link
              href="/allFaqs"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <span className="text-white font-medium">View all FAQs</span>
              <i className="fa-solid fa-arrow-right text-pink-400"></i>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Faqs;
