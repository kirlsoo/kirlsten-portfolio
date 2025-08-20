// resources/js/Sections/WhatIDo.jsx

// Use React.forwardRef to pass the ref from Welcome.jsx
import React, { forwardRef } from 'react';
import Card from '../Components/Card';
import Blob from '../Components/Blob';

const WhatIDo = forwardRef((props, ref) => {
    return (
        // Attach the ref to the root element of your section
       <section id="what-i-do" ref={ref} className="theme-lblue min-h-screen relative flex items-center justify-center text-center">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Main Flexbox container for the two halves of the screen */}
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* The left-half container for text (full width on mobile, half on desktop) */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-h1 font-bold mb-4">
                            What I Do
                        </h1>
                        <p className="mb-12">
                            Looking to be hired by companies that want to create things with me
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        {/* The Blob is absolutely positioned and centered */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Blob className="z-0" />
                        </div>

                        {/* The grid of cards stays on top */}
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                            {/* The cards will automatically arrange themselves here */}
                            <Card className="glass">
                                <h3 className="text-xl text-primary-dblue font-bold mb-2">Language</h3>
                                <p className="text-gray-700">Description of service 1.</p>
                            </Card>
                            <Card className="glass">
                                <h3 className="text-xl text-primary-dblue font-bold mb-2">Frameworks</h3>
                                <p className="text-gray-700">Description of service 2.</p>
                            </Card>
                            <Card className="glass">
                                <h3 className="text-xl text-primary-dblue font-bold mb-2">Tools</h3>
                                <p className="text-gray-700">Description of service 3.</p>
                            </Card>
                            <Card className="glass">
                                <h3 className="text-xl text-primary-dblue font-bold mb-2">Databases</h3>
                                <p className="text-gray-700">Description of service 4.</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default WhatIDo;