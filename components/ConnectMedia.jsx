import { LazyMotion, domAnimation, m } from "framer-motion";
import { animate, exit, initial, transition } from "../utils/motions";
import { SOCIAL_MEDIA } from "../constants";

export function ConnectMedia() {
	return (
		<LazyMotion features={domAnimation}>
			<m.nav
				aria-label="Social links"
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
			>
				<ul className="social-links flex items-center gap-1">
					{SOCIAL_MEDIA.map((item) => (
						<li key={item.id}>
							<a
								href={item.url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={item.title}
								title={item.title}
								className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-xl text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-blue-300"
							>
								{item.icon}
							</a>
						</li>
					))}
				</ul>
			</m.nav>
		</LazyMotion>
	);
}
