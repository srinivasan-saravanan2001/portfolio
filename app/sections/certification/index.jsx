import { HeadingDivider } from "../../../components";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export function Certification() {
	const certRef = useRef(null);
	const isCertInView = useInView(certRef, { once: true });
	const certifications = [
		{
			id: 1,
			name: "Python Full Stack course",
			issuer: "Qspiders Training Institute-Chennai",
			date: "2024",
			image: "/Qspider.jpg",
			url: "#"
		},
		{
			id: 2,
			name: "Advance SQL",
			issuer: "Great Learning",
			date: "2023",
			image: "/Greatlearning.jpg",
			url: "#"
		},
		{
			id: 3,
			name: "Internship In Python Programming",
			issuer: "Shiash Info Solution - Chennai",
			date: "2021",
			image: "/shiashintern.jpg",
			url: "#"
		}
	];

	return (
		<LazyMotion features={domAnimation}>
			<section id="certification" className="section">
				<HeadingDivider title="Certifications" />
				<div ref={certRef} className="certification-grid">
					{certifications.map((cert, index) => (
						<div key={cert.id} className="cert-card">
							<CertificationCard cert={cert} index={index} isCertInView={isCertInView} />
						</div>
					))}
				</div>
			</section>
		</LazyMotion>
	);
}

function CertificationCard({ cert, index, isCertInView }) {
	const [imageError, setImageError] = useState(false);
	const [imageLoading, setImageLoading] = useState(true);

	const handleImageError = () => {
		setImageError(true);
		setImageLoading(false);
	};

	const handleImageLoad = () => {
		setImageLoading(false);
	};

	return (
		<div
			className="surface-card group relative overflow-hidden h-full flex flex-col select-none"
			style={{
				transform: isCertInView ? "none" : "translateY(30px)",
				opacity: isCertInView ? 1 : 0,
				transition: `all 0.8s cubic-bezier(0.4,0,0.2,1) ${0.2 + index * 0.1}s`
			}}
		>
			{/* Image Section */}
			<div className="relative w-full aspect-[4/3] bg-gray-100 dark:bg-gray-700 overflow-hidden flex-shrink-0">
				{!imageError ? (
					<>
						<Image
							src={cert.image}
							alt={cert.name}
							fill
							className="object-contain pointer-events-none"
							onError={handleImageError}
							onLoad={handleImageLoad}
							priority={index < 3}
							sizes="(max-width: 575px) 100vw, (max-width: 1023px) 50vw, 380px"
						/>
						{imageLoading && (
							<div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 z-10">
								<div className="w-8 h-8 border-4 border-gray-200 dark:border-gray-600 border-t-blue-500 rounded-full animate-spin" />
							</div>
						)}
						<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
					</>
				) : (
					<div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-700/50">
						<svg
							className="w-12 h-12 text-gray-300 dark:text-gray-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
				)}
			</div>

			{/* Details Section */}
			<div className="p-5 sm:p-6 flex flex-col flex-1">
				<h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2">
					{cert.name}
				</h3>
				<p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1">{cert.issuer}</p>
			</div>
		</div>
	);
}
