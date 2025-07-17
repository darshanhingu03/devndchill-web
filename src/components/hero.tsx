"use client";

import Image from "next/image";
import { Button, Typography, Container } from "@mui/material";

function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Elements - Matching Previous Components */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 opacity-10 z-0"></div>
      <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-purple-500 filter blur-3xl opacity-10 z-0"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-indigo-500 filter blur-3xl opacity-10 z-0"></div>

      {/* Hero Section */}
      <header className="grid !min-h-[49rem] px-8 relative z-10">
        <Container
          maxWidth="lg"
          className="mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2"
        >
          {/* Left Side (Text & Buttons) */}
          <div className="col-span-1 flex flex-col gap-6">
            <Typography variant="h2" className="mb-4 text-white font-bold">
              Get{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
                Emotional Support
              </span>{" "}
              Now
            </Typography>
            <Typography
              variant="body1"
              className="mb-7 text-gray-300 md:pr-16 xl:pr-28"
            >
              Get Emotional Support on anonymous{" "}
              <span className="font-semibold text-indigo-300">Chat</span>,{" "}
              <span className="font-semibold text-indigo-300">Call</span> or{" "}
              <span className="font-semibold text-indigo-300">Video Call</span>.
              Connect with support whenever you need it, completely private and
              secure.
            </Typography>
            <Typography variant="h6" className="mb-4 text-white">
              Get the app
            </Typography>
            <div className="flex flex-col gap-4 md:mb-2 md:w-10/12 md:flex-row">
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

          {/* Right Side (Image) */}
          <div className="relative">
            {/* Subtle gradient border/glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-500 rounded-3xl opacity-50 blur-sm"></div>

            <div className="relative">
              <Image
                width={470}
                height={576}
                src="/image/iphones.png"
                alt="Mobile app preview"
                priority={true}
                className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
              />
            </div>
          </div>
        </Container>
      </header>

      {/* Info Section */}
      <Container maxWidth="lg" className="relative z-10">
        <div className="mx-8 lg:mx-16 -mt-24 rounded-xl backdrop-blur-sm bg-white/5 backdrop-saturate-150 border border-white/10 p-5 md:p-14 shadow-lg">
          <div className="relative">
            <Typography variant="h4" className="text-white mb-3 font-semibold">
              Feeling App
            </Typography>
            <Typography variant="body1" className="text-gray-300 lg:w-7/12">
              Our app provides a safe space for emotional support through
              anonymous channels. Whether you prefer to chat via text, have a
              voice call, or connect through video, our platform ensures your
              privacy while giving you access to the support you need, whenever
              you need it.
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
