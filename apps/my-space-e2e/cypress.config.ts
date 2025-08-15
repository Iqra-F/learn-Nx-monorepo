import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset.js';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'npx nx run @my-space/my-space:dev',
      },
      ciWebServerCommand: 'npx nx run @my-space/my-space:start',
      ciBaseUrl: 'http://localhost:3000',
    }),
    baseUrl: 'http://127.0.0.1:3000',
  },
});
