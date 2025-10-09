import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  resolve: {
    alias: {
      "@my-editor/core": path.resolve(__dirname, "../../packages/core/src"),
      "@my-editor/react": path.resolve(__dirname, "../../packages/react/src")
    }
  }
});
