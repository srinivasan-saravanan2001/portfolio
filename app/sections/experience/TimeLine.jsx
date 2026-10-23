"use client";

import { LazyMotion, domAnimation, useInView, m } from "framer-motion";
import { useRef } from "react";
// ATS Optimized & Grammatically Corrected Data
const TimeLineData = [
	{
		year: "2023 - Present",
		role: "Full Stack Developer",
		company: "VMASOFT",
		location: "Ramanathapuram",
		description:
			"Building scalable web and mobile applications using React.js, Next.js, and Python FastAPI."
	},
	{
		year: "2022",
		role: "Full-Stack Student",
		company: "QSpiders Training Institute",
		location: "Chennai",
		description:
			"Completed intensive training in software development with a focus on real-world projects."
	},
	{
		year: "2022",
		role: "Data Science Intern",
		company: "Evoastra",
		location: "Remote",
		description: "Gained foundational experience in data analysis and machine learning concepts."
	},
	{
		year: "2021",
		role: "Python Programmer Intern",
		company: "Encryptix",
		location: "Delhi",
		description: "Developed backend solutions and automation scripts using Python."
	},
	{
		year: "2021",
		role: "Python Intern",
		company: "Shiaash Info Solutions",
		location: "Remote",
		description:
			"Completed a 3-month internship focusing on core Python programming and API integration."
	}
];

export function TimeLine() {
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { once: true, margin: "-50px" });
	return (
		<LazyMotion features={domAnimation}>
			<ol className="experience-list" ref={containerRef}>
				{TimeLineData.map((item, index) => (
					<m.li
						key={item.company}
						className="experience-row"
						initial={{ opacity: 0, y: 16 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.35, delay: index * 0.06 }}
					>
						<p className="experience-date">{item.year}</p>
						<div className="surface-card experience-card">
							<h3>{item.role}</h3>
							<p className="experience-company">
								{item.company} <span>&bull; {item.location}</span>
							</p>
							<p className="experience-description">{item.description}</p>
						</div>
					</m.li>
				))}
			</ol>
		</LazyMotion>
	);
}
