// vite.config.js

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: "/ExpenseTracker/", // Update this to the repository name
});
