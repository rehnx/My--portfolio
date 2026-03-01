import { defineConfig } from 'vite'

export default defineConfig({
    // This makes assets use relative paths, so it perfectly works on GitHub Pages 
    // whether it's the main domain (rehnx.github.io) or a sub-repo (rehnx.github.io/portfolio)
    base: '/My--portfolio/',
})
