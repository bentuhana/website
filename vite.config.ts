import { defineConfig } from 'vite';
import env from './env';

export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  define: {
    ...env,
  },
});
