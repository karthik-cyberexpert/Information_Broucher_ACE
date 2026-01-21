import { GraduationCap } from 'lucide-react';

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 p-8 flex items-center gap-4 z-50">
            <div className="relative group">
                <div className="absolute inset-0 bg-blue-600 blur opacity-25 group-hover:opacity-50 transition duration-500 rounded-xl"></div>
                <div className="relative bg-black/40 p-3 rounded-xl backdrop-blur-md border border-white/10 shadow-xl">
                    <GraduationCap className="w-8 h-8 text-blue-400" />
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold font-sans tracking-tight text-white drop-shadow-md">
                    ACE <span className="text-blue-400 font-light">Institute</span>
                </h1>
                <div className="flex items-center gap-2">
                    <div className="h-[1px] w-4 bg-blue-500/50"></div>
                    <p className="text-[10px] text-blue-200/60 uppercase tracking-[0.2em]">Excellence Defined</p>
                </div>
            </div>
        </header>
    );
};
