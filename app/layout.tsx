import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Heeyeon Yoon - Computer Science Student & Aspiring Software Developer',
	description:
		'Hi 😊 Welcome to my portfolio! I am Heeyeon Yoon, a passionate computer science student aspiring to become a software developer. I enjoy designing efficient and scalable solutions, writing clean code, and tackling complex challenges with creativity 🚀',
	keywords: [
		'Heeyeon Yoon',
		'Software Developer',
		'Backend Developer',
		'Computer Science Student',
		'System Architecture',
		'API Development',
		'Database Design',
		'Cloud Computing',
		'Microservices',
		'DevOps',
		'Java',
		'Python',
		'C',
		'JavaScript',
		'PHP',
		'Swift',
		'GDScript',
		'Assembly',
		'System Design',
		'Backend Architecture',
	],
	authors: [{ name: 'Heeyeon Yoon' }],
	creator: 'Heeyeon Yoon',
	openGraph: {
		title: 'Heeyeon Yoon - Software Developer Portfolio',
		description: 'I am a Computer Science student passionate about software engineering, algorithms, and problem-solving. Explore my projects, technical skills, and experience.',
		url: 'https://your-domain.com',
		siteName: 'Heeyeon Yoon - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Heeyeon Yoon - Software Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Heeyeon Yoon - Software Developer Portfolio',
		description: 'I am a Computer Science student passionate about software engineering, algorithms, and problem-solving. Explore my projects, technical skills, and experience.',
		// creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
