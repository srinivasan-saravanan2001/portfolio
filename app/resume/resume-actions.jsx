"use client";

import { FaPrint } from "react-icons/fa";

export function ResumeActions() {
	return <button className="resume-print" onClick={() => window.print()}><FaPrint aria-hidden="true" /> Print / Save as PDF</button>;
}
