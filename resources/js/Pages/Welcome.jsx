import React from 'react';
import Hero from '../Sections/Hero';
import AboutMe from '../Sections/AboutMe';
import Projects from '../Sections/Projects';
import Contact from '../Sections/Contact';
import WhatIDo from '../Sections/WhatIDo';
import { Head } from '@inertiajs/react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Kirlsten's Portfolio" />
            <div className="min-h-screen bg-gray-100 dark:bg-white">
                <Hero />
                <WhatIDo />
                <AboutMe />
                <Projects />
                <Contact />
            </div>
        </>
    );
}