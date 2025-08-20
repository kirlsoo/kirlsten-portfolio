import React from 'react';
import Card from '../Components/Card'; // Assuming you have the Card component

export default function Projects() {
    return (
        <section id="projects" className="theme-dblue py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-h1 text-center font-bold mb-8">Projects</h1>

                {/* Navigation for categories */}
                <nav className="flex justify-center space-x-6 mb-12">
                    {/* The text-primary-lblue class is a workaround as you haven't defined nav link styles */}
                    <a href="#" className="text-primary-lblue font-bold border-b-2 border-primary-lblue">
                        Web Dev
                    </a>
                    <a href="#" className="text-primary-lblue font-bold hover:border-b-2 hover:border-primary-lblue">
                        Web Dev
                    </a>
                    <a href="#" className="text-primary-lblue font-bold hover:border-b-2 hover:border-primary-lblue">
                        Upcoming
                    </a>
                </nav>

                {/* Project cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Each Card will represent a project */}
                    <Card className="bg-white/10 p-6 rounded-lg text-primary-white">
                        <div className="w-full h-40 bg-gray-400 mb-4 rounded-md"></div>
                        <h4 className="text-h4 font-bold text-primary-lblue mb-2">sub-header h4</h4>
                        <p className="text-body">Body Text. Tempus, id aliquam enim, velit risus, facilisis. Sed ut posuere vehicula elit, tincidunt fringilla tristique.</p>
                    </Card>
                    <Card className="bg-white/10 p-6 rounded-lg text-primary-white">
                        <div className="w-full h-40 bg-gray-400 mb-4 rounded-md"></div>
                        <h4 className="text-h4 font-bold text-primary-lblue mb-2">sub-header h4</h4>
                        <p className="text-body">Body Text. Tempus, id aliquam enim, velit risus, facilisis. Sed ut posuere vehicula elit, tincidunt fringilla tristique.</p>
                    </Card>
                    <Card className="bg-white/10 p-6 rounded-lg text-primary-white">
                        <div className="w-full h-40 bg-gray-400 mb-4 rounded-md"></div>
                        <h4 className="text-h4 font-bold text-primary-lblue mb-2">sub-header h4</h4>
                        <p className="text-body">Body Text. Tempus, id aliquam enim, velit risus, facilisis. Sed ut posuere vehicula elit, tincidunt fringilla tristique.</p>
                    </Card>
                    {/* Add more cards here */}
                </div>
            </div>
        </section>
    );
}