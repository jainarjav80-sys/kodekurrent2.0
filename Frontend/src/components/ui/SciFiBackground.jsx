import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import './SciFiBackground.css';

const sectionImages = {
    'home': "/spaceship-airlock.jpg",
    'about': "/spaceship-bridge.jpg",
    'timeline': "/spaceship-corridor.jpg",
    'sponsors': "/spaceship-cargo.jpg",
    'prizes': "/spaceship-cargo.jpg",
    'gallery': "/spaceship-engine.jpg",
    'team': "/spaceship-engine.jpg",
    'faq': "/spaceship-engine.jpg",
    'contact': "/spaceship-medbay.jpg"
};

const SciFiBackground = () => {
    const containerRef = useRef(null);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        const sections = document.querySelectorAll('section[id], div[id]');
        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const xRot = (clientY / innerHeight - 0.5) * 4;
            const yRot = (clientX / innerWidth - 0.5) * -4;

            containerRef.current.style.transform = `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale(1.05)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="scifi-bg-viewport">
            {/* Global Scanline Effect */}
            <div className="scifi-scanline" />

            <div className="scifi-bg-container" ref={containerRef}>
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={activeSection}
                        initial={{ clipPath: 'inset(100% 0% 0% 0%)', opacity: 0, scale: 1.1 }}
                        animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, scale: 1 }}
                        exit={{ clipPath: 'inset(0% 0% 100% 0%)', opacity: 0, scale: 1.1 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="scifi-bg-layer"
                        style={{
                            backgroundImage: `url(${sectionImages[activeSection] || sectionImages['home']})`,
                            zIndex: 1,
                            filter: 'brightness(0.7) contrast(1.1) saturate(0.9)'
                        }}
                    >
                        {/* Shutter effect overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.15, 0] }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0 bg-white/5 pointer-events-none z-10"
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="scifi-bg-overlay-glow" />
                <div className="scifi-bg-particles" />
            </div>
        </div>
    );
};

export default SciFiBackground;
