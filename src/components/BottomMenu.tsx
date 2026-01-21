import { Home, BookOpen, Users, Phone, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export const BottomMenu = () => {
    const items = [
        { icon: Home, label: 'Home', active: true },
        { icon: BookOpen, label: 'Programs', active: false },
        { icon: Search, label: 'Search', active: false, primary: true },
        { icon: Users, label: 'Campus', active: false },
        { icon: Phone, label: 'Contact', active: false },
    ];

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="flex items-center justify-between p-2 pl-4 pr-4 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl ring-1 ring-white/5"
            >
                {items.map((item, index) => (
                    item.primary ? (
                        <button key={index} className="relative -top-6 -mt-2">
                            <div className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 border-4 border-[#1a1a1a] hover:scale-105 transition-transform cursor-pointer group">
                                <item.icon className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                            </div>
                        </button>
                    ) : (
                        <button key={index} className="flex flex-col items-center justify-center gap-1 w-12 h-12 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer">
                            <item.icon className={`w-5 h-5 ${item.active ? 'text-blue-400' : 'text-gray-400'} group-hover:text-blue-300 transition-colors`} />
                            <span className={`text-[9px] font-medium ${item.active ? 'text-blue-400' : 'text-gray-500'} group-hover:text-blue-300 transition-colors`}>{item.label}</span>
                        </button>
                    )
                ))}
            </motion.div>
        </div>
    );
};
