import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": { // Proxy requests to the backend java API
        target: "http://localhost:8080"
      },
    },
  },
});
