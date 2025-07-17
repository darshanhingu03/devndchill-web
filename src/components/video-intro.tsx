"use client";

import React from "react";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@mui/material";

export function VideoIntro() {
  return (
    <div className="p-8">
      <div className="container mx-auto mt-20 max-w-6xl px-5 relative overflow-hidden rounded-xl">
        {/* Overlay */}
        <div className="absolute inset-0 z-10 w-full h-full bg-black/25 rounded-xl" />

        {/* Background Image */}
        <Image
          width={768}
          height={400}
          src="/image/Background.png"
          className="w-full h-auto object-cover rounded-xl"
          alt="Video intro background"
          priority={true}
        />

        {/* Play Button */}
        <button className="absolute left-2/4 top-2/4 z-20 flex -translate-x-2/4 -translate-y-2/4">
          <IconButton className="rounded-full shadow-lg">
            <PlayIcon className="h-6 w-6 text-gray-900" />
          </IconButton>
        </button>
      </div>
    </div>
  );
}

export default VideoIntro;
