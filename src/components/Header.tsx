import { motion } from 'framer-motion';
import brandingLogo from '../assets/branding.png';

export const Header = () => {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="z-50 w-full flex justify-center"
        >
            <div className="bg-black/20 backdrop-blur-3xl border border-white/10 px-8 md:px-12 py-4 md:py-6 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] flex items-center justify-center">
                <motion.img
                    src={brandingLogo}
                    alt="Adhiyamaan College of Engineering"
                    className="h-14 md:h-24 w-auto object-contain"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </motion.div>
    );
};
