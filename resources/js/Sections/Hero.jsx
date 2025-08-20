import React from 'react';
import WaveUp from '../Components/WaveUp';
import styles from './Hero.module.css';

export default function Hero() {
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
            <div className="absolute bottom-0 left-0 right-0 lg:h-40 z-0">
                <WaveUp />
            </div>
        </section>
    );
}