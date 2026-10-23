"use client";

import {
	AboutSection,
	ExperienceSection,
	ProjectSection,
	TechnologiesSection,
	WelcomeSection,
	Certification,
	EducationSection
} from "../app/sections";

export default function Page() {
	return (
		<main className="portfolio-main">
			<WelcomeSection />
			<AboutSection />
			<ExperienceSection />
			<ProjectSection />
			<EducationSection />

			<Certification />

			<TechnologiesSection />
		</main>
	);
}
