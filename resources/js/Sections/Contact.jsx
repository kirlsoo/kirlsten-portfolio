import React from 'react';
import Card from '../Components/Card';
import { FaLinkedinIn, FaGithub, FaMediumM } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className="theme-lblue min-h-screen flex items-center justify-center py-12">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col items-center">
                {/* The main card container */}
                <Card className="glass p-12 w-full max-w-lg mb-8">
                    <h2 className="text-h2 font-bold mb-6 text-primary-dblue">Say Hi!</h2>
                    <form className="space-y-6">
                        {/* Input fields */}
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full bg-white/20 border border-white/30 rounded-lg p-3 placeholder-primary-dblue text-primary-dblue focus:outline-none focus:border-primary-dblue"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-white/20 border border-white/30 rounded-lg p-3 placeholder-primary-dblue text-primary-dblue focus:outline-none focus:border-primary-dblue"
                        />
                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="w-full bg-white/20 border border-white/30 rounded-lg p-3 placeholder-primary-dblue text-primary-dblue focus:outline-none focus:border-primary-dblue"
                        ></textarea>
                        
                        {/* Submit button */}
                        <button type="submit" className="btn-primary w-full">Send</button>
                    </form>
                </Card>

                {/* Social icons */}
                <div className="flex space-x-6">
                    <a href="#" className="p-3 bg-white/20 rounded-lg backdrop-blur-md text-primary-dblue hover:scale-110 transition-transform">
                        <FaLinkedinIn size={24} />
                    </a>
                    <a href="#" className="p-3 bg-white/20 rounded-lg backdrop-blur-md text-primary-dblue hover:scale-110 transition-transform">
                        <FaMediumM size={24} />
                    </a>
                    <a href="#" className="p-3 bg-white/20 rounded-lg backdrop-blur-md text-primary-dblue hover:scale-110 transition-transform">
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
        </section>
    );
}