export interface Job {
	role: string;
	company: string;
	dates: string;
	type: string;
	points: string[];
}

export interface SkillGroup {
	title: string;
	items: string[];
}

export interface EduItem {
	year: string;
	title: string;
	org: string;
}

export interface EduGroup {
	title: string;
	items: EduItem[];
}

export const site = {
	name: 'sam rivera',
	tagline: 'design / web / mobile',
	email: 'hello@example.com',
	availability: 'Currently taking on new projects',
	// Put your resume at public/resume.pdf (or change this path).
	resume: '/resume.pdf',
};

export const nav = [
	{ label: 'Home', href: '/' },
	{ label: 'Projects', href: '/projects' },
	{ label: 'Skills', href: '/skills' },
	{ label: 'Career', href: '/career' },
	{ label: 'Education', href: '/education' },
];

export const bio = [
	"I'm a designer and developer building websites and mobile apps for clients of all sizes. I work across the whole process, from scoping and wireframes through to shipping and maintaining production code.",
	'Day to day I work in React, Next.js and TypeScript, with a background in UX and UI design that helps me plan and design products, not just build them.',
];

export const homeCards = [
	{
		num: '01',
		title: 'Projects',
		href: '/projects',
		desc: 'Selected client and personal work across web and mobile.',
	},
	{
		num: '02',
		title: 'Skills',
		href: '/skills',
		desc: 'Front-end, back-end and mobile development with modern tools.',
	},
	{
		num: '03',
		title: 'Career',
		href: '/career',
		desc: 'Roles, teams and projects from freelance to technical lead.',
	},
	{
		num: '04',
		title: 'Education',
		href: '/education',
		desc: 'Certifications, conferences and ongoing development.',
	},
];

export const skillsIntro =
	'A breakdown of the tools and disciplines I use across the design and development lifecycle, from first wireframe to deployment.';

export const skills: SkillGroup[] = [
	{
		title: 'UX/UI Design',
		items: [
			'User journeys',
			'Wireframing',
			'Prototyping',
			'Figma',
			'Design systems',
			'Typography',
			'Responsive design',
		],
	},
	{
		title: 'Front-end',
		items: [
			'TypeScript',
			'React',
			'Next.js',
			'Vite',
			'TailwindCSS',
			'Sass/SCSS',
			'GSAP',
		],
	},
	{
		title: 'Back-end',
		items: [
			'Node.js',
			'PostgreSQL',
			'Prisma',
			'Firebase',
			'API development',
			'Payload CMS',
		],
	},
	{
		title: 'Mobile & DevOps',
		items: [
			'Ionic',
			'Capacitor',
			'Xcode',
			'Android Studio',
			'AWS',
			'Docker',
			'CI/CD',
		],
	},
];

export const careerIntro =
	'Fifteen years across agencies, product teams and freelance work, moving from front-end development into technical leadership.';

export const jobs: Job[] = [
	{
		role: 'Independent Contractor',
		company: 'Self-employed',
		dates: '2025 – Present',
		type: 'Freelance',
		points: [
			'Senior full-stack developer for a cloud platform connecting childcare centres with educators.',
			'Mobile app developer for a home fragrance brand.',
		],
	},
	{
		role: 'Technical Lead',
		company: 'Studio North',
		dates: '2018 – 2025',
		type: 'Full-time',
		points: [
			"Sole developer maintaining and building the agency's full website portfolio.",
			'Led the rebuild of a health and well-being app; promoted to Technical Lead in 2022.',
		],
	},
	{
		role: 'Front-end Developer',
		company: 'Brightline Software',
		dates: '2010 – 2017',
		type: 'Full-time',
		points: [
			'Built over 60 websites for government and higher education clients.',
			'Team lead for the professional services team.',
		],
	},
];

export const eduIntro =
	'Formal study, certifications and the conferences and courses that keep my skills current.';

export const eduGroups: EduGroup[] = [
	{
		title: 'Certifications',
		items: [
			{
				year: '2024',
				title: 'AWS Certified Developer – Associate',
				org: 'Amazon Web Services',
			},
			{
				year: '2021',
				title: 'Google UX Design Certificate',
				org: 'Google / Coursera',
			},
			{
				year: '2016',
				title: 'Bachelor of Information Technology',
				org: 'RMIT University',
			},
		],
	},
	{
		title: 'Conferences & courses',
		items: [
			{ year: '2025', title: 'React Summit', org: 'Amsterdam' },
			{
				year: '2024',
				title: 'Advanced GSAP Animation',
				org: 'Creative Coding Club',
			},
			{ year: '2023', title: 'Web Directions Summit', org: 'Sydney' },
		],
	},
];

// Individual projects live in src/content/projects/*.md
export const projectsIntro =
	'A selection of client and personal work, from marketing sites to production mobile apps.';
