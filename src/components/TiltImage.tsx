import {
	useMotionValue,
	useSpring,
	useMotionValueEvent,
	useTransform,
	motion,
	type MotionValue,
} from 'framer-motion';
import { useRef, type MouseEvent } from 'react';

interface TiltImageProps {
	imageUrl: string;
	className?: string;
	clipProgress?: MotionValue<number>;
}

export default function TiltImage({
	imageUrl,
	className,
	clipProgress,
}: TiltImageProps) {
	const imageRef = useRef<HTMLDivElement>(null);
	const targetRotateX = useMotionValue(0);
	const targetRotateY = useMotionValue(0);
	const rotateX = useSpring(targetRotateX, { stiffness: 120, damping: 18 });
	const rotateY = useSpring(targetRotateY, { stiffness: 120, damping: 18 });
	const defaultClipProgress = useMotionValue(1);
	const clipRadius = useTransform(
		clipProgress ?? defaultClipProgress,
		[0, 1],
		[0, 150],
	);
	useMotionValueEvent(clipRadius, 'change', (radius) => {
		imageRef.current?.style.setProperty(
			'clip-path',
			`circle(${radius}% at 50% 50%)`,
		);
	});

	const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
		const bounds = event.currentTarget.getBoundingClientRect();
		const x = (event.clientX - bounds.left) / bounds.width;
		const y = (event.clientY - bounds.top) / bounds.height;

		targetRotateX.set((0.5 - y) * 10);
		targetRotateY.set((x - 0.5) * 10);
	};

	const resetTilt = () => {
		targetRotateX.set(0);
		targetRotateY.set(0);
	};

	return (
		<div
			className={className}
			onMouseMove={handleMouseMove}
			onMouseLeave={resetTilt}
			style={{ perspective: 1000 }}
			aria-hidden="true"
		>
			<motion.div
				ref={imageRef}
				className="tilt-image"
				style={{
					backgroundImage: `url("${imageUrl}")`,
					rotateX,
					rotateY,
					clipPath: `circle(${clipRadius.get()}% at 50% 50%)`,
				}}
			/>
		</div>
	);
}
