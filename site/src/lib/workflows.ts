import { getCollection, type CollectionEntry } from 'astro:content';
import { CATEGORIES, type CategorySlug } from './site';

export type WorkflowEntry = CollectionEntry<'workflows'>;

export async function getAllWorkflows(): Promise<WorkflowEntry[]> {
  const items = await getCollection('workflows');
  return items.sort(
    (a, b) =>
      new Date(b.data.dateAdded).getTime() - new Date(a.data.dateAdded).getTime(),
  );
}

export async function getFeaturedWorkflows(limit = 6): Promise<WorkflowEntry[]> {
  const all = await getAllWorkflows();
  const featured = all.filter((w) => w.data.featured);
  return (featured.length >= limit ? featured : all).slice(0, limit);
}

export async function getWorkflowBySlug(
  slug: string,
): Promise<WorkflowEntry | undefined> {
  const all = await getAllWorkflows();
  return all.find((w) => w.data.slug === slug);
}

export async function getWorkflowsByCategory(
  category: CategorySlug,
): Promise<WorkflowEntry[]> {
  const all = await getAllWorkflows();
  return all.filter((w) => w.data.category === category);
}

export function getCategoryLabel(slug: CategorySlug): string {
  return CATEGORIES[slug]?.label ?? slug;
}

export function getRelatedWorkflows(
  current: WorkflowEntry,
  all: WorkflowEntry[],
  limit = 3,
): WorkflowEntry[] {
  return all
    .filter(
      (w) =>
        w.data.slug !== current.data.slug &&
        (w.data.category === current.data.category ||
          w.data.tags.some((t) => current.data.tags.includes(t))),
    )
    .slice(0, limit);
}

export function getAllCategorySlugs(): CategorySlug[] {
  return Object.keys(CATEGORIES) as CategorySlug[];
}

export function downloadUrl(file: string): string {
  return `/downloads/${file}`;
}
