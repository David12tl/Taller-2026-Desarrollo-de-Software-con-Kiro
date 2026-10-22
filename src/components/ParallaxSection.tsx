import { type ReactNode } from 'react';
import {
	motion,
	useReducedMotion,
	useScroll,
	useTransform,
} from 'framer-motion';
import TiltImage from './TiltImage';

interface ParallaxSectionProps {
	children: ReactNode;
	imageUrl: string;
	title: string;
	slideIndex: number;
}

export default function ParallaxSection({
	children,
	imageUrl,
	title,
	slideIndex,
}: ParallaxSectionProps) {
	const shouldReduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll();
	const step = 1 / 7;
	const entranceStart = Math.max(0, (slideIndex - 1) * step);
	const active = slideIndex * step;
	const exitEnd = Math.min(1, (slideIndex + 1) * step);
	const clipProgress = useTransform(
		scrollYProgress,
		[entranceStart, active],
		shouldReduceMotion ? [1, 1] : [0, 1],
	);
	const opacity = useTransform(
		scrollYProgress,
		slideIndex === 7 ? [0, 1] : [active, exitEnd],
		shouldReduceMotion || slideIndex === 7 ? [1, 1] : [1, 0],
	);
	const y = useTransform(
		scrollYProgress,
		slideIndex === 7 ? [0, 1] : [active, exitEnd],
		shouldReduceMotion || slideIndex === 7 ? [0, 0] : [0, -50],
	);
	const filter = useTransform(
		scrollYProgress,
		slideIndex === 7 ? [0, 1] : [active, exitEnd],
		shouldReduceMotion || slideIndex === 7
			? ['blur(0px)', 'blur(0px)']
			: ['blur(0px)', 'blur(5px)'],
	);

	return (
		<section className="parallax-section" aria-label={title}>
			<TiltImage
				className="parallax-background"
				imageUrl={imageUrl}
				clipProgress={clipProgress}
			/>
			<div className="parallax-shade" aria-hidden="true" />
			<motion.div
				className="parallax-content"
				style={{ opacity, y, filter }}
			>
				<span className="section-eyebrow">Taller de desarrollo con IA</span>
				<h2>{title}</h2>
				<div className="glass-panel">{children}</div>
			</motion.div>
		</section>
	);
}
