import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "./src",
      "@assets": "./src/assets",
      "@routes": "./src/routes",
      "@components": "./src/components",
    },
  },
  plugins: [react()],
});
