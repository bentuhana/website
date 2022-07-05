import { defineConfig } from 'vite';
import * as enviroments from './env';

export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  define: {
    ...enviroments,
  },
});
