'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2 
					initial={{ opacity: 0 }} 
					whileInView={{ opacity: 1 }} 
					viewport={{ once: true }} 
					className="text-3xl font-bold mb-12 text-center"
				>
					🚀 &nbsp;Impact & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* Academic Performance */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Academic Performance</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Coursework</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Strong foundation in Java, Python, and Software Engineering</li>
									<li>• Completed advanced courses in Algorithms and Databases</li>
									<li>• Expected graduation: 2027</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Projects</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Built library management system in Java (OOP, OCL constraints)</li>
									<li>• Implemented CSV data processor with Java Streams</li>
									<li>• Developed FastAPI backend with AI integration (Hackathon)</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Hackathons & Activities */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Hackathons & Activities</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Google AI Hackathon 2025 — June 2025</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Project: <em>&quot;Bard’s Brain&quot;</em> – AI-powered D&D world and character generator</li>
									<li>• Role: Backend Developer (FastAPI, Gemini, Imagen API)</li>
									<li>• Built REST API integrating AI text & image generation</li>
								</ul>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Activities</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Participated in multiple tech events and leadership programs, including Workday Future Females in Tech 2025</li>
									<li>• Engaged in workshops, UX design thinking, and technical interview sessions</li>
									<li>• Networked with professionals and gained hands-on experience in problem-solving and development</li>
								</ul>
							</motion.div>

						</div>
					</div>

					{/* Skills Growth */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Skills Growth</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Technical Skills</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Proficient in Java, Python, JavaScript</li>
									<li>• Familiar with Docker, REST APIs, SQL</li>
									<li>• Learning cloud computing and DevOps tools</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Soft Skills</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Team collaboration from group projects</li>
									<li>• Problem-solving in hackathon settings</li>
									<li>• Strong motivation to grow as a backend engineer</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
<<<<<<< HEAD
}
=======
}
>>>>>>> 7698cc941a6835a58b7432146da2d9579932cf82
