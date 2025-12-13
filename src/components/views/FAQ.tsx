"use client"
import { useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { faqs } from "@/data/faq";


const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section section-specs section--u-i4jjicln1 mx-auto w-full ">
            <div className="container container1   mx-auto w-full">
                <div className="section-specs__title-wrapper">
                    <h1 className="scroll-m-20 text-center text-7xl mb-8 font-extrabold tracking-tight text-balance">
                        FAQ
                    </h1>
                </div>

                <div className="  px-8">
                    {faqs.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={item.title}
                                className="border-b border-neutral-200 last:border-b-0"
                            >
                                <button
                                    className="section-specs__accordion1-info w-full py-6 text-left"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-panel-${index}`}
                                    id={`faq-trigger-${index}`}
                                >
                                    <div className="flex items-center justify-between gap-8 w-full ">
                                        <span className={`text-4xl font-bold hover:text-orange-500 duration-200 transition-colors ${isOpen ? "text-orange-500" : "text-neutral-800"
                                            }`}>
                                            {`${String(index + 1).padStart(2, "0")}. ${item.title}`}
                                        </span>
                                        <ArrowDownRight
                                            className={`section-specs__accordion1-arrow text-orange-500 ${isOpen ? "rotate-90" : "-rotate-90"
                                                }`}
                                            aria-hidden="true"
                                        />
                                    </div>
                                </button>
                                {isOpen && (
                                    <div
                                        id={`faq-panel-${index}`}
                                        role="region"
                                        aria-labelledby={`faq-trigger-${index}`}
                                        className="pb-6 pr-10 text-lg leading-relaxed text-neutral-500"
                                    >
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;