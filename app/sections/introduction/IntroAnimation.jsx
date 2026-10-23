import Image from "next/image";

export function WelcomeAnimation() {
	return (
		<div className="hero-portrait-stage">
			<div className="hero-orbit hero-orbit--outer" aria-hidden="true" />
			<div className="hero-orbit hero-orbit--inner" aria-hidden="true" />
			<div className="hero-portrait-glow" aria-hidden="true" />
			<div className="hero-portrait-frame">
				<div className="hero-portrait-image">
					<Image
						src="/proflioprofile.png"
						alt="Srinivasan Saravanan"
						fill
						priority
						sizes="(max-width: 359px) 90vw, (max-width: 767px) 320px, (max-width: 1023px) 30vw, 345px"
						className="object-cover"
					/>
				</div>
			</div>
			<div className="hero-process">
				<div className="hero-float-label hero-float-label--one" aria-hidden="true">
					<span>01</span> Imagine
				</div>
				<div className="hero-float-label hero-float-label--two" aria-hidden="true">
					<span>02</span> Build
				</div>
				<div className="hero-float-label hero-float-label--three" aria-hidden="true">
					<span>03</span> Deliver
				</div>
			</div>
			<div className="hero-role-badge">
				<span className="hero-role-dot" aria-hidden="true" />
				Software Developer
			</div>
		</div>
	);
}
