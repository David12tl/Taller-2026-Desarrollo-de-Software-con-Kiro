import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

interface ScrollZoomHeroProps {
	title: string;
	subtitle: string;
	imageUrl: string;
	slideIndex: number;
}

const titleVariants = {
	hidden: {},
	visible: {
		transition: {
			delayChildren: 0.15,
			staggerChildren: 0.055,
		},
	},
};

const wordVariants = {
	hidden: { opacity: 0, y: 28 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
	},
};

export default function ScrollZoomHero({
	title,
	subtitle,
	imageUrl,
	slideIndex,
}: ScrollZoomHeroProps) {
	const shouldReduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll();
	const active = slideIndex / 7;
	const exitEnd = Math.min(1, (slideIndex + 1) / 7);
	const isFinalSlide = slideIndex === 7;
	const exitRange: [number, number] =
		shouldReduceMotion || isFinalSlide ? [0, 1] : [active, exitEnd];
	const contentOpacity = useTransform(
		scrollYProgress,
		exitRange,
		shouldReduceMotion || isFinalSlide ? [1, 1] : [1, 0],
	);
	const contentY = useTransform(
		scrollYProgress,
		exitRange,
		shouldReduceMotion || isFinalSlide ? [0, 0] : [0, -50],
	);
	const contentFilter = useTransform(
		scrollYProgress,
		exitRange,
		shouldReduceMotion || isFinalSlide
			? ['blur(0px)', 'blur(0px)']
			: ['blur(0px)', 'blur(5px)'],
	);
	const words = title.split(/\s+/);

	return (
		<section className="scroll-zoom-hero" aria-label={title}>
			<div className="hero-stage">
				<motion.div
					className="hero-backdrop"
					style={{ backgroundImage: `url("${imageUrl}")` }}
					aria-hidden="true"
				/>
				<div className="hero-shade" aria-hidden="true" />
				<motion.div
					className="hero-content"
					style={{ opacity: contentOpacity, y: contentY, filter: contentFilter }}
				>
					<span className="hero-badge">Spec-Driven Development</span>
					<motion.h1
						className="hero-title"
						variants={titleVariants}
						initial={shouldReduceMotion ? false : 'hidden'}
						animate="visible"
						aria-label={title}
					>
						{words.map((word, index) => (
							<motion.span
								className="title-word"
								key={`${word}-${index}`}
								variants={wordVariants}
								aria-hidden="true"
							>
								{word}
							</motion.span>
						))}
					</motion.h1>
					<p className="hero-description">{subtitle}</p>
				</motion.div>
				<div className="scroll-cue" aria-hidden="true">
					<span>Desliza para avanzar</span>
					<svg viewBox="0 0 24 24" fill="none">
						<path
							d="M5 12h14m-6-6 6 6-6 6"
							stroke="currentColor"
							strokeWidth="1.8"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</div>
		</section>
	);
}
