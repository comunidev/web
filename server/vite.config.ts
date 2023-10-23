import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [],
    server: {
        port: 3001,
    },
    build: {
        target: 'esnext',
    },
});
