export enum STATUS {
	IN_PROGRESS,
	COMPLETED,
}

export type Project = {
	title: string;
	description: string;
	techStack: string[];
	githubUrl: string;
	status: STATUS;
	livePreviewUrl: string | null;
};

export const projects: Project[] = [
	// Featured — detailed on Dev's resume
	{
		title: 'Secure File Transfer System',
		description:
			'End-to-end encrypted file transfer platform using AES-256-GCM symmetric encryption and RSA-2048 key exchange, with SHA-256 integrity checks, Argon2id password hashing, role-based access control, and a tamper-evident, chain-hashed audit log.',
		techStack: ['Python', 'Flask', 'AES-256-GCM', 'RSA-2048'],
		githubUrl: 'https://github.com/DEVTHAKUR-90/Secure-File-Transfer-System',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},
	{
		title: 'ClipGuard',
		description:
			'Secure real-time data sync over WebSocket with a rotating 6-digit PIN system, QR-based device pairing, and timestamp/origin validation to block replay attacks and unauthorized sync requests.',
		techStack: ['Python', 'FastAPI', 'WebSocket'],
		githubUrl: 'https://github.com/DEVTHAKUR-90/ClipGuard',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},
	{
		title: 'Readme Studio',
		description:
			'A security-aware developer tool with a built-in secret scanner that uses Shannon entropy and regex to catch leaked API keys and tokens, plus diff-snapshot history for tracking document changes.',
		techStack: ['TypeScript', 'Next.js', 'Monaco Editor'],
		githubUrl: 'https://github.com/DEVTHAKUR-90/Readme-Studio',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},
	{
		title: 'HealthCare ML Predictor',
		description:
			'A Streamlit ML app that predicts disease from symptoms using an ensemble of Naive Bayes, Decision Tree, and Random Forest classifiers, reaching 91.3% accuracy across 40+ disease classes.',
		techStack: ['Python', 'Streamlit', 'scikit-learn', 'pandas'],
		githubUrl: 'https://github.com/DEVTHAKUR-90/HealthCare-ML-Predictor',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},

	// Rest of the repos
	{
		title: 'LateXStudiO',
		description:
			'A lightweight LaTeX editor built with vanilla JS, HTML, and CSS — no framework and no build step required.',
		techStack: ['JavaScript', 'HTML', 'CSS'],
		githubUrl: 'https://github.com/DEVTHAKUR-90/LateXStudiO',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},
	{
		title: 'Typing Practice',
		description:
			'A typing speed trainer built with Next.js and Tailwind CSS, animated with Framer Motion and backed by Zustand for state management.',
		techStack: ['TypeScript', 'Next.js', 'Framer Motion', 'Zustand'],
		githubUrl: 'https://github.com/DEVTHAKUR-90/Typing-Practice',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},
	{
		title: 'Resume Templates in LaTeX',
		description: 'A collection of prompt-driven LaTeX resume templates, generated and refined with Claude.',
		techStack: ['LaTeX'],
		githubUrl: 'https://github.com/DEVTHAKUR-90/Resume-Templates-in_LATEX_Format-',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},
	{
		title: '3D Portfolio',
		description:
			'An interactive 3D portfolio site built with Next.js, React, Three.js, and Tailwind CSS.',
		techStack: ['TypeScript', 'Next.js', 'Three.js', 'Tailwind CSS'],
		githubUrl: 'https://github.com/DEVTHAKUR-90/3D-portfolio',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},
	{
		title: 'OneDrive Nuke',
		description:
			'A PowerShell script that fully removes OneDrive from Windows via registry and Group Policy tweaks.',
		techStack: ['PowerShell'],
		githubUrl: 'https://github.com/DEVTHAKUR-90/ONEDRIVE-NUKE',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},
	{
		title: 'DevCache Cleaner',
		description:
			'A developer cache-cleaning utility with both a Node.js CLI and a companion React/Vite browser UI.',
		techStack: ['TypeScript', 'Node.js', 'React', 'Vite'],
		githubUrl: 'https://github.com/DEVTHAKUR-90/devcache-cleaner',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},
	{
		title: 'Calculator',
		description: 'A simple calculator app built with React, TypeScript, and Vite.',
		techStack: ['TypeScript', 'React', 'Vite'],
		githubUrl: 'https://github.com/DEVTHAKUR-90/calculator-ts-vite',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},
	{
		title: 'MedAI Disease Prediction System',
		description: 'A React-based disease prediction interface built with Vite and Tailwind CSS.',
		techStack: ['TypeScript', 'React', 'Vite', 'Tailwind CSS'],
		githubUrl: 'https://github.com/DEVTHAKUR-90/MedAI-AI-Disease-Prediction-System',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},
];
