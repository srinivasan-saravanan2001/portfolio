import { ResumeActions } from "./resume-actions";
import Link from "next/link";

export const metadata = {
	title: "Resume | Srinivasan S",
	alternates: {
		canonical: "/resume/"
	}
};

const experience = [
	{
		role: "Junior Software Developer",
		dates: "Dec 2025 – Present",
		company: "Vmasoft AI Solutions",
		location: "Ramanathapuram, Tamil Nadu",
		points: [
			"Develop, deploy, and maintain full-stack web and cross-platform applications using Next.js, TypeScript, Python, FastAPI, MongoDB, Redux Toolkit, and Capacitor for production business operations.",
			"Developed a scan-driven Production Entry system integrating QR/barcode and Bizerba scanning for item validation, production recording, and automated warehouse stock updates.",
			"Built an Inventory Management system for physical stock closing, FG/RM stock reconciliation, variance calculation, inventory tracking, and approval-based stock adjustments.",
			"Developed a Warehouse Dispatch system supporting FG, SO, and RM workflows with stock validation, dispatch processing, inventory deduction, and REST API integration."
		]
	},
	{
		role: "Software Developer Trainee",
		dates: "Sep 2024 – Dec 2025",
		company: "Vmasoft AI Solutions",
		location: "Ramanathapuram, Tamil Nadu",
		points: [
			"Developed an e-commerce website and admin panel using Next.js, TypeScript, Python, FastAPI, and MongoDB.",
			"Built REST APIs and responsive interfaces for product, customer, order, and pricing management.",
			"Integrated Razorpay and WhatsApp Business API for payments, order confirmations, and customer notifications."
		]
	}
];

const projects = [
	{
		name: "Work Management System",
		stack: "Next.js, TypeScript, Redux Toolkit, FastAPI, MongoDB, Capacitor",
		points: [
			"Developed three role-based applications for Admin, Manager, and Employee workflows, supporting task assignment, progress tracking, completion, reporting, and manager review.",
			"Implemented REST APIs, Redux state management, JWT authentication, filtering, pagination, task status updates, camera capture, and object storage for cross-platform task operations."
		]
	},
	{
		name: "Sale Order Management System",
		stack: "Next.js, TypeScript, Redux Toolkit, FastAPI, MongoDB",
		points: [
			"Developed end-to-end sale order and payment workflows covering invoicing, partial payments, pending balances, validation, settlement, and customer ledger management.",
			"Implemented REST APIs and monitoring dashboards for order tracking, payment status, customer ledgers, filtering, pagination, and reporting."
		]
	}
];

const skills = [
	["Languages", "Python, JavaScript, TypeScript"],
	["Frontend", "React.js, Next.js, Redux Toolkit, Tailwind CSS, HTML, CSS"],
	["Backend & APIs", "FastAPI, REST APIs, Pydantic, JWT, RBAC"],
	["Databases", "MongoDB, SQL"],
	["Mobile", "Capacitor"],
	["Integrations", "Razorpay, WhatsApp Business API, Bizerba Scanning, QR/Barcode Scanning"],
	["Tools", "Git, GitHub"]
];

export default function ResumePage() {
	return (
		<main className="resume-page">
			<div className="resume-toolbar">
				<Link href="/" className="resume-back">Back to portfolio</Link>
				<div className="resume-toolbar-actions">
					<a className="resume-download" href="/Srinivasan_S_Software_Developer_Resume.pdf" download>
						Download PDF
					</a>
					<ResumeActions />
				</div>
			</div>

			<article className="resume-sheet">
				<header className="resume-header">
					<h1>SRINIVASAN S</h1>
					<p className="resume-role">Software Developer</p>
					<div className="resume-contact">
						<a href="tel:+917871693540">+91 7871693540</a>
						<span aria-hidden="true">|</span>
						<a href="mailto:srini462001@gmail.com">srini462001@gmail.com</a>
						<span aria-hidden="true">|</span>
						<a href="https://www.linkedin.com/in/srinivasan462001/" target="_blank" rel="noopener noreferrer">linkedin.com/in/srinivasan462001</a>
					</div>
					<div className="resume-contact">
						<a href="https://github.com/srinivasan-saravanan2001" target="_blank" rel="noopener noreferrer">github.com/srinivasan-saravanan2001</a>
						<span aria-hidden="true">|</span>
						<a href="https://portfolio-srinivasan.vercel.app" target="_blank" rel="noopener noreferrer">portfolio-srinivasan.vercel.app</a>
					</div>
				</header>

				<section className="resume-section">
					<h2>Summary</h2>
					<p>Software Developer with 2+ years of experience developing and maintaining production-grade web and cross-platform applications using Python, FastAPI, Next.js, React.js, TypeScript, and MongoDB. Experienced in building inventory, warehouse, dispatch, production, and order management systems with REST APIs, authentication, database integration, and production support.</p>
				</section>

				<section className="resume-section">
					<h2>Work Experience</h2>
					{experience.map((item) => (
						<div className="resume-entry" key={item.role}>
							<div className="resume-entry-heading"><h3>{item.role}</h3><span>{item.dates}</span></div>
							<div className="resume-entry-meta"><em>{item.company}</em><em>{item.location}</em></div>
							<ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
						</div>
					))}
				</section>

				<section className="resume-section">
					<h2>Projects</h2>
					{projects.map((project) => (
						<div className="resume-project" key={project.name}>
							<h3>{project.name} <span>| {project.stack}</span></h3>
							<ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul>
						</div>
					))}
				</section>

				<section className="resume-section">
					<h2>Technical Skills</h2>
					<div className="resume-skills">
						{skills.map(([label, value]) => <p key={label}><strong>{label}:</strong> {value}</p>)}
					</div>
				</section>

				<section className="resume-section">
					<h2>Education</h2>
					<div className="resume-entry-heading"><h3>Master of Computer Applications (MCA)</h3><span>2021 – 2023</span></div>
					<div className="resume-entry-meta"><span>Karpagam Academy of Higher Education</span><span>Coimbatore, Tamil Nadu</span></div>
					<p>CGPA: 7.12</p>
				</section>

				<section className="resume-section">
					<h2>Certifications &amp; Recognition</h2>
					<div className="resume-credential"><strong>High Achiever Award – Vmasoft AI Solutions</strong><span>2026</span></div>
					<div className="resume-credential"><strong>Advanced SQL Certification – Great Learning</strong><span>2024</span></div>
					<div className="resume-credential"><strong>Software Development Training – QSpiders, Chennai</strong><span>2024</span></div>
				</section>
			</article>
		</main>
	);
}
