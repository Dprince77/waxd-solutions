import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: ".",
  publicDir: "public",
  server: {
    host: "::",
    port: 5173,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        solutions: resolve(__dirname, "solutions.html"),
        story: resolve(__dirname, "story.html"),
        news: resolve(__dirname, "news.html"),
        legal: resolve(__dirname, "legal.html"),
      },
    },
  },
});
