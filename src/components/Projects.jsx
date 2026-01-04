import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { projects } from '../data/projects';

const Projects = () => {
    const navigate = useNavigate();

    return (
        <section id="projects" className="py-20 bg-neon-dark px-4">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-20 text-center"
                >
                    My <span className="text-neon-purple">Projects</span>
                </motion.h2>

                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-neon-purple/50 transition-colors"
                        >
                            <div className="h-64 md:h-80 overflow-hidden relative">
                                <div className="absolute inset-0 bg-neon-purple/10 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                                />
                                <div className="absolute top-4 right-4 z-20">
                                    <div className="bg-neon-dark/80 backdrop-blur-md border border-neon-purple/30 px-4 py-1 rounded-full text-[10px] font-bold text-neon-purple uppercase tracking-widest">
                                        Project {index + 1}
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 md:p-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-neon-purple transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-3 mb-10">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs px-3 py-1.5 rounded-lg bg-neon-purple/10 text-neon-purple border border-neon-purple/20 font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <Button
                                        variant="outline"
                                        className="flex-1 py-3 text-base"
                                        onClick={() => navigate(`/project/${project.id}`)}
                                    >
                                        View Case Study
                                    </Button>
                                    <Button
                                        className="flex-1 py-3 text-base"
                                        onClick={() => navigate(`/demo/${project.id}`)}
                                    >
                                        Live Demo
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
