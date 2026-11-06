import { HeadingDivider } from "../../../components";
import { FaCode, FaServer, FaMobileAlt, FaBriefcase, FaGraduationCap, FaArrowRight } from "react-icons/fa";

const expertise = [
	{ title: "Frontend", tools: "React.js · Next.js", icon: FaCode },
	{ title: "Backend", tools: "Python FastAPI · MongoDB", icon: FaServer },
	{ title: "Mobile", tools: "Capacitor · Java", icon: FaMobileAlt }
];

export function AboutSection() {
	return (
		<section id="about" className="section">
			<HeadingDivider title="About Me" />
			<div className="about-layout">
				<div className="about-grid">
					<article className="about-card about-card--intro">
						<div className="surface-card about-card-surface">
							<span className="about-eyebrow">Web, backend &amp; mobile</span>
							<h3>Full Stack Developer</h3>
							<p className="about-lead">
								I build <strong>web and cross-platform mobile applications</strong> with a focus on
								performance, usability, and a clear user experience.
							</p>
							<div className="about-expertise" aria-label="Technical expertise">
								{expertise.map(({ title, tools, icon: Icon }) => (
									<div className="about-expertise-item" key={title}>
										<span className="about-icon"><Icon aria-hidden="true" /></span>
										<div><h4>{title}</h4><p>{tools}</p></div>
									</div>
								))}
							</div>
						</div>
					</article>

					<article className="about-card">
						<div className="surface-card about-card-surface">
							<div className="about-card-heading">
								<span className="about-icon"><FaBriefcase aria-hidden="true" /></span>
								<div><span className="about-eyebrow">What I do</span><h3>Current Role &amp; Expertise</h3></div>
							</div>
							<p>
								As a <strong>Software Developer at VMASOFT</strong>, I work across the full
								development lifecycle, from responsive interfaces to backend services and mobile applications.
							</p>
							<ul className="about-work-list">
								<li><span>Web experiences</span><p>Responsive frontends built with React.js and Next.js.</p></li>
								<li><span>Backend services</span><p>Python FastAPI services connected to MongoDB.</p></li>
								<li><span>Cross-platform apps</span><p>Mobile applications using Capacitor with native Java integration.</p></li>
							</ul>
						</div>
					</article>

					<article className="about-card">
						<div className="surface-card about-card-surface">
							<div className="about-card-heading">
								<span className="about-icon"><FaGraduationCap aria-hidden="true" /></span>
								<div><span className="about-eyebrow">How I got here</span><h3>Professional Journey</h3></div>
							</div>
							<ol className="about-journey">
								<li>
									<h4>A foundation in full stack development</h4>
									<p>Python Full-Stack training at <strong>QSpiders Training Institute, Chennai</strong>, building a foundation in end-to-end development.</p>
								</li>
								<li>
									<h4>Learning through practical experience</h4>
									<p>Internships as a <strong>Python Programmer at Encryptix, Delhi</strong> and a <strong>Python Intern at Shiaash Info Solution</strong>, applying my skills to real projects.</p>
								</li>
								<li>
									<h4>Contributing to real-world products</h4>
									<p>Experience with dating platforms, digital wallets, and enterprise applications, including migrations and real-time feature integrations.</p>
								</li>
							</ol>
						</div>
					</article>
				</div>

				<div className="contact-panel">
					<div className="surface-muted contact-panel-inner">
						<div>
							<h3>Let&apos;s build something together</h3>
							<p>Looking for a full stack developer? I am open to software development opportunities and collaborations on web and mobile applications.</p>
						</div>
						<a href="mailto:srini462001@gmail.com" className="action-primary">
							Get In Touch <FaArrowRight aria-hidden="true" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
