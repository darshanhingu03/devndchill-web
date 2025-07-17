"use client";

import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  Box,
  TextField,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LockIcon from "@mui/icons-material/Lock";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const COMPANY_LINKS = [
  { name: "Home", href: "/" },
  { name: "Listeners", href: "/listeners" },
  { name: "FAQs", href: "/allFaqs" },
  { name: "T&C", href: "/policies" },
];

const LEGAL_LINKS = [{ name: "Privacy & Terms", href: "/policies" }];

const SOCIAL_ICONS = [
  {
    icon: (
      <TwitterIcon className="text-white group-hover:scale-110 transition-transform" />
    ),
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: (
      <InstagramIcon className="text-white group-hover:scale-110 transition-transform" />
    ),
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: (
      <FacebookIcon className="text-white group-hover:scale-110 transition-transform" />
    ),
    href: "https://facebook.com",
    label: "Facebook",
  },
  // {
  //   icon: (
  //     <MusicNoteIcon className="text-white group-hover:scale-110 transition-transform" />
  //   ), // You can swap with a custom TikTok icon
  //   href: "https://tiktok.com",
  //   label: "TikTok",
  // },
];

const FEATURE_HIGHLIGHTS = [
  {
    icon: <VerifiedUserIcon className="text-indigo-400" />,
    text: "Verified Astrologers",
  },
  {
    icon: <LockIcon className="text-indigo-400" />,
    text: "Private Consultations",
  },
  {
    icon: <AccessTimeIcon className="text-indigo-400" />,
    text: "24/7 Support",
  },
  {
    icon: <FavoriteIcon className="text-indigo-400" />,
    text: "Emotional Guidance",
  },
];
export function Footer() {
  const [email, setEmail] = useState("");
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background with Blur Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 opacity-10 z-0"></div>

      {/* Glass-like container */}
      <div className="relative backdrop-blur-sm bg-white/5 backdrop-saturate-150 border-t border-white/10 pt-20 pb-10 z-10">
        <Container maxWidth="lg">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              {/* Logo with Animated Accent */}
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
              </div>

              <Typography
                variant="h5"
                className="text-white font-bold tracking-tight"
              >
                {" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
                  Miracle Me
                </span>{" "}
              </Typography>

              <Typography className="text-gray-300">
                Your cosmic companion for astrological guidance and emotional
                support whenever you need it.
              </Typography>

              {/* Social Icons - Floating Style */}
              <div className="flex space-x-4">
                {SOCIAL_ICONS.map((icon) => (
                  <Tooltip
                    key={icon.label}
                    title={icon.label}
                    arrow
                    placement="top"
                  >
                    <a
                      href={icon.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                    >
                      {icon.icon}
                    </a>
                  </Tooltip>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <Typography
                variant="subtitle1"
                className="text-white font-medium mb-2 pb-2 border-b border-white/10"
              >
                Navigate
              </Typography>
              <ul className="space-y-3">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* App Download Section */}
            <div className="space-y-6">
              <Typography
                variant="subtitle1"
                className="text-white font-medium mb-2 pb-2 border-b border-white/10"
              >
                Get The App
              </Typography>

              <Typography className="text-gray-300 mb-4">
                Download our app for personalized daily horoscopes and instant
                access to emotional support.
              </Typography>

              <div className="flex flex-col gap-4 md:mb-2 md:w-10/12">
                <a
                  href="#"
                  className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-blue-600 p-0.5 rounded-full shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                >
                  <div className="px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 w-full flex justify-center items-center gap-3">
                    <Image
                      width={24}
                      height={24}
                      src="/logos/logo-apple.png"
                      alt="Apple Store logo"
                    />
                    <span className="text-white font-medium">App Store</span>
                  </div>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 p-0.5 rounded-full shadow-lg hover:shadow-blue-600/20 transition-all duration-300"
                >
                  <div className="px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 w-full flex justify-center items-center gap-3">
                    <Image
                      width={24}
                      height={24}
                      src="/logos/logo-google.png"
                      alt="Google Play Store logo"
                    />
                    <span className="text-white font-medium">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Features highlights */}
          <div className="mt-16 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
            {FEATURE_HIGHLIGHTS.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <Typography className="text-white font-medium">
                  {feature.text}
                </Typography>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-white/10">
            <Typography className="text-gray-400 text-sm">
              &copy; {CURRENT_YEAR}{" "}
              <span className="text-white">Miracle Me</span>. All rights
              reserved.
            </Typography>

            <div className="flex gap-6">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Background decoration elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-purple-500 filter blur-3xl opacity-10 z-0"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-indigo-500 filter blur-3xl opacity-10 z-0"></div>
    </footer>
  );
}

export default Footer;
