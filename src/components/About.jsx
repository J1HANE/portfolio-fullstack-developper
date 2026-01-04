import React from 'react';
import { motion } from 'framer-motion';

const techStack = {
    "Front-End": "HTML5, CSS3, JavaScript, TypeScript, React, Vue.js, Angular, Livewire, Bootstrap, TailwindCSS, SASS, JQuery",
    "Back-End": "PHP, Laravel, Node.js, Express.js, Java, Spring Boot, C, C#, Python, Django, Flask, Ruby, Ruby on Rails, Go, Rust",
    "Databases": "MySQL, PostgreSQL, SQL Server, SQLite, MongoDB, Firebase, Oracle",
    "DevOps & Tools": "Git, GitHub, GitLab, Docker, Linux, Apache, Postman, Figma, Notion, Jira, Trello, npm, yarn, Composer, Maven, Gradle",
    "Mobile": "React Native, Kotlin",
    "Autres": "REST API, JWT, UML"
};

const About = () => {
    return (
        <section id="about" className="py-20 bg-neon-dark text-white px-4 md:px-12">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-4xl font-bold mb-12 text-center md:text-left"
                >
                    About <span className="text-neon-purple">Me</span>
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Fullstack Developer</h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Hi! I’m Jihane. I’m a developer who likes to keep things fun and creative.
                            I’m early in my journey, but I love exploring new technologies and learning as I go.
                            Constant growth and curiosity are what drive me forward.
                        </p>
                        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 neon-border relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <svg className="w-16 h-16 text-neon-purple" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L21.017 3V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 7.10457 3.017 6V3L10.017 3V15C10.017 18.3137 7.33071 21 4.017 21H3.017Z" />
                                </svg>
                            </div>
                            <p className="italic text-neon-purple font-medium text-lg min-h-[60px]">
                                "Constant growth and curiosity are what drive me forward."
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {Object.entries(techStack).map(([category, tech], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <h4 className="text-neon-purple font-bold mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-neon-purple rounded-full"></span>
                                    {category}
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                                    {tech}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
