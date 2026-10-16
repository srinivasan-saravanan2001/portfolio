    import { HeadingDivider } from "../../../components";
    import { LazyMotion, domAnimation, useInView } from "framer-motion";
    import { useRef } from "react";
    import Image from "next/image";
    import { FaUniversity, FaGraduationCap } from "react-icons/fa";

    export function EducationSection() {
        const sectionRef = useRef(null);
        const isInView = useInView(sectionRef, { once: true });

        return (
            <LazyMotion features={domAnimation}>
                <section
                    id="education"
                    className="section"
                >
                          <HeadingDivider title="Education" />


                    <div
                        ref={sectionRef}
                        className="mt-8 sm:mt-12 flex flex-col lg:flex-row gap-6 lg:gap-10 items-center"
                    >
                      
                        {/* IMAGE */}
                        <div
                            style={{
                                transform: isInView ? "none" : "translateX(-50px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.4,0,0.2,1)",
                            }}
                            className="relative w-full lg:w-1/2 
                            aspect-[16/10] sm:aspect-[16/9] 
                            rounded-[1.25rem] overflow-hidden shadow-[0_18px_44px_-28px_rgba(24,51,91,.4)] bg-black/5 dark:bg-white/5 group"
                        >
                            <Image
                                src="/education.jpg"
                                alt="College Campus"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Optional soft overlay (won't hide image) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent pointer-events-none" />

                            {/* Image Caption */}
                            <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
                                <div className="flex items-center gap-2 text-lg font-semibold">
                                    <FaUniversity />
                                    Karpagam University
                                </div>
                                <p className="text-sm opacity-90">Coimbatore,Tamil Nadu, India</p>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div
                            style={{
                                transform: isInView ? "none" : "translateX(50px)",
                                opacity: isInView ? 1 : 0,
                                transition:
                                    "all 0.9s cubic-bezier(0.4,0,0.2,1) 0.15s",
                            }}
                            className="w-full lg:w-1/2 space-y-4 sm:space-y-6"
                        >
                            {/* Degree */}
                            <div className="surface-card education-card p-5 sm:p-6">
                                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                                    <FaGraduationCap />
                                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                                        B.Sc – Information Technology
                                    </h3>
                                </div>

                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    2018 – 2021
                                </p>
                            </div>

                            {/* School */}
                            <div className="surface-card education-card p-5 sm:p-6">
                                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                                    <FaGraduationCap />
                                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                                        MCA – Computer Application
                                    </h3>
                                </div>

                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    2021 – 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </LazyMotion>
        );
    }
