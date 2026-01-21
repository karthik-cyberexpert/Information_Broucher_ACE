import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, ArrowRight } from 'lucide-react';

export const FlippingImage = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleFlip = () => {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    };

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="perspective-1000 flex items-center justify-center w-full h-full"
        >
            <div className="relative w-[340px] h-[480px] md:w-[400px] md:h-[550px] cursor-pointer group" onClick={handleFlip}>
                <motion.div
                    className="w-full h-full relative preserve-3d"
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 260, damping: 20 }}
                    onAnimationComplete={() => setIsAnimating(false)}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Front Side */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-overlay z-10 pointer-events-none"></div>
                        <img
                            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop"
                            alt="College Campus"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Front Content */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20 flex flex-col justify-end p-8">
                            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="inline-block px-3 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-xs text-blue-300 mb-3 font-medium">
                                    EST. 1985
                                </span>
                                <h2 className="text-3xl font-bold text-white mb-2 leading-tight">Future Ready<br />Education</h2>
                                <p className="text-gray-400 text-sm line-clamp-2">Experience a campus designed for innovation, collaboration, and growth.</p>

                                <div className="mt-4 flex items-center text-sm text-white/80 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span>Tap to explore</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0f1014] p-8"
                        style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}>

                        {/* Content Wrapper to counteract the card rotation and prevent mirrored text */}
                        <div className="w-full h-full flex flex-col items-center justify-center text-center relative z-10">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[50px] pointer-events-none"></div>

                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-white/5 shadow-inner">
                                <Building2 className="w-8 h-8 text-blue-400" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">About Our Campus</h3>

                            <div className="space-y-4 text-sm text-gray-400 leading-relaxed mb-8">
                                <p>
                                    Spanning over 50 acres, our campus features state-of-the-art labs, a modern library, and vibrant student spaces.
                                </p>
                                <p>
                                    We provide a holistic environment that nurtures both academic excellence and personal growth.
                                </p>
                            </div>

                            <button className="w-full py-3 px-6 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group/btn">
                                Virtual Tour
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};
