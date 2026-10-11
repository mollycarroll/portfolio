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
	name: 'Molly Carroll',
	tagline: 'full stack developer',
	email: 'molly@mollycarroll.dev',
	availability: 'Currently open to work',
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
	"I'm a full stack software developer with experience building technology for enterprise applications. I've worked on each stage of the development process, from architectural planning and decision-making to feature implementation to release and production maintenance.",
	"In addition, I've been expanding my professional and technical scope toward DevOps and production support.",
];

export const homeCards = [
	{
		num: '01',
		title: 'Projects',
		href: '/projects',
		desc: 'A selection of professional and personal development projects',
	},
	{
		num: '02',
		title: 'Skills',
		href: '/skills',
		desc: 'Front-end, back-end, DevOps, AI, databases and more',
	},
	{
		num: '03',
		title: 'Career',
		href: '/career',
		desc: 'Professional and volunteer experience across roles, teams and projects',
	},
	{
		num: '04',
		title: 'Education',
		href: '/education',
		desc: "Certifications, technical and university education, books I've read",
	},
];

export const skillsIntro =
	'A breakdown of the tools, frameworks and systems I use in day to day development.';

export const skills: SkillGroup[] = [
	{
		title: 'Languages',
		items: ['Java', 'Python', 'JavaScript', 'TypeScript'],
	},
	{
		title: 'Frameworks & Libraries',
		items: ['React', 'Node.js', 'FastAPI', 'Spring'],
	},
	{
		title: 'AI',
		items: ['Claude Code', 'Hugging Face', 'LangChain'],
	},
	{
		title: 'Cloud & DevOps',
		items: [
			'Google Cloud Platform (certified)',
			'Kubernetes',
			'Docker',
			'GitHub Actions',
			'CI/CD',
		],
	},
	{
		title: 'Testing',
		items: ['JUnit', 'Mockito', 'Jest', 'Postman', 'Git'],
	},
	{
		title: 'Observability',
		items: ['Elasticsearch', 'Dynatrace', 'Datadog'],
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
