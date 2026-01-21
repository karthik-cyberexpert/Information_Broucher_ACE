import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { campusImages } from '../constants/campusData';
import pusherRobot from '../assets/pusher.png';

export const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const robotControls = useAnimation();

    useEffect(() => {
        const runAnimationSequence = async () => {
            // Wait for 4 seconds before starting next push
            await new Promise(resolve => setTimeout(resolve, 4000));

            // 1. Robot "wakes up" and leans in slightly
            await robotControls.start({
                x: -20, // Move closer to the edge
                opacity: 1,
                transition: { duration: 0.5, ease: "easeOut" }
            });

            // 2. Short pause for "preparation"
            await new Promise(resolve => setTimeout(resolve, 200));

            // 3. The PUSH to the LEFT! (triggers slide change)
            setCurrentIndex((prev) => (prev + 1) % campusImages.length);

            // Robot pushes forward (to the left) sharply
            await robotControls.start({
                x: -60,
                transition: { duration: 0.15, ease: "easeIn" }
            });

            // 4. Robot recoils back to its "standby" position (just touching the edge)
            await robotControls.start({
                x: 0,
                opacity: 0.8, // Slightly fade when not pushing
                transition: { duration: 0.4, ease: "easeOut" }
            });

            // Reset for next round
            runAnimationSequence();
        };

        runAnimationSequence();
        return () => robotControls.stop();
    }, [robotControls]);

    const slideVariants = {
        enter: {
            x: 800, // Enter from right
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)",
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
        },
        exit: {
            zIndex: 0,
            x: -800, // Exit to left
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)",
        }
    };

    return (
        <div className="relative w-full max-w-6xl flex items-center justify-center overflow-visible pointer-events-none p-4 mx-auto">
            {/* Background Glow */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-blue-500/10 blur-[150px] rounded-full pointer-events-none scale-110 h-64"></div>

            {/* Pusher Robot - Kept ADJACENT on the RIGHT side */}
            <div className="absolute right-[-40px] md:right-[-100px] top-1/2 -translate-y-1/2 z-[100]">
                <motion.div
                    initial={{ x: 0, opacity: 0.8 }}
                    animate={robotControls}
                    className="w-24 h-24 md:w-48 md:h-48 pointer-events-none"
                >
                    <img
                        src={pusherRobot}
                        alt="Pusher Robot"
                        className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(59,130,246,0.3)] -scale-x-100"
                    />
                </motion.div>
            </div>

            <div className="relative w-full aspect-[16/10] md:aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] bg-black">
                <AnimatePresence initial={false} mode="popLayout">
                    <motion.div
                        key={currentIndex}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 100, damping: 20 },
                            opacity: { duration: 0.5 },
                            scale: { duration: 0.5 },
                            filter: { duration: 0.5 }
                        }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <img
                            src={campusImages[currentIndex].url}
                            alt={campusImages[currentIndex].title}
                            className="w-full h-full object-cover brightness-[0.8] hover:brightness-100 transition-[filter] duration-700"
                        />
                        {/* High-end Mask/Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5 pointer-events-none"></div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};
