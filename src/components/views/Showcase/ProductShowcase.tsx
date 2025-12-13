"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";



const content = [
    {
        title: "Immersive Audio Performance",
        description:
            "Experience rich, detailed sound with powerful bass and crystal-clear highs. Engineered for music lovers, gamers, and professionals who demand studio-level audio quality.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/foto_1.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="premium headphones sound quality"
                />
            </div>
        ),
    },
    {
        title: "Advanced Noise Cancellation",
        description:
            "Block out distractions with intelligent active noise cancellation. Stay focused in busy environments, whether you're commuting, working, or deep into your favorite playlist.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/foto_2_1.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="noise cancelling headphones"
                />
            </div>
        ),
    },
    {
        title: "Smart Controls & All-Day Battery",
        description:
            "Enjoy seamless touch controls, fast Bluetooth connectivity, and long-lasting battery life. Designed for modern tech users who expect performance without interruptions.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/foto_3_itog_1.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="wireless headphones battery life"
                />
            </div>
        ),
    },
];



export function StickyScrollRevealDemo() {
    return (
        <div className="w-full">
            <StickyScroll content={content} />
        </div>
    );
}
