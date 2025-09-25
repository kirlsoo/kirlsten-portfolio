// resources/js/Sections/Hero.jsx
import React, { useState, useEffect } from 'react';
import WaveUp from '../Components/WaveUp';
import PuzzlePiece from '../Components/PuzzlePiece';

export default function Hero({ nextSectionRef }) {
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // run once on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Function to scroll to the next section
    const scrollToNextSection = () => {
        if (nextSectionRef.current) {
            nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="theme-dblue min-h-screen relative flex items-center justify-center text-center px-4">
            <div className="flex flex-col lg:flex-row lg:gap-8">
                {/* Left: Profile */}
                <div className="w-full lg:w-1/2 p-4">
                    <div className="w-2/3 mx-auto lg:ml-auto">
                        <img src="/images/profile-photo.png" alt="My Profile Photo" />
                    </div>
                </div>

                {/* Right: Text */}
                <div className="w-full lg:w-1/2 z-10">
                    <h1 className="text-h1 font-oxygen font-bold mb-4">
                        I'm KRISTEN,
                    </h1>
                    <h2 className="text-accent mb-6">
                        Software Engineer with 3 years of professional experience designing, developing,
                        and maintaining web and software applications.
                    </h2>
                    <button className="theme-dblue btn-secondary rounded-lg px-6 py-3">
                        <a href="https://drive.google.com/file/d/13s7oC4otqfPqYs23uEvB2cqvj-iaEkQH/view?usp=sharing" target="_blank">
                            View my Resume
                        </a>
                    </button>
                </div>
            </div>

            {/* Puzzle only on desktop */}
            {!isMobile && (
                <>
                    <PuzzlePiece onComplete={scrollToNextSection} />
                    <div
                        id="puzzle-target"
                        className="absolute w-20 h-20 border-2 border-dashed border-accent
                                   left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    ></div>
                </>
            )}

            <div className="absolute bottom-0 left-0 right-0 lg:h-40 z-0">
                <WaveUp />
            </div>
        </section>
    );
}
