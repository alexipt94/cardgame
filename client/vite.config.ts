import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
  },
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
});