"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { GradualSpacing } from "@/components/ui/gradual-spacing";



const content = [
    {
        title: <GradualSpacing text="Immersive Audio Performance" className="text-4xl lg:text-6xl font-extrabold tracking-tight max-w-xs lg:max-w-none" />,
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
        title: <GradualSpacing text="Advanced Noise Cancellation" className="text-4xl lg:text-6xl font-extrabold tracking-tight max-w-xs lg:max-w-none" />,
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
        title: <GradualSpacing text="Smart Controls & All-Day Battery" className="text-4xl lg:text-6xl font-extrabold tracking-tight max-w-xs lg:max-w-none" />,
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
