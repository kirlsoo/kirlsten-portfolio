// resources/js/Sections/Hero.jsx
import React from 'react';
import WaveUp from '../Components/WaveUp';
import styles from './Hero.module.css';
import PuzzlePiece from '../Components/PuzzlePiece';

// Corrected function signature to accept the nextSectionRef prop
export default function Hero({ nextSectionRef }) { 
    // Function to scroll to the next section
    const scrollToNextSection = () => {
        // Check if the ref has a value before trying to access it
        if (nextSectionRef.current) {
            nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="theme-dblue min-h-screen relative flex items-center justify-center text-center px-4">
            <div className="flex flex-col lg:flex-row lg:gap-8">
                <div className="w-full lg:w-1/2 p-4">
                    <div className="w-2/3 mx-auto lg:ml-auto">
                        <img src="/images/profile-photo.png" alt="My Profile Photo" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 z-10">
                    <h1 className="text-h1 font-bold mb-4">
                        I CAN DO SOME STUFF
                    </h1>
                    <h2 className="text-accent">
                        Looking to be hired by companies that want to create things with me
                    </h2>
                </div>
            </div>
            {/* The puzzle piece */}
            <PuzzlePiece onComplete={scrollToNextSection} />
            {/* The target area for the puzzle piece (adjust position as needed) */}
            <div 
                id="puzzle-target" 
                className="absolute w-20 h-20 border-2 border-dashed border-accent" 
                style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
            ></div>
            <div className="absolute bottom-0 left-0 right-0 lg:h-40 z-0">
                <WaveUp />
            </div>
        </section>
    );
}