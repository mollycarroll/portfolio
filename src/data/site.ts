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

export interface Book {
	title: string;
	author: string;
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
	'Over three years in full stack development with prior experience in technical support.';

export const jobs: Job[] = [
	{
		role: 'Software Developer',
		company: 'Greenstand',
		dates: '2026 - Present',
		type: 'Volunteer',
		points: [
			'Developer for open source project by global nonprofit, including microservices and cloud deployments',
		],
	},
	{
		role: 'Software Developer',
		company: 'Thoughtworks',
		dates: '2021 - 2024',
		type: 'Full time',
		points: [
			'Consultant developer working with clients to build custom software that meets business needs',
			'Java microservices back-end development, JavaScript web application development, GCP, AI-based solution design and development',
		],
	},
	{
		role: 'Digital Advertising Support Specialist',
		company: 'Accenture',
		dates: '2019 - 2020',
		type: 'Full time',
		points: [
			'Technical support specialist building JavaScript-based solutions for a global sales team supporting social media advertisers',
			'Developed standardized optimizations for major e-commerce platforms (Shopify, BigCommerce, WordPress)',
		],
	},
];

export const eduIntro = 'Formal study, certifications and my reading list';

export const eduGroups: EduGroup[] = [
	{
		title: 'Certifications & education',
		items: [
			{
				year: '2024',
				title: 'Google Cloud Platform Associate Cloud Engineer',
				org: 'Google',
			},
			{
				year: '2021',
				title: 'Software Engineering Certificate',
				org: 'General Assembly',
			},
			{
				year: '2015',
				title: 'Dual Bachelor of Arts',
				org: 'Saint Louis University',
			},
		],
	},
];

export const goodreadsUrl =
	'https://www.goodreads.com/review/list/2434730?tag=tech';

export const books: Book[] = [
	{ title: 'Designing Data-Intensive Applications', author: 'Martin Kleefman' },
	{
		title: 'The Pragmatic Programmer',
		author: 'Andrew Hunt & Dave Thomas',
	},
	{
		title: 'The Phoenix Project',
		author: 'Gene Kim, Kevin Behr, George Spafford',
	},
];

// Individual projects live in src/content/projects/*.md
export const projectsIntro =
	'Individual projects and professional engagements from web applications to technical training';
