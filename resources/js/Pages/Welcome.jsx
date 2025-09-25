import React, { useRef } from 'react';
import Hero from '../Sections/Hero';
import AboutMe from '../Sections/AboutMe';
import Projects from '../Sections/Projects';
import Contact from '../Sections/Contact';
import WhatIDo from '../Sections/WhatIDo';
import { Head } from '@inertiajs/react';

export default function Welcome(props) {
    const whatIDoRef = useRef(null); // Create a ref for WhatIDo section

    return (
        <>
            <Head title="Kirlsten's Portfolio" />
            <div className="min-h-screen bg-gray-100 dark:bg-white">
                <Hero nextSectionRef={whatIDoRef}  />
                <WhatIDo ref={whatIDoRef} />
                <AboutMe />
                <Projects />
                <Contact />
            </div>
        </>
    );
}