"use client";

import { useEffect, useState } from "react";
import { WelcomeAnimation } from "./IntroAnimation";

const statements = [
    "build mobile apps for Android By capacitor converter",
    "convert design into modern UI",
    "build interactive UI using Nextjs",
    "develop websites using Next.js",
    "Backend Integration in Modern framework on Python FastAPI"
];

export function WelcomeSection() {
    const [activeStatement, setActiveStatement] = useState(0);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const interval = window.setInterval(() => {
            setActiveStatement((current) => (current + 1) % statements.length);
        }, 3200);

        return () => window.clearInterval(interval);
    }, []);

    return (
        <section id="intro" className="hero-section">
            <div className="hero-grid" aria-hidden="true" />
            <div className="hero-glow hero-glow--one" aria-hidden="true" />
            <div className="hero-glow hero-glow--two" aria-hidden="true" />
            <div className="hero-inner">
                <div className="hero-copy">
                    <h1 className="hero-title">
                        Hi, I&apos;m <mark>Srinivasan Saravanan</mark> a passionate software developer.
                    </h1>
                    <div className="hero-statement" aria-live="polite" aria-atomic="true">
                        <span>I </span>
                        <span key={activeStatement} className="hero-statement-text">
                            <strong>{statements[activeStatement].split(" ")[0]}</strong>{" "}
                            {statements[activeStatement].split(" ").slice(1).join(" ")}
                        </span>
                    </div>
                    <p className="hero-description">Stick around to see some of my work.</p>
                </div>
                <div className="hero-visual">
                    <WelcomeAnimation />
                </div>
            </div>
        </section>
    );
}
