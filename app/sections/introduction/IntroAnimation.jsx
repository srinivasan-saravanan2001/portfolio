import Image from "next/image";

export function WelcomeAnimation() {
	return (
		<div className="hero-portrait-stage">
			<div className="hero-portrait-frame">
				<div className="hero-portrait-image">
					<Image
						src="/proflioprofile.png"
						alt="Srinivasan Saravanan"
						fill
						priority
						sizes="(max-width: 639px) 70vw, (max-width: 900px) 30vw, 336px"
						className="object-cover"
					/>
				</div>
			</div>
			<div className="hero-role-badge">
				<span className="hero-role-dot" aria-hidden="true" />
				Software Developer
			</div>
		</div>
	);
}
