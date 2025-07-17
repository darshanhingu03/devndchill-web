"use client";
import Faqs from "@/components/faqs";
import Features from "@/components/feature";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import MobileConvenience from "@/components/mobile-convenience";
import Navbar from "@/components/navbar";
import OverlappingSection from "@/components/overlappingSection";
import Testimonials, { CustomerReviews } from "@/components/testimonials";
import VideoIntro from "@/components/video-intro";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <OverlappingSection /> */}
      <Features />
      <MobileConvenience />
      <CustomerReviews />
      <Faqs />
      <Footer />
      {/* <VideoIntro /> */}
    </>
  );
}
