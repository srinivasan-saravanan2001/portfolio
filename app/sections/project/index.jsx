"use client";

import { HeadingDivider } from "../../../components";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaCode,
} from "react-icons/fa";

export function ProjectSection() {
    const projectRef = useRef(null);
    const isProjectInView = useInView(projectRef, { once: true });

    const projects = [
        {
            id: 1,
            title: "Work Management System",
            description:
                "A mobile app for managers to assign tasks to workers by branch. Workers see their tasks, update progress, and managers get real-time status updates.",
            technologies: [
                "Next.js",
                "Redux Toolkit",
                "Python FastAPI",
                "MongoDB",
                "Capacitor",
            ],
            image: "/Task Management Dashboard Overview.png",
            githubUrl:
                "https://github.com/srinivasan-saravanan2001/task-management-system",
            liveUrl: "#",
            date: "2024",
            features: [
                "Admin, Manager, and Worker logins",
                "Assign tasks to specific branches",
                "Workers update task progress",
                "Real-time notifications",
                "Track task deadlines",
                "View completion reports",
            ],
        },
     
{
    id: 2,
    title: "Sales Order Management System",
    description:
        "A multi-branch sales order management system for managing customer orders, tracking order status, monitoring branch-wise sales, and generating business reports through a centralized dashboard.",
    technologies: [
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "Python FastAPI",
        "MongoDB",
        "REST APIs",
        "Material UI",
    ],
    image: "Sales Order Management Dashboard.png",
    githubUrl: "#",
    liveUrl: "#",
    date: "2025",
    features: [
        "Multi-branch sales order management",
        "Order creation and status tracking",
        "Customer and product data integration",
        "Branch-wise sales monitoring dashboard",
        "Order filtering, searching, and pagination",
        "Sales reports and transaction history",
    ],
},

    ];

    return (
        <LazyMotion features={domAnimation}>
            <section
                id="project"
                className="section"
            >
                <HeadingDivider title="personal Projects" />

                <div ref={projectRef} className="mt-8 sm:mt-12">
                    {/* Desktop Two-Column Grid */}
                    <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                isInView={isProjectInView}
                                isMobile={false}
                            />
                        ))}
                    </div>

                    {/* Mobile Carousel */}
                    <div className="md:hidden">
                        <MobileCarousel
                            projects={projects}
                            isInView={isProjectInView}
                        />
                    </div>
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/srinivasan-saravanan2001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-primary w-full sm:w-auto"
                    >
                        <FaGithub className="w-5 h-5" />
                        View All Projects on GitHub
                    </a>
                </div>
            </section>
        </LazyMotion>
    );
}

/* ================================================================
   MOBILE CAROUSEL
================================================================ */
function MobileCarousel({ projects, isInView }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const minSwipeDistance = 50;

    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) =>
        setTouchEnd(e.targetTouches[0].clientX);

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const dist = touchStart - touchEnd;

        if (dist > minSwipeDistance) {
            setCurrentIndex((p) =>
                p === projects.length - 1 ? 0 : p + 1
            );
        }

        if (dist < -minSwipeDistance) {
            setCurrentIndex((p) =>
                p === 0 ? projects.length - 1 : p - 1
            );
        }
    };

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentIndex((p) =>
                p === projects.length - 1 ? 0 : p + 1
            );
        }, 6000);

        return () => clearInterval(id);
    }, [currentIndex]);

    return (
        <div className="relative">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="w-full flex-shrink-0 px-2 sm:px-4"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <ProjectCard
                                project={project}
                                index={index}
                                isInView={isInView}
                                isMobile={true}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            i === currentIndex
                                ? "w-8 bg-gradient-to-r from-blue-500 to-indigo-500"
                                : "w-2 bg-gray-300 dark:bg-gray-600"
                        }`}
                        onClick={() => setCurrentIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Arrows */}
            <button
                className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-xl hover:shadow-2xl hover:scale-110 transition-all z-10"
                onClick={() =>
                    setCurrentIndex((p) =>
                        p === 0 ? projects.length - 1 : p - 1
                    )
                }
                aria-label="Previous slide"
            >
                <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>

            <button
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-xl hover:shadow-2xl hover:scale-110 transition-all z-10"
                onClick={() =>
                    setCurrentIndex((p) =>
                        p === projects.length - 1 ? 0 : p + 1
                    )
                }
                aria-label="Next slide"
            >
                <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>
    );
}

/* ================================================================
   PROJECT CARD
================================================================ */
function ProjectCard({ project, index, isInView, isMobile }) {
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    const animationStyles = isMobile
        ? {
              transform: isInView ? "none" : "translateX(50px)",
              opacity: isInView ? 1 : 0,
              transition: `all 0.8s cubic-bezier(0.4,0,0.2,1) ${
                  0.2 + index * 0.1
              }s`,
          }
        : {
              transform: isInView ? "none" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transition: `all 0.8s cubic-bezier(0.4,0,0.2,1) ${
                  0.2 + index * 0.1
              }s`,
          };

    return (
        <div
            className="surface-card group relative flex h-full min-w-0 flex-col overflow-hidden"
            style={animationStyles}
        >
            {/* Image Section */}
            <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden flex-shrink-0">
                {!imageError ? (
                    <>
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={() => {
                                setImageError(true);
                                setImageLoading(false);
                            }}
                            onLoad={() => setImageLoading(false)}
                            priority={index < 3}
                            sizes="(max-width: 767px) 90vw, (max-width: 1279px) 46vw, 560px"
                        />

                        {imageLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 z-10">
                                <div className="w-8 h-8 border-4 border-gray-200 dark:border-gray-600 border-t-blue-500 rounded-full animate-spin" />
                            </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-700/50">
                        <FaCode className="w-12 h-12 text-gray-300 dark:text-gray-600" />
                    </div>
                )}
            </div>

            {/* Details Section */}
            <div className="p-5 sm:p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 pr-2">
                        {project.title}
                    </h3>

                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300 whitespace-nowrap mt-1 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                        {project.date}
                    </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                </p>

                {/* Features */}
                <div className="mb-5 flex-1">
                    <ul className="space-y-2">
                        {project.features.map((f, i) => (
                            <li
                                key={i}
                                className="flex items-start text-sm text-gray-500 dark:text-gray-400"
                            >
                                <svg
                                    className="w-4 h-4 text-emerald-500 mr-2.5 mt-0.5 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>

                                <span>{f}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, i) => (
                        <span
                            key={i}
                            className="px-2.5 py-1 bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-md text-xs font-medium border border-gray-100 dark:border-gray-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
