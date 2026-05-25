import rss from '@astrojs/rss';
import { getAllWorkflows } from '../lib/workflows';
import { SITE, absoluteUrl } from '../lib/site';

export async function GET(context: { site: string | undefined }) {
  const workflows = await getAllWorkflows();

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: workflows.map((w) => ({
      title: w.data.title,
      pubDate: w.data.dateAdded,
      description: w.data.description,
      link: absoluteUrl(`/workflows/${w.data.slug}`),
    })),
    customData: `<language>en-in</language>`,
  });
}
