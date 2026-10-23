"use client";

import { useEffect, useState } from "react";
import { WelcomeAnimation } from "./IntroAnimation";

const statements = [
    { stage: "Imagine", text: "turn ideas into clear, usable experiences." },
    { stage: "Design", text: "shape designs into responsive interfaces." },
    { stage: "Build", text: "create interactive products with Next.js." },
    { stage: "Connect", text: "power them with Python FastAPI." },
    { stage: "Deliver", text: "bring web experiences to mobile with Capacitor." }
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
                        <span className="hero-statement-stage">{String(activeStatement + 1).padStart(2, "0")} / {String(statements.length).padStart(2, "0")} &nbsp; {statements[activeStatement].stage}</span>
                        <span key={activeStatement} className="hero-statement-text">I {statements[activeStatement].text}</span>
                    </div>
                    <div className="hero-story-progress" aria-hidden="true">
                        {statements.map((statement, index) => (
                            <span key={statement.stage} className={`hero-story-segment ${index < activeStatement ? "is-complete" : ""} ${index === activeStatement ? "is-active" : ""}`} />
                        ))}
                    </div>
            
                </div>
                <div className="hero-visual">
                    <WelcomeAnimation />
                </div>
            </div>
        </section>
    );
}
