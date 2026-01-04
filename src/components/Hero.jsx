import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center relative bg-neon-dark overflow-hidden pt-20 px-6 md:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-purple/10 via-transparent to-transparent opacity-50"></div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 text-center md:text-left flex-1"
            >
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white leading-tight">
                    Hi, I'm <span className="text-neon-purple neon-glow">Jihane</span>
                </h1>

                <div className="h-12 mb-8">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-xl md:text-2xl text-gray-300 font-light tracking-widest uppercase"
                    >
                        Fullstack Developer | Creative Thinker
                    </motion.p>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                    <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                        View My Work
                    </Button>
                    <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Get in Touch
                    </Button>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative mt-12 md:mt-0 flex-1 flex justify-center items-center"
            >
                {/* Decorative background circle */}
                <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse"></div>

                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 2, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="relative z-10 w-64 h-64 md:w-96 md:h-96 overflow-hidden rounded-2xl border-2 border-neon-purple/50 shadow-[0_0_30px_rgba(157,0,255,0.3)]"
                >
                    <img
                        src={profileImg}
                        alt="Jihane"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Floating elements */}
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-neon-dark border border-neon-purple rounded-lg flex items-center justify-center z-20"
                >
                    <div className="text-neon-purple font-bold">JS</div>
                </motion.div>
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                    className="absolute -bottom-6 -left-6 w-16 h-16 bg-neon-dark border border-neon-purple rounded-full flex items-center justify-center z-20"
                >
                    <div className="text-neon-purple font-bold text-xl">{"</>"}</div>
                </motion.div>
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-10"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <svg className="w-8 h-8 text-neon-purple animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </motion.div>
        </section>
    );
};

export default Hero;
