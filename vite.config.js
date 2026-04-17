import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Tu portafolio principal
        asesoria: resolve(__dirname, "asesoria.html"), // Tu nueva página de asesoría
      },
    },
  },
});
