import { HeadingDivider } from "../../../components";
import { TECHNOLOGIES } from "../../../constants";

export function TechnologiesSection() {
	return (
		<section id="tech" className="section">
			<HeadingDivider title="Technologies" />
			<div className="technology-groups">
				{TECHNOLOGIES.map((group, index) => (
					<div key={group.category || index}>
						{group.category && (
							<div className="technology-category">
								<h3>{group.category}</h3>
							</div>
						)}
						<ul className="technology-grid" aria-label={group.category || "Technologies and tools"}>
							{group.items.map((item) => (
								<li key={item.name} className="technology-item flex flex-col items-center">
									<div className="surface-card flex items-center justify-center" aria-hidden="true">
										<div className="[&>svg]:h-8 [&>svg]:w-8">{item.icon}</div>
									</div>
									<span className="text-center">{item.name}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
