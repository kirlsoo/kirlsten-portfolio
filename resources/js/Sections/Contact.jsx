import React, { useState } from 'react';
import Card from '../Components/Card';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("⏳ Sending...");
        try {
            const res = await fetch("/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (data.success) {
                setStatus("✅ Message sent successfully!");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("❌ Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setStatus("❌ Error sending message.");
        }
    };

    return (
        <section id="contact" className="theme-lblue min-h-screen flex items-center justify-center py-12">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col items-center">
                {/* The main card container */}
                <Card className="glass p-12 w-full max-w-lg mb-8">
                    <h2 className="text-h2 font-bold mb-6 text-primary-dblue">Say Hi!</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/20 border border-white/30 rounded-lg p-3 placeholder-primary-dblue text-primary-dblue"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/20 border border-white/30 rounded-lg p-3 placeholder-primary-dblue text-primary-dblue"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="4"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/20 border border-white/30 rounded-lg p-3 placeholder-primary-dblue text-primary-dblue"
                        ></textarea>
                        
                        <button type="submit" className="btn-primary w-full">Send</button>
                        {status && <p className="text-sm text-primary-dblue mt-2">{status}</p>}
                    </form>
                </Card>

                {/* Social icons */}
                <div className="flex space-x-6">
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
                       className="p-3 bg-white/20 rounded-lg backdrop-blur-md text-primary-dblue hover:scale-110 transition-transform">
                        <FaLinkedinIn size={24} />
                    </a>
                    <a href="mailto:your-email@example.com"
                       className="p-3 bg-white/20 rounded-lg backdrop-blur-md text-primary-dblue hover:scale-110 transition-transform">
                        <FaEnvelope size={24} />
                    </a>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                       className="p-3 bg-white/20 rounded-lg backdrop-blur-md text-primary-dblue hover:scale-110 transition-transform">
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
        </section>
    );
}
