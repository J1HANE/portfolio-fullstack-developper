import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = "", variant = "primary" }) => {
    const variants = {
        primary: "bg-neon-purple text-white shadow-[0_0_15px_rgba(157,0,255,0.5)] hover:shadow-[0_0_25px_rgba(157,0,255,0.8)]",
        outline: "border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white shadow-[0_0_10px_rgba(157,0,255,0.3)] hover:shadow-[0_0_20px_rgba(157,0,255,0.6)]"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClick}
            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${variants[variant]} ${className}`}
        >
            {children}
        </motion.button>
    );
};

export default Button;
