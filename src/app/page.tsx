"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Link from "next/link";
import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-grid";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
  return (
    <div className="h-[10rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={"/ppic.jpg"}>
        <p className="font-bold text-xl">Muhammad Lazuardi</p>
        <p className="font-normal text-sm">Teknik Telekomunikasi - 23</p>
        <p className="font-normal text-sm">Telkom University</p>
      </DirectionAwareHover>
    </div>
  );
}


export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "my",
    },
    {
      text: "Portfolio!",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Thank you for visiting",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-2xl sm:text-base md:text-lg  ">
      🔥🔥🔥
      </p>
      <TypewriterEffectSmooth words={words} />
      
    </div>
  );
}


export default function Home() {  
  return (
    
    <main>
      <TypewriterEffectSmoothDemo />
      <DirectionAwareHoverDemo />

      <div className="py-44">
        <ExpandableCardDemo />
      </div>
      
    </main>
  );
 
}
