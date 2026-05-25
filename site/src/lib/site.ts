export const SITE = {
  name: 'n8n.gjam.in',
  title: 'Free n8n Workflows & Templates',
  description:
    'Download free n8n workflows, AI agents, and automation templates. Self-host guides, Docker setup, MCP integration, and comparisons — curated for India and worldwide builders.',
  url: 'https://n8n.gjam.in',
  locale: 'en_IN',
  author: 'japangor',
  twitter: '@japangor',
  email: 'japangor@gmail.com',
  adsensePublisherId: 'ca-pub-3483870164836220',
  gtagId: 'G-JLSL55VQGV',
} as const;

export const CATEGORIES = {
  'ai-agents': {
    label: 'AI Agents',
    description: 'n8n AI agent workflows with LLMs, tools, and autonomous loops.',
  },
  'lead-gen': {
    label: 'Lead Generation',
    description: 'Scrape, enrich, and route leads with Apify, LinkedIn, and CRM nodes.',
  },
  email: {
    label: 'Email & Outreach',
    description: 'Cold email, newsletters, and Loom-style outreach automations.',
  },
  video: {
    label: 'Video & Avatar',
    description: 'HeyGen, ElevenLabs, Veo, and avatar video generation pipelines.',
  },
  voice: {
    label: 'Voice Agents',
    description: 'Voice AI call flows and speech-to-action automations.',
  },
  'social-media': {
    label: 'Social Media',
    description: 'Instagram, Facebook, and multi-channel social posting workflows.',
  },
  onboarding: {
    label: 'Onboarding',
    description: 'Premium client onboarding and welcome sequences.',
  },
  chat: {
    label: 'Chat Bots',
    description: 'Customer support and conversational AI chat workflows.',
  },
} as const;

export type CategorySlug = keyof typeof CATEGORIES;

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function absoluteUrl(path: string): string {
  const base = SITE.url.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}
