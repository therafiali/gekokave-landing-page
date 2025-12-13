"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

/* ---------------------------------- Utils --------------------------------- */

const cn = (...classes: (string | undefined | false)[]) =>
  classes.filter(Boolean).join(" ");

/* ---------------------------------- Types --------------------------------- */

interface StickyScrollItem {
  title: string;
  description: string;
  content?: React.ReactNode;
}

interface StickyScrollProps {
  content: StickyScrollItem[];
  contentClassName?: string;
}

/* ------------------------------ Component ---------------------------------- */

export const StickyScroll: React.FC<StickyScrollProps> = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);

  // *** NOTE: The original Framer Motion scroll logic based on vertical scrollYProgress (scrollYProgress)
  //           will primarily drive the desktop experience.
  //           For mobile horizontal scrolling, we rely on the manual scroll position to update activeCard.

  // Use a second ref for the horizontal wrapper on mobile
  const mobileRef = useRef<HTMLDivElement | null>(null);

  // ------------------------- SCROLL LOGIC (Unchanged for Desktop) -------------------------
  const { scrollYProgress } = useScroll({
    container: ref, // Reference the main vertical scroll container (Desktop)
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // This logic only runs when the component is vertically scrolling (i.e., on desktop)
    const cardsBreakpoints = content.map((_, index) => index / cardLength);

    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );

    // Only update if we are not in the mobile horizontal mode
    if (window.innerWidth >= 1024) { // 1024px is the Tailwind 'lg' breakpoint
      setActiveCard(closestBreakpointIndex);
    }
  });

  // ------------------------- MOBILE HORIZONTAL SCROLL LOGIC -------------------------
  // This useEffect detects the active card based on the horizontal scroll position
  useEffect(() => {
    const handleScroll = () => {
      const container = mobileRef.current;
      if (container && window.innerWidth < 1024) {
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.offsetWidth;
        // Calculate which card is currently centered/visible
        const newActiveCard = Math.round(scrollLeft / cardWidth);
        setActiveCard(newActiveCard);
      }
    };

    const container = mobileRef.current;
    if (container && window.innerWidth < 1024) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [cardLength]);
  // ----------------------------------------------------------------------------------


  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState<string>(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(
      linearGradients[activeCard % linearGradients.length]
    );
  }, [activeCard]);

  // The main container for the entire component
  return (
    // **LAYOUT CHANGE 1:** On mobile, we remove the fixed height (h-[30rem]) and allow the content to flow vertically (flex-col).
    // The overflow is hidden on mobile, as the carousel handles the scrolling. On desktop, it's vertical overflow.
    <motion.div
      ref={ref}
      className="relative flex flex-col lg:flex-row h-full lg:h-[30rem] justify-start lg:justify-center lg:space-x-10 overflow-hidden lg:overflow-y-auto w-full px-0 lg:px-4 scrollbar-hide"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {/* ------------------------- 1. DESKTOP STICKY PANEL ------------------------- */}
      {/* This panel is ONLY visible and sticky on desktop (lg:block) */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:sticky top-10 lg:h-full w-full flex-1 overflow-hidden rounded-md lg:block",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>

      {/* ------------------------- 2. SCROLLABLE CONTENT WRAPPER ------------------------- */}
      {/* On desktop, this is the vertically scrollable text container.
          On mobile, this contains the full horizontal carousel structure. 
      */}
      <div className="relative flex flex-1 items-start w-full">
        {/*
          MOBILE CAROUSEL WRAPPER:
          - Hidden on desktop (lg:hidden)
          - Flex-row for horizontal layout
          - overflow-x-scroll and snap-x-mandatory for the carousel effect
          - w-full and h-full to take up the necessary mobile screen space
        */}
        <div 
            ref={mobileRef}
            className="flex flex-row  overflow-x-scroll snap-x snap-mandatory lg:hidden w-full h-full scrollbar-hide"
        >
          {content.map((item, index) => (
            // Each card takes the full screen width and snaps into place
            <div 
              key={`${item.title}-${index}`} 
              className="flex-shrink-0 w-full snap-center p-4 scrollbar-hide"
              style={{ minWidth: "100vw" }} // Ensure it snaps exactly to screen width
            >
              {/* MOBILE CONTENT PANEL (Visible per-card on mobile) */}
              <div
                style={{ background: linearGradients[index % linearGradients.length] }}
                className={cn(
                  "h-60 w-full rounded-md scrollbar-hide",
                  contentClassName
                )}
              >
                {item.content ?? null}
              </div>

              {/* MOBILE TEXT */}
              <div className="mt-8 text-black">
                <motion.h2
                  // No motion here as the parent is scrolling, not the individual text opacity
                  className="text-4xl font-extrabold tracking-tight" 
                >
                  {item.title}
                </motion.h2>

                <motion.p
                  className="mt-4 max-w-md font-bold text-base"
                >
                  {item.description}
                </motion.p>
              </div>
            </div>
          ))}
        </div>

        {/*
          DESKTOP STICKY SCROLL TEXT WRAPPER:
          - Hidden on mobile (hidden)
          - Visible on desktop (lg:block)
        */}
        <div className="hidden lg:block max-w-2xl w-full">
          {content.map((item, index) => (
            <div key={`${item.title}-${index}`} className="my-20 text-black">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-6xl font-extrabold tracking-tight"
              >
                {item.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-6 max-w-md font-bold text-lg"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
    </motion.div>
  );
};