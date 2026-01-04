import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Monitor, Smartphone, Tablet, RefreshCw, Smartphone as Mobile } from 'lucide-react';
import { projects } from '../data/projects';

const LiveDemo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return <div className="min-h-screen bg-neon-dark text-white flex items-center justify-center">Project Not Found</div>;
    }

    return (
        <div className="min-h-screen bg-neon-dark text-white pt-24 px-4 overflow-hidden h-screen flex flex-col">
            {/* Demo Header */}
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center mb-6 gap-4 border-b border-white/5 pb-6">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-all"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <div>
                        <h1 className="text-xl font-bold">{project.title}</h1>
                        <p className="text-xs text-neon-purple font-medium tracking-widest uppercase">Live Interactive Demo</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 bg-white/5 p-1 rounded-2xl border border-white/10">
                    <button className="p-2.5 rounded-xl bg-neon-purple text-white shadow-lg shadow-neon-purple/20">
                        <Monitor size={20} />
                    </button>
                    <button className="p-2.5 rounded-xl text-gray-400 hover:bg-white/5 transition-all">
                        <Tablet size={20} />
                    </button>
                    <button className="p-2.5 rounded-xl text-gray-400 hover:bg-white/5 transition-all">
                        <Mobile size={20} />
                    </button>
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm text-gray-400">
                        <RefreshCw size={14} className="animate-spin-slow" />
                        Synchronizing state...
                    </div>
                </div>
            </div>

            {/* Browser Window Mockup */}
            <div className="flex-1 max-w-7xl mx-auto w-full mb-8 relative group">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full h-full bg-[#1A1A1A] rounded-3xl border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
                >
                    {/* Browser Chrome */}
                    <div className="h-12 bg-white/5 border-b border-white/5 flex items-center px-6 gap-4">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="flex-1 max-w-md bg-neon-dark/50 px-4 py-1.5 rounded-lg border border-white/5 text-[10px] text-gray-500 flex items-center gap-2">
                            https://jihane.dev/demo/{project.id}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 relative bg-neon-dark overflow-y-auto custom-scrollbar">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-20 text-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="w-32 h-32 border-4 border-dashed border-neon-purple/50 rounded-full flex items-center justify-center mb-8"
                            >
                                <div className="text-neon-purple font-bold">DEMO</div>
                            </motion.div>
                            <h2 className="text-3xl font-bold mb-4">Interactive Demo Interface</h2>
                            <p className="text-gray-400 max-w-lg mb-8">
                                For security and hosting reasons, the actual live environment is loaded on-demand.
                                In a production setting, this would be an <strong>iframe</strong> or a <strong>redirected container</strong> showcasing the {project.title}.
                            </p>
                            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="text-neon-purple font-bold text-2xl mb-1">99.9%</div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-tighter">Uptime</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="text-neon-purple font-bold text-2xl mb-1">0.2s</div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-tighter">Latency</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Floating Glow */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-purple/20 blur-[150px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
        </div>
    );
};

export default LiveDemo;
