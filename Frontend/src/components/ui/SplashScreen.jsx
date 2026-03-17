import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 1200); // Buffer for takeoff animation
                    return 100;
                }
                return prev + Math.random() * 10;
            });
        }, 150);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="splash-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="splash-content">
                <div className="spaceship-container">
                    <motion.div
                        className="spaceship"
                        animate={progress >= 100 ? {
                            y: -1000,
                            scale: 0.5,
                            opacity: 0
                        } : {
                            y: [0, -5, 0],
                        }}
                        transition={progress >= 100 ? {
                            duration: 1.5,
                            ease: "easeIn"
                        } : {
                            duration: 2,
                            repeat: Infinity
                        }}
                    >
                        {/* Simple SVG Spaceship */}
                        <svg width="60" height="100" viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 0L55 80H5L30 0Z" fill="#A855F7" />
                            <path d="M30 10L50 75H10L30 10Z" fill="#C084FC" />
                            <rect x="25" y="80" width="10" height="15" fill="#6B21A8" />
                            <circle cx="30" cy="50" r="5" fill="white" opacity="0.5" />
                            {/* Flame animation if progress >= 100 */}
                            {progress >= 100 && (
                                <motion.path
                                    d="M20 95L30 120L40 95H20Z"
                                    fill="#FACC15"
                                    animate={{ scaleY: [1, 1.5, 1] }}
                                    transition={{ duration: 0.2, repeat: Infinity }}
                                />
                            )}
                        </svg>
                    </motion.div>
                </div>

                <h1 className="splash-logo font-pixel text-primary glitch-text" data-text="ENTER THE LABYRINTH">
                    ENTER THE LABYRINTH
                </h1>

                <div className="loading-bar-container">
                    <div
                        className="loading-bar"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <p className="loading-text font-mono text-xs">
                    {progress < 100 ? `PREPARING THRUSTERS... ${Math.round(progress)}%` : "READY FOR TAKEOFF"}
                </p>
            </div>
        </motion.div>
    );
};

export default SplashScreen;
