import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Code2, Layout, Zap, Database } from 'lucide-react';
import { projects } from '../data/projects';
import Button from './Button';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-neon-dark text-white p-4">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link to="/" className="text-neon-purple hover:underline flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neon-dark text-white pt-32 pb-20 px-4">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-400 hover:text-neon-purple transition-colors group mb-8"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </button>

                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-3 mb-8">
                        {project.tech.map(t => (
                            <span key={t} className="px-4 py-2 rounded-xl bg-neon-purple/10 text-neon-purple border border-neon-purple/20 text-sm font-semibold">
                                {t}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative rounded-3xl overflow-hidden border border-white/10 mb-16 aspect-video"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neon-dark via-transparent to-transparent opacity-60" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-16">
                    <div className="md:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Layout className="text-neon-purple" /> Overview
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {project.longDescription}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Code2 className="text-neon-purple" /> Case Study
                            </h2>
                            <div className="prose prose-invert max-w-none text-gray-400">
                                <p className="mb-4">
                                    {project.caseStudy}
                                </p>
                                <p>
                                    The development process focused heavily on <strong>scalability</strong> and <strong>clean architecture</strong>.
                                    By leveraging modern frameworks and industry-standard practices, we achieved a result that is not only functional but also highly maintainable.
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="space-y-8">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 sticky top-32">
                            <h3 className="text-xl font-bold mb-6">Execution</h3>
                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-neon-purple/10 text-neon-purple">
                                        <Zap size={18} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Performance</h4>
                                        <p className="text-sm text-gray-400">Optimized for rapid response and smooth transitions.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-neon-purple/10 text-neon-purple">
                                        <Database size={18} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Security</h4>
                                        <p className="text-sm text-gray-400">Robust authentication and data protection layers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <Button
                                    onClick={() => navigate(`/demo/${project.id}`)}
                                    className="w-full justify-center flex items-center gap-2"
                                >
                                    Live Demo <ExternalLink size={18} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
