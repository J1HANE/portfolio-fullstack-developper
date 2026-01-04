import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import CTA from './CTA';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <CTA />
            <Contact />
        </>
    );
};

export default Home;
