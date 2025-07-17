"use client";

import React from "react";
import { Typography, Container } from "@mui/material";

function OverlappingSection() {
  return (
    <div className="relative z-20 -mt-28 -mb-28">
      <Container maxWidth="lg">
        <div className="mx-8 lg:mx-16 rounded-xl backdrop-blur-sm bg-white/5 backdrop-saturate-150 border border-white/10 p-5 md:p-14 shadow-lg">
          <div className="relative">
            <Typography variant="h4" className="text-white mb-3 font-semibold">
              Learning App
            </Typography>
            <Typography variant="body1" className="text-gray-300 lg:w-7/12">
              Download our app to dive into a vast library of courses,
              tutorials, and study materials on a wide range of subjects—from
              programming and language learning to personal development and
              beyond. Our intuitive interface makes learning accessible and
              engaging.
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OverlappingSection;
