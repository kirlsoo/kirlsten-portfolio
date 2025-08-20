import React from 'react';
import WaveDown from '../Components/WaveDown';
import Card from '../Components/Card';

export default function AboutMe() {
    return (
        <section id="about-me" className="theme-white min-h-screen relative flex items-center justify-center text-center">
            <div className="absolute top-0 left-0 right-0 lg:h-20 z-0">
                <WaveDown />
            </div>
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Main Flexbox container for the two halves of the screen */}
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* The left-half container for text (full width on mobile, half on desktop) */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-h1 font-bold mb-4">
                            About Me
                        </h1>
                        <h2 className="text-accent">
                            Random ass person I don't know what i'm doing sometimes
                        </h2>
                    </div>
                    <hr/>
                    {/* The right-half container for the cards (full width on mobile, half on desktop) */}
                    <div className="w-full lg:w-1/2">
                        <p> Meow meow meow meow meow meow Meow meow meow meow meow meow Meow meow meow meow meow meow Meow meow meow meow meow meow Meow meow meow meow meow meow Meow meow meow meow meow meow Meow meow meow meow meow meow </p>
                        <br/>
                        <p> Meow meow meow meow meow meow Meow meow meow meow meow meow Meow meow meow meow meow meow Meow meow meow meow meow meow Meow meow meow meow meow meow Meow meow meow meow meow meow Meow meow meow meow meow meow </p>
                    </div>
                </div>
            </div>
        </section>
    );
}