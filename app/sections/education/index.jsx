import { HeadingDivider } from "../../../components";
import Image from "next/image";
import { FaGraduationCap, FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";

const education = [
	{
		level: "Postgraduate",
		shortName: "MCA",
		title: "Master of Computer Applications",
		start: "2021",
		end: "2023"
	},
	{
		level: "Undergraduate",
		shortName: "B.Sc",
		title: "Bachelor of Science in Information Technology",
		start: "2018",
		end: "2021"
	}
];

export function EducationSection() {
	return (
		<section id="education" className="section">
			<HeadingDivider title="Education" />
			<div className="edu-layout">
				<div className="edu-campus">
					<div className="edu-photo">
						<Image
							src="/education.jpg"
							alt="Karpagam University campus in Coimbatore"
							fill
							sizes="(max-width: 899px) 100vw, 540px"
							className="object-cover"
						/>
					</div>
					<div className="edu-campus-caption">
						<h3>Karpagam University</h3>
						<p><FaMapMarkerAlt aria-hidden="true" /> Coimbatore, Tamil Nadu, India</p>
					</div>
				</div>

				<div className="edu-qualifications" aria-label="Academic qualifications">
					{education.map((item) => (
						<article className="edu-degree" key={item.shortName}>
							<div className="edu-degree-meta">
								<span className="edu-level">{item.level}</span>
								<span className="edu-period">
									<FaRegCalendarAlt aria-hidden="true" />
									<time dateTime={item.start}>{item.start}</time>
									<span aria-hidden="true">–</span><span className="sr-only">to</span>
									<time dateTime={item.end}>{item.end}</time>
								</span>
							</div>
							<div className="edu-degree-main">
								<span className="edu-degree-icon"><FaGraduationCap aria-hidden="true" /></span>
								<div>
									<span className="edu-short-name">{item.shortName}</span>
									<h3>{item.title}</h3>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
