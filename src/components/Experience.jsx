import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Frontend Developer Intern",
        company: "XYZ Company",
        date: "Jan 2025 – Jun 2025",
        desc: "Developed responsive UI components using React and integrated RESTful APIs."
    },
    {
        role: "Lead Developer",
        company: "ENSART Club Projects",
        date: "2024 – 2025",
        desc: "Led a team of students to build interactive web applications for campus events."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-neon-dark px-4 overflow-hidden">
            <div className="max-w-4xl mx-auto relative">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Work <span className="text-neon-purple">Experience</span>
                </motion.h2>

                {/* Timeline Line */}
                <div className="absolute left-1/2 top-40 bottom-0 w-1 bg-neon-purple/20 -translate-x-1/2 hidden md:block">
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        transition={{ duration: 1.5 }}
                        className="w-full bg-neon-purple shadow-[0_0_15px_#9D00FF]"
                    />
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="hidden md:block w-1/2" />
                            <div className="z-10 w-4 h-4 rounded-full bg-neon-purple shadow-[0_0_10px_#9D00FF] absolute left-1/2 -translate-x-1/2 hidden md:block" />
                            <div className="w-full md:w-1/2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-purple/30 transition-colors">
                                <span className="text-neon-purple text-sm font-mono mb-2 block">{exp.date}</span>
                                <h3 className="text-xl font-bold">{exp.role}</h3>
                                <p className="text-gray-400 font-medium mb-2">{exp.company}</p>
                                <p className="text-gray-300 text-sm">{exp.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
