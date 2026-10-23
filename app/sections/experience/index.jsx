"use client";

import { HeadingDivider } from "../../../components";
import { TimeLine } from "./TimeLine";

export function ExperienceSection() {
	return (
		<section id="experience" className="section" aria-label="Work Experience">
			<HeadingDivider title="Work Experience" />
			<TimeLine />
		</section>
	);
}
