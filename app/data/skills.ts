export type SkillIcon = string; // Iconify icon name, e.g. "simple-icons:python"

export interface Skill {
	name: string;
	description: string;
	/** 0–100. Edit here to adjust proficiency shown on the site. Bar fill always reflects this value. */
	percentage: number;
	/** Overrides the "N%" label (e.g. "MAXED OUT") without changing the bar fill logic above. */
	displayProficiency?: string;
	icon: SkillIcon;
	/** Set true for icons that ship as a Lucide component instead of an Iconify name. */
	isLucide?: boolean;
}

export interface SkillCategory {
	title: string;
	emoji: string;
	skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
	{
		title: 'Programming Languages',
		emoji: '💻',
		skills: [
			{
				name: 'Python',
				description: 'General-purpose language behind my security tooling, automation scripts, and ML work.',
				percentage: 90,
				icon: 'simple-icons:python',
			},
			{
				name: 'Java',
				description: 'Object-oriented language used for coursework and general application development.',
				percentage: 60,
				icon: 'mdi:language-java',
			},
			{
				name: 'C',
				description: 'Low-level language for understanding memory, pointers, and how software actually runs.',
				percentage: 55,
				icon: 'simple-icons:c',
			},
			{
				name: 'C++',
				description: 'Extends C with object-oriented features for performance-sensitive programs.',
				percentage: 55,
				icon: 'simple-icons:cplusplus',
			},
			{
				name: 'PowerShell',
				description: 'Windows scripting for registry and Group Policy automation, like in OneDrive Nuke.',
				percentage: 70,
				icon: 'simple-icons:powershell',
			},
		],
	},
	{
		title: 'Web Technologies',
		emoji: '🌐',
		skills: [
			{
				name: 'JavaScript',
				description: 'The language behind every interactive interface I ship, from forms to real-time UI.',
				percentage: 80,
				icon: 'simple-icons:javascript',
			},
			{
				name: 'TypeScript',
				description: 'My default for anything beyond a small script — types catch bugs before runtime.',
				percentage: 88,
				icon: 'simple-icons:typescript',
			},
			{
				name: 'HTML5',
				description: 'Semantic structure for every page and component I build.',
				percentage: 85,
				icon: 'simple-icons:html5',
			},
			{
				name: 'CSS3',
				description: 'Styling, layout, and responsive design across every project.',
				percentage: 82,
				icon: 'simple-icons:css3',
			},
		],
	},
	{
		title: 'Frameworks & Libraries',
		emoji: '🧩',
		skills: [
			{
				name: 'React',
				description: 'Component-driven UIs for dashboards, tools, and prediction interfaces.',
				percentage: 85,
				icon: 'simple-icons:react',
			},
			{
				name: 'Vue.js',
				description: 'The framework behind this very portfolio — components, composables, and reactivity.',
				percentage: 80,
				icon: 'simple-icons:vuedotjs',
			},
			{
				name: 'Next.js',
				description: 'Full-stack React with routing and API routes for several of my projects.',
				percentage: 82,
				icon: 'simple-icons:nextdotjs',
			},
			{
				name: 'Tailwind CSS',
				description: 'Utility-first styling for fast, consistent, responsive interfaces.',
				percentage: 85,
				icon: 'simple-icons:tailwindcss',
			},
			{
				name: 'Node.js',
				description: 'Server-side JavaScript for CLIs and lightweight backend tooling.',
				percentage: 75,
				icon: 'simple-icons:nodedotjs',
			},
			{
				name: 'FastAPI',
				description: "Async Python APIs — the backbone of ClipGuard's real-time WebSocket sync.",
				percentage: 78,
				icon: 'simple-icons:fastapi',
			},
		],
	},
	{
		title: 'Data & ML',
		emoji: '📊',
		skills: [
			{
				name: 'Pandas',
				description: 'Data cleaning and transformation for structured datasets.',
				percentage: 75,
				icon: 'simple-icons:pandas',
			},
			{
				name: 'NumPy',
				description: 'Numerical computing underneath most of my data and ML work.',
				percentage: 72,
				icon: 'simple-icons:numpy',
			},
			{
				name: 'Scikit-learn',
				description:
					'Classification models — ensembled Naive Bayes, Decision Tree, and Random Forest for 91%+ accuracy.',
				percentage: 78,
				icon: 'simple-icons:scikitlearn',
			},
			{
				name: 'Power BI',
				description: 'Turning raw data into dashboards stakeholders can actually read.',
				percentage: 60,
				icon: 'simple-icons:powerbi',
			},
		],
	},
	{
		title: 'Databases',
		emoji: '🗄️',
		skills: [
			{
				name: 'MySQL',
				description: 'Relational data modeling and querying for application backends.',
				percentage: 75,
				icon: 'simple-icons:mysql',
			},
			{
				name: 'PostgreSQL',
				description: 'Relational database work where data integrity really matters.',
				percentage: 72,
				icon: 'simple-icons:postgresql',
			},
			{
				name: 'MongoDB',
				description: 'Document-based storage for flexible, schema-light data.',
				percentage: 60,
				icon: 'simple-icons:mongodb',
			},
		],
	},
	{
		title: 'Cybersecurity Arsenal',
		emoji: '🔐',
		skills: [
			{
				name: 'Linux',
				description: 'My daily-driver OS for development and security work.',
				percentage: 100,
				displayProficiency: 'MAXED OUT',
				icon: 'simple-icons:linux',
			},
			{
				name: 'Kali Linux',
				description: 'Penetration testing distro for reconnaissance, scanning, and exploitation labs.',
				percentage: 100,
				displayProficiency: 'MAXED OUT',
				icon: 'simple-icons:kalilinux',
			},
			{
				name: 'Wireshark',
				description: 'Packet-level traffic analysis for threat detection and debugging.',
				percentage: 100,
				displayProficiency: 'MAXED OUT',
				icon: 'simple-icons:wireshark',
			},
			{
				name: 'Burp Suite',
				description: 'Web app penetration testing — proxying, intercepting, and scanning requests.',
				percentage: 100,
				displayProficiency: 'MAXED OUT',
				icon: 'simple-icons:burpsuite',
			},
			{
				name: 'Nmap',
				description: 'Network scanning and reconnaissance for mapping hosts and open ports.',
				percentage: 100,
				displayProficiency: 'MAXED OUT',
				icon: 'Radar',
				isLucide: true,
			},
			{
				name: 'Metasploit',
				description: 'Exploitation framework for hands-on penetration testing practice.',
				percentage: 100,
				displayProficiency: 'MAXED OUT',
				icon: 'simple-icons:metasploit',
			},
			{
				name: 'OWASP',
				description: 'Building and testing against the OWASP Top 10 vulnerability classes.',
				percentage: 100,
				displayProficiency: 'MAXED OUT',
				icon: 'simple-icons:owasp',
			},
		],
	},
	{
		title: 'Development Tools',
		emoji: '🛠️',
		skills: [
			{
				name: 'Git',
				description: "Version control for every project I've ever shipped.",
				percentage: 85,
				icon: 'simple-icons:git',
			},
			{
				name: 'GitHub',
				description: 'Where all of my public repositories live and get reviewed.',
				percentage: 88,
				icon: 'simple-icons:github',
			},
			{
				name: 'VS Code',
				description: 'My primary editor, tuned with extensions for every language I use.',
				percentage: 82,
				icon: 'simple-icons:visualstudiocode',
			},
			{
				name: 'Postman',
				description: 'API testing and debugging for backend endpoints.',
				percentage: 68,
				icon: 'simple-icons:postman',
			},
			{
				name: 'Terminal',
				description: 'Linux CLI for everything from scripting to server management.',
				percentage: 80,
				icon: 'Terminal',
				isLucide: true,
			},
		],
	},
	{
		title: 'Virtualization & Lab',
		emoji: '🖥️',
		skills: [
			{
				name: 'VirtualBox',
				description: 'Isolated VMs for safely testing exploits and vulnerable environments.',
				percentage: 100,
				displayProficiency: 'MAXED OUT',
				icon: 'simple-icons:virtualbox',
			},
			{
				name: 'VMware',
				description: 'Virtualization for running lab environments and multiple OS setups.',
				percentage: 100,
				displayProficiency: 'MAXED OUT',
				icon: 'simple-icons:vmware',
			},
		],
	},
];
