"use client";

import { HeadingDivider } from "../../../components";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { FaGithub, FaCode } from "react-icons/fa";

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
				"TypeScript",
				"Redux Toolkit",
				"Python FastAPI",
				"MongoDB",
				"REST APIs",
				"Material UI",
				"Capacitor"
			],
			image: "/Task Management Dashboard Overview.png",
			githubUrl: "https://github.com/srinivasan-saravanan2001/task-management-system",
			liveUrl: "#",
			date: "2024",
			features: [
				"Admin, Manager, and Worker logins",
				"Assign tasks to specific branches",
				"Workers update task progress",
				"Real-time notifications",
				"Track task deadlines",
				"View completion reports"
			]
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
				"Material UI"
			],
			image: "/Sales Order Management Dashboard.png",
			githubUrl: "#",
			liveUrl: "#",
			date: "2025",
			features: [
				"Multi-branch sales order management",
				"Order creation and status tracking",
				"Customer and product data integration",
				"Branch-wise sales monitoring dashboard",
				"Order filtering, searching, and pagination",
				"Sales reports and transaction history"
			]
		}
	];

	return (
		<LazyMotion features={domAnimation}>
			<section id="project" className="section">
				<HeadingDivider title="personal Projects" />

				<div ref={projectRef} className="mt-8 sm:mt-12">
					<div className="project-grid">
						{projects.map((project, index) => (
							<ProjectCard
								key={project.id}
								project={project}
								index={index}
								isInView={isProjectInView}
							/>
						))}
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

function ProjectCard({ project, index, isInView }) {
	const [imageError, setImageError] = useState(false);
	const [imageLoading, setImageLoading] = useState(true);

	const animationStyles = {
		transform: isInView ? "none" : "translateY(16px)",
		opacity: isInView ? 1 : 0,
		transition: `opacity .4s ease ${index * 0.08}s, transform .4s ease ${index * 0.08}s`
	};

	return (
		<div
			className="project-card surface-card group relative flex h-full min-w-0 flex-col overflow-hidden"
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
							sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 560px"
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
							<li key={i} className="flex items-start text-sm text-gray-500 dark:text-gray-400">
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
