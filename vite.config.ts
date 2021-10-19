import { defineConfig } from 'vite';
import ReactSupport from '@vitejs/plugin-react';
import TSConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [ReactSupport(), TSConfigPaths()],
});
