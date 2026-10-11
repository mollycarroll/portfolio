import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			year: z.string(),
			summary: z.string(),
			stack: z.array(z.string()),
			// Live site and source repo are both optional; the buttons only render when set.
			url: z.url().optional(),
			repo: z.url().optional(),
			// Path to an image in src/assets/projects (e.g. ../../assets/projects/name.png).
			// Omit to show the striped placeholder; set to false to show no image area at all.
			screenshot: z.union([image(), z.literal(false)]).optional(),
			// Lower numbers are listed first.
			order: z.number().default(100),
		}),
});

export const collections = { projects };
