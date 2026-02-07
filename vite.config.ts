import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // FIX: Replaced `process.cwd()` with `'.'` to resolve a TypeScript error where the `cwd` property was not found on the `Process` type.
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      // Ini memungkinkan process.env.API_KEY terbaca di aplikasi client-side
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});
