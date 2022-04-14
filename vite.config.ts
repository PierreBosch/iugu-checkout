/* eslint-disable import/no-extraneous-dependencies */
import svgr from '@honkhonk/vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  define: {
    'process.env': process.env,
  },
});
