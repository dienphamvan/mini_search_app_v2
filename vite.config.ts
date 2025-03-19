/// <reference types="vitest/config" />

import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [
        tailwindcss(),
        // This is a workaround for the issue with react-router and vite https://github.com/remix-run/react-router/discussions/12655
        !process.env.VITEST && reactRouter(),
        tsconfigPaths(),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './vitest.setup.ts',
        include: ['app/**/*.{test,spec}.{ts,tsx}'],
        coverage: {
            reporter: ['text', 'json', 'html'], // Generates coverage reports
            include: ['app/**/*.tsx', 'app/**/*.ts'], // Only collect coverage for files inside "app"
            exclude: ['app/**/*.test.tsx', 'app/**/*.test.ts'], // Exclude test files from coverage
        },
    },
})
