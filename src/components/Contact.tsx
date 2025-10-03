"use client";

import Image from "next/image";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };
    
    return (
        <div className="relative px-5 bg-[var(--background)] ">
            <div className="absolute inset-0">
                <Image
                src="/logo.png" // your background image
                alt="Background"
                fill
                className="object-cover object-center filter blur-md opacity-100"
                />
            </div>
            <div className="relative flex flex-col items-center">
                

                <div className="w-full max-w-3xl bg-[var(--foreground)] border border-[var(--primaryBlue)] shadow-3xl rounded-xl p-8 px-15">
                    <h1 className="font-bold text-[28px] text-[var(--background)] mb-8 text-center">Contact Us</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-[var(--background)]">
                        <div className="flex flex-col">
                        <label className="mb-1 font-semibold ">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="p-3 border border-[var(--primaryBlue)] rounded-full bg-[var(--background)] text-gray-950 focus:outline-none focus:ring-2 focus:ring-[var(--primaryBlue)] px-5"
                            placeholder="Your Name"
                            required
                        />
                        </div>

                        <div className="flex flex-col">
                        <label className="mb-1 font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-3 border border-[var(--primaryBlue)] rounded-full bg-[var(--background)] text-gray-950 focus:outline-none focus:ring-2 focus:ring-[var(--primaryBlue)] px-5"
                            placeholder="Your Email"
                            required
                        />
                        </div>

                        <div className="flex flex-col">
                        <label className="mb-1 font-semibold ]">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="p-3 border border-[var(--primaryBlue)] rounded-4xl bg-[var(--background)] text-gray-950 focus:outline-none focus:ring-2 focus:ring-[var(--primaryBlue)] px-5"
                            placeholder="Your Message"
                            required
                        />
                        </div>

                        <button
                        type="submit"
                        className="bg-[var(--primaryBlue)] text-gray-950 font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition"
                        >
                        Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;