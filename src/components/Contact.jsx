import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { Mail, Github, Linkedin, Twitter, Send, Loader2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Something went wrong. Make sure the server is running.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-neon-dark px-4 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Get In <span className="text-neon-purple">Touch</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Let's talk!</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas or
                            opportunities to be part of your visions.
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:jihaneelhamdaoui2@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-neon-purple transition-colors group">
                                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-neon-purple/10 border border-white/10 group-hover:border-neon-purple/30">
                                    <Mail size={20} />
                                </div>
                                <span className="text-sm md:text-base">jihaneelhamdaoui2@gmail.com</span>
                            </a>
                            <div className="flex gap-4 pt-4">
                                {[
                                    { icon: <Github size={20} />, link: "https://github.com/J1HANE" },
                                    { icon: <Linkedin size={20} />, link: "#" },
                                    { icon: <Twitter size={20} />, link: "#" }
                                ].map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-neon-purple/50 text-gray-300 hover:text-neon-purple transition-all"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Name"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-neon-purple focus:outline-none transition-colors text-white placeholder-gray-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Email"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-neon-purple focus:outline-none transition-colors text-white placeholder-gray-500"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    placeholder="Message"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-neon-purple focus:outline-none transition-colors text-white placeholder-gray-500"
                                ></textarea>
                            </div>
                            <Button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2"
                                disabled={loading}
                            >
                                {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                                {loading ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>

                        {status.message && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`text-center p-3 rounded-lg ${status.type === 'success' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}
                            >
                                {status.message}
                            </motion.p>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
