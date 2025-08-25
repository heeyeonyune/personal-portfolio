'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background gradients */}
			<div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>

			{/* Content */}
			<div className="relative z-10 max-w-4xl w-full mx-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"
				>
					{/* Window controls */}
					<div className="flex items-center gap-2 mb-4">
						<div className="w-3 h-3 rounded-full bg-red-500" />
						<div className="w-3 h-3 rounded-full bg-yellow-500" />
						<div className="w-3 h-3 rounded-full bg-green-500" />
					</div>
					{/* Intro */}
					<div className="font-mono">
						<p className="text-green-500">$ whoami</p>
						<h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Heeyeon Yoon 👩🏻‍💻</h1>
						<p className="text-gray-400 mb-2">💻 Computer Science Student | Aspiring Software Developer</p>
						<p className="text-gray-400 mb-6">
							🎓 Technological University Dublin — BSc in Computer Science (Expected Graduation: 2027)
						</p>
						<p className="text-green-500">$ skills</p>
						<div className="flex flex-wrap gap-2 mt-2">
							{/* Programming */}
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Java</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Python</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">C</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">JavaScript</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">PHP</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Swift</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">GDScript</span>
							
							{/* Tech */}
							<span className="px-3 py-1 bg-blue-500/10 rounded-md border border-blue-500/20">MySQL</span>
							<span className="px-3 py-1 bg-blue-500/10 rounded-md border border-blue-500/20">AWS</span>
							<span className="px-3 py-1 bg-blue-500/10 rounded-md border border-blue-500/20">OpenAI API</span>
							<span className="px-3 py-1 bg-blue-500/10 rounded-md border border-blue-500/20">Gemini API</span>
							<span className="px-3 py-1 bg-blue-500/10 rounded-md border border-blue-500/20">Godot Engine</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
