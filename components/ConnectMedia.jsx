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
								className="social-link inline-flex h-11 w-11 items-center justify-center text-lg"
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
