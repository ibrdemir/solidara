import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Proje şeması hem İngilizce hem Hollandaca dosyalar için ortak.
// Teknik alanlar (role, status, activity) her iki dilde de İngilizce kalır,
// sitede gösterilirken otomatik çevrilir.
const projectSchema = z.object({
  title: z.string(),
  role: z.enum(['Coordinator', 'Partner', 'Supporting organisation']),
  status: z.enum(['Upcoming', 'Ongoing', 'Completed']),
  activity: z.enum([
    'learning-mobilities',
    'intergenerational',
    'digital-skills',
    'capacity-building',
    'green-transition',
    'active-citizenship',
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
  callToAction: z
    .object({
      label: z.string(),
      title: z.string(),
      text: z.string().optional(),
      href: z.string(),
      hrefNl: z.string().optional(),
      hrefEn: z.string().optional(),
      deadline: z.string().optional(),
    })
    .optional(),
});

const newsSchema = z.object({
  title: z.string(),
  date: z.string(),
  category: z.enum(['News', 'Article', 'Call']),
  summary: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: projectSchema,
});

const projectsNl = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects-nl' }),
  schema: projectSchema,
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: newsSchema,
});

const newsNl = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news-nl' }),
  schema: newsSchema,
});

export const collections = { projects, projectsNl, news, newsNl };
