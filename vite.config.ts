import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/widget.tsx", // our widget entry
      name: "TranslateWidget",
      fileName: "widget",
      formats: ["iife"], // self-contained script
    },
  },
});
