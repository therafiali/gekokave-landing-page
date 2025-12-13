"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#ffffff",
    "#ffffff",
    "#ffffff",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div

      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto  w-full px-4  scrollbar-hide"
      ref={ref}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-full w-full flex-1 overflow-hidden rounded-md bg-white lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
      <div className="div relative flex flex-1 items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 text-black">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-6xl font-extrabold tracking-tight text-foreground"
              >
                {item.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-6 max-w-md font-bold text-lg text-muted-foreground"
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

const content = [
  {
    title: "Studio-Grade Sound Quality",
    description:
      "Experience crystal-clear audio with deep bass and balanced mids. Our headphones are tuned for audiophiles, gamers, and creators who demand precision and immersive sound.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-cyan-500 to-emerald-500 text-2xl font-bold text-white">
        Premium Audio Experience
      </div>
    ),
  },
  {
    title: "Active Noise Cancellation",
    description:
      "Block out distractions with advanced ANC technology. Whether you're traveling, gaming, or working, stay focused with pure, uninterrupted sound.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-pink-500 to-indigo-500 text-2xl font-bold text-white">
        Noise Cancellation
      </div>
    ),
  },
  {
    title: "Smart Tech & Long Battery Life",
    description:
      "Enjoy touch controls, low-latency Bluetooth, and all-day battery life. Designed for modern tech lovers who want performance without compromise.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-yellow-500 text-2xl font-bold text-white">
        Smart Features
      </div>
    ),
  },
];


export default function StickyScrollDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}