import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    role: z.enum(['Coordinator', 'Partner', 'Supporting organisation']),
    status: z.enum(['Upcoming', 'Ongoing', 'Completed']),
    activity: z.enum([
      'learning-mobilities',
      'intergenerational',
      'digital-skills',
      'capacity-building',
      'green-transition',
    ]),
    fundingProgramme: z.string(),
    formId: z.string().optional(),
    summary: z.string(),
    coordinator: z.string(),
    partners: z
      .array(
        z.object({
          name: z.string(),
          country: z.string().optional(),
          url: z.string().optional(),
          note: z.string().optional(),
        })
      )
      .default([]),
    startDate: z.string(),
    endDate: z.string(),
    durationLabel: z.string().optional(),
    phases: z.array(z.string()).default([]),
    budgetTotal: z.string().optional(),
    budgetPublish: z.boolean().default(false),
    targetGroup: z.string(),
    keyActivities: z.array(z.string()).default([]),
    image: z.string(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.enum(['News', 'Article', 'Call']),
    summary: z.string(),
  }),
});

export const collections = { projects, news };
