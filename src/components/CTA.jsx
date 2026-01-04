import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const CTA = () => {
    return (
        <section className="py-20 bg-neon-dark relative overflow-hidden">
            <div className="absolute inset-0 bg-neon-purple/5 pointer-events-none blur-3xl"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="p-12 rounded-3xl bg-white/5 border border-neon-purple/30 text-center backdrop-blur-xl"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Need Something <span className="text-neon-purple">Special?</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                        I invite you to send me your needed work because I'll give you
                        something unique that fits your needs perfectly. Let's create something extraordinary together.
                    </p>

                    <div className="flex justify-center">
                        <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Start a Project
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
