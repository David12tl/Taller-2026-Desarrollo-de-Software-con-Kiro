import {
	motion,
	useReducedMotion,
	useScroll,
	useTransform,
} from 'framer-motion';

interface WordRevealProps {
	text: string;
	imageUrl?: string;
	closing?: string;
	slideIndex: number;
}

interface WordProps {
	word: string;
	progress: ReturnType<typeof useScroll>['scrollYProgress'];
	range: [number, number];
	reduceMotion: boolean;
}

function Word({ word, progress, range, reduceMotion }: WordProps) {
	const opacity = useTransform(
		progress,
		reduceMotion ? [0, 1] : range,
		reduceMotion ? [1, 1] : [0.2, 1],
	);

	return (
		<motion.span className="reveal-word" style={{ opacity }}>
			{word}{' '}
		</motion.span>
	);
}

export default function WordReveal({
	text,
	imageUrl,
	closing,
	slideIndex,
}: WordRevealProps) {
	const shouldReduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll();
	const words = text.trim().split(/\s+/);
	const step = 1 / 7;
	const entranceStart = Math.max(0, (slideIndex - 1) * step);
	const active = slideIndex * step;
	const exitEnd = Math.min(1, (slideIndex + 1) * step);
	const isFinalSlide = slideIndex === 7;
	const exitRange: [number, number] = shouldReduceMotion || isFinalSlide
		? [0, 1]
		: [active, exitEnd];
	const opacity = useTransform(
		scrollYProgress,
		exitRange,
		shouldReduceMotion || isFinalSlide ? [1, 1] : [1, 0],
	);
	const y = useTransform(
		scrollYProgress,
		exitRange,
		shouldReduceMotion || isFinalSlide ? [0, 0] : [0, -50],
	);
	const filter = useTransform(
		scrollYProgress,
		exitRange,
		shouldReduceMotion || isFinalSlide
			? ['blur(0px)', 'blur(0px)']
			: ['blur(0px)', 'blur(5px)'],
	);
	const farewellOpacity = useTransform(
		scrollYProgress,
		shouldReduceMotion ? [0, 1] : [Math.max(0, active - 0.06), active],
		shouldReduceMotion ? [1, 1] : [0, 1],
	);
	const farewellY = useTransform(
		scrollYProgress,
		shouldReduceMotion ? [0, 1] : [Math.max(0, active - 0.06), active],
		shouldReduceMotion ? [0, 0] : [16, 0],
	);

	return (
		<section className="word-section" aria-label={text}>
			{imageUrl && (
				<>
					<div
						className="word-background"
						style={{ backgroundImage: `url("${imageUrl}")` }}
						aria-hidden="true"
					/>
					<div className="word-shade" aria-hidden="true" />
				</>
			)}
			<motion.div className="word-section-inner" style={{ opacity, y, filter }}>
				<p className="word-reveal-copy" aria-hidden="true">
					{words.map((word, index) => {
						const wordStart =
							entranceStart + ((active - entranceStart) * index) / words.length;
						const wordEnd =
							entranceStart + ((active - entranceStart) * (index + 1)) / words.length;

						return (
							<Word
								key={`${word}-${index}`}
								word={word}
								progress={scrollYProgress}
								range={[wordStart, wordEnd]}
								reduceMotion={Boolean(shouldReduceMotion)}
							/>
						);
					})}
				</p>
				<span className="sr-only">{text}</span>
				{closing && (
					<motion.p
						className="farewell"
						style={{ opacity: farewellOpacity, y: farewellY }}
					>
						{closing}
					</motion.p>
				)}
			</motion.div>
		</section>
	);
}
