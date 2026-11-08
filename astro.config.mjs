import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
export default defineConfig({ integrations: [react()], site: 'https://everfield-landscape-studio.peppycompass.chatgpt.site', devToolbar: { enabled: false } });
