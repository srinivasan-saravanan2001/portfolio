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
                        sizes="(max-width: 640px) 230px, (max-width: 1024px) 320px, 430px"
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
