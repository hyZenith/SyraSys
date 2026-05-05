
"use client";

import React, { useState } from "react";

export default function GetInTouch() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log("Form submitted:", formData);
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Main Container */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
				{/* Left Section - Contact Information */}
				<div className="bg-white px-8 py-16 md:px-12 md:py-24 flex flex-col justify-center">
					<h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight">
						Let's get<br />
						in touch
					</h1>

					<p className="text-xl md:text-2xl font-semibold mb-16 text-gray-900">
						Don't be afraid to<br />
						say hello with us!
					</p>

					{/* Contact Info */}
					<div className="space-y-8">
						{/* Phone */}
						<div>
							<p className="text-sm text-gray-600 mb-2">Phone</p>
							<a href="tel:+2578365379" className="text-lg md:text-xl font-semibold text-gray-900 hover:text-[#d7ff5f] transition-colors">
								+(2) 578-365-379
							</a>
						</div>

						{/* Email */}
						<div>
							<p className="text-sm text-gray-600 mb-2">Email</p>
							<a href="mailto:hello@slabs.com" className="text-lg md:text-xl font-semibold text-gray-900 hover:text-[#d7ff5f] transition-colors">
								hello@slabs.com
							</a>
						</div>

						{/* Office */}
						<div>
							<p className="text-sm text-gray-600 mb-2">Office</p>
							<p className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
								230 Norman Street New York,
								<br />
								QC (USA) H8R 1A1
							</p>
							<a
								href="https://maps.google.com"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-gray-900 hover:text-[#d7ff5f] transition-colors underline"
							>
								See on Google Map
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-6" />
								</svg>
							</a>
						</div>
					</div>
				</div>

				{/* Right Section - Contact Form */}
				<div className="bg-[#0a0c14] px-8 py-16 md:px-12 md:py-24 flex flex-col justify-center">
					{/* Header with Arrow */}
					<div className="flex items-start gap-4 mb-12">
						<svg className="w-6 h-6 md:w-8 md:h-8 text-[#d7ff5f] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
						</svg>
						<p className="text-lg md:text-xl text-gray-300 leading-relaxed">
							Great! We're excited to hear from you and let's start something special together. call us for any inquiry.
						</p>
					</div>

					{/* Form */}
					<form onSubmit={handleSubmit} className="space-y-6">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Contact</h2>

						{/* Name and Email Row */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label htmlFor="name" className="block text-sm text-gray-400 mb-2">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full bg-transparent border-b border-gray-600 pb-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d7ff5f] transition-colors"
									placeholder="Your name"
								/>
							</div>
							<div>
								<label htmlFor="email" className="block text-sm text-gray-400 mb-2">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full bg-transparent border-b border-gray-600 pb-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d7ff5f] transition-colors"
									placeholder="your@email.com"
								/>
							</div>
						</div>

						{/* Phone and Subject Row */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
									Phone
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									className="w-full bg-transparent border-b border-gray-600 pb-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d7ff5f] transition-colors"
									placeholder="+1 (555) 000-0000"
								/>
							</div>
							<div>
								<label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									className="w-full bg-transparent border-b border-gray-600 pb-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d7ff5f] transition-colors"
									placeholder="Subject"
								/>
							</div>
						</div>

						{/* Message */}
						<div>
							<label htmlFor="message" className="block text-sm text-gray-400 mb-2">
								Tell us about your interested in
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								rows={4}
								className="w-full bg-transparent border-b border-gray-600 pb-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d7ff5f] transition-colors resize-none"
								placeholder="Tell us more..."
							/>
						</div>

						{/* Submit Button */}
						<div className="pt-6">
							<button
								type="submit"
								className="w-full bg-[#d7ff5f] text-black font-bold py-4 px-6 rounded-lg hover:bg-[#c5ff00] transition-colors duration-300 text-lg"
							>
								Send to us
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}