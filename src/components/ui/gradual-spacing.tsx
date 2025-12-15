'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import * as React from 'react';
import { cn } from "@/lib/utils";

export function GradualSpacing({ text = 'Gradual Spacing', className }: { text: string, className?: string }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div ref={ref} className={cn("flex flex-wrap justify-center", className)}>
            <AnimatePresence>
                {text.split(' ').map((word, i) => {
                    // Calculate the starting index for this word to maintain sequential delay
                    // Count previous characters + spaces (i is the number of spaces before this word)
                    const startDelay = text.split(' ').slice(0, i).reduce((acc, w) => acc + w.length, 0) + i;

                    return (
                        <div key={i} className="flex whitespace-nowrap">
                            {word.split('').map((char, j) => (
                                <motion.p
                                    key={j}
                                    initial={{ opacity: 0, x: -18 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    exit="hidden"
                                    transition={{ duration: 0.5, delay: (startDelay + j) * 0.1 }}
                                    className="text-center"
                                >
                                    {char}
                                </motion.p>
                            ))}
                            {/* Add a space after each word except the last one, or just let gap handle it? 
                                A literal space character is safer for copying/accessibility and natural spacing. */}
                            {i < text.split(' ').length - 1 && <span>&nbsp;</span>}
                        </div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}