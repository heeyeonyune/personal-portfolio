'use client';

import { motion } from 'framer-motion';
//import { image } from 'framer-motion/client';
import Image from 'next/image';
//import { useState } from 'react';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ once: true }} 
                    className="text-3xl font-bold mb-12 text-center"
                >
					💡 &nbsp; Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{[
						{
							title: 'Flag Guessing Game',
							description:
								'iOS quiz game where users match country names to flags. Built with SwiftUI and local JSON dataset.',
							details: [
								'Clean SwiftUI interface with modular architecture',
								'Offline play using local JSON flag dataset',
								'Easy extension with scoreboard and new flags',
							],
							tech: ['Swift', 'SwiftUI', 'Xcode', 'JSON'],
							image: '/flag-game.png',
						},
						{
							title: "Bard's Brain (Team Project)",
							description:
								'AI-powered D&D assistant generating fantasy worlds and characters. Integrated Gemini API + Imagen.',
							details: [
								'Automated creative content generation for Dungeon Masters',
								'Gemini API for detailed text-based content',
								'Imagen for AI-generated fantasy visuals',
							],
							tech: ['Python', 'Gemini API', 'Imagen', 'Streamlit', 'HTML/CSS'],
							image: '/flag-game.png',
						},
						{
							title: 'Study Runner (Team Project)',
							description:
								'2D educational game converting user notes into MCQs with AI. Built with Godot & OpenAI API.',
							details: [
								'Quiz generation using GPT-3.5-turbo',
								'Gate-based answer selection with real-time JSON handling',
								'Blended education with engaging gameplay',
							],
							tech: ['Godot', 'GDScript', 'OpenAI API', 'JSON'],
							image: '/flag-game.png',
						},
						{
							title: 'Library Website',
							description:
								'Full-stack web application for book search, reservations, and user management.',
							details: [
								'User registration, login, and search system',
								'Strong validation with password verification',
								'Database managed via phpMyAdmin',
							],
							tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
							image: '/flag-game.png',
						},
						{
							title: 'Sorting Algorithm',
							description:
								'Sorting tool for product datasets across production lines with multiple algorithm implementations.',
							details: [
								'Implemented Merge Sort, Binary Search, and Linear Search',
								'Performance comparison across algorithms',
								'Circular Queue integration for efficient data handling',
							],
							tech: ['C'],
							image: '/flag-game.png',
						},
						{
							title: 'Fruit Gambits (Team Project)',
							description:
								'Microcontroller-based fruit catching game with sound effects and GPIO handling.',
							details: [
								'Developed using C and Assembly with PlatformIO',
								'Integrated LCD screen, breadboard, and GPIO inputs',
								'Implemented win/loss logic and sound effects',
							],
							tech: ['C', 'Assembly', 'PlatformIO', 'MCU'],
							image: '/flag-game.png',
						},
						{
							title: 'National Museum of Korea Website',
							description:
								'Responsive web page introducing the National Museum of Korea with interactive design.',
							details: [
								'Built with HTML, CSS, and JavaScript',
								'Focused on accessibility and navigation',
								'Enhanced engagement with visuals and clean design',
							],
							tech: ['HTML', 'CSS', 'JavaScript'],
							image: '/flag-game.png',
						},
					].map((project, index) => (
						<div
							key={index}
							className="group [perspective:1000px] h-[350px]"
						>
							<div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
							{/* Front */}
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
							>
								<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
								<p className="text-gray-400 mb-6">{project.description}</p>
								<div className="mb-6">
									<h4 className="text-lg font-semibold mb-2">Highlights:</h4>
									<ul className="list-disc list-inside space-y-2 text-gray-300">
										{project.details.map((detail, i) => (
											<li key={i}>{detail}</li>
										))}
									</ul>
								</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span
										key={i}
										className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20"
									>
										{tech}
									</span>
								))}
							</div>
						</motion.div>
						{/* Back */}
						<div className="absolute inset-0 rounded-xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-contain bg-black"
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}