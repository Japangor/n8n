---
title: Avatar Agent Workflow
slug: avatar-agent
category: ai-agents
file: avatar-agent.zip
fileSize: 6.7 KB
format: zip
tags: [avatar, ai-agent, video, heygen]
description: Generate avatar scripts and video-ready outputs with an AI agent workflow for n8n.
useCases:
  - AI spokesperson videos for marketing
  - Scripted avatar content at scale
  - Product demo narration pipelines
requiredIntegrations:
  - OpenAI or compatible LLM
  - HeyGen (optional)
nodesCount: 12
dateAdded: 2025-01-15
featured: true
---

## Overview

The **Avatar Agent** workflow automates script writing and hands off structured JSON for video avatar tools. Import the ZIP into n8n, connect your LLM credentials, and run on demand or on a schedule.

## How to import

1. Download `avatar-agent.zip` from this page.
2. In n8n, go to **Workflows → Import from File**.
3. Select the ZIP and confirm node credential prompts.
4. Activate the workflow after testing with sample input.

## What you need

- Self-hosted n8n or n8n Cloud instance
- API keys for your chosen LLM provider
- Optional HeyGen account for full video render chain

## Tips

- Start with manual execution before enabling triggers.
- Store API keys in n8n credentials, never in static node fields.
