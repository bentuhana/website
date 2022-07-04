import { defineConfig } from 'vite';
import { execSync } from 'child_process';

export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  define: {
    GIT_COMMIT_HASH: JSON.stringify(
      execSync('git rev-parse HEAD').toString().trim().slice(0, 7)
    ),
  },
});
