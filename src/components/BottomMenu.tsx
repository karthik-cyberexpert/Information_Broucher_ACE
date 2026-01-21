import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export const BottomMenu = () => {
    return (
        <div className="relative z-50">
            <motion.button
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.7, type: 'spring', stiffness: 400, damping: 25 }}
                className="flex flex-col items-center gap-2 group cursor-pointer p-2"
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-purple-600/30 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-tr from-[#1a1c23] to-[#252833] rounded-full flex items-center justify-center shadow-2xl border border-white/10 backdrop-blur-xl relative z-10 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <Menu className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                </div>
                <div className="bg-black/40 backdrop-blur-md px-4 py-1 rounded-full border border-white/5 shadow-xl">
                    <span className="text-[9px] font-black text-white/60 uppercase tracking-[0.4em] group-hover:text-blue-400 transition-colors">Menu</span>
                </div>
            </motion.button>
        </div>
    );
};
