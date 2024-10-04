"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface TechStackItem {
  svg: string;  // URL or path to the SVG
  name: string; // Name of the technology
}

interface InfiniteMovingSVGsProps {
  techStack: TechStackItem[];           // Array of tech stack items
  direction?: "left" | "right";         // Scroll direction
  speed?: "fast" | "normal" | "slow";   // Scroll speed
  pauseOnHover?: boolean;                // Pause scrolling when hovered
  className?: string;                    // Additional class names for styling
}

export const InfiniteMovingSVGs: React.FC<InfiniteMovingSVGsProps> = ({
  techStack,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
  
      // Repeat the items twice
      for (let i = 0; i < 2; i++) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerRef.current?.appendChild(duplicatedItem); // Use optional chaining
        });
      }
  
      setDirection();
      setSpeed();
      setStart(true);
    }
  };
  

  const setDirection = () => {
    if (containerRef.current) {
      const directionValue = direction === "left" ? "forwards" : "reverse";
      containerRef.current.style.setProperty("--animation-direction", directionValue);
    }
  };

  const setSpeed = () => {
    if (containerRef.current) {
      let duration: string;
      switch (speed) {
        case "fast":
          duration = "20s";
          break;
        case "normal":
          duration = "40s";
          break;
        case "slow":
        default:
          duration = "80s";
          break;
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap", // Increased gap here
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {techStack.map((tech) => (
          <li className="w-[100px] max-w-full relative flex-shrink-0 text-white" key={tech.name}>
            <img
              src={tech.svg}
              alt={tech.name}
              className="w-full h-auto"
              title={tech.name}
            />
            <p className="text-white text-center mt-2">{tech.name}</p> {/* Name displayed below the icon */}
          </li>
        ))}
      </ul>
    </div>
  );
};
