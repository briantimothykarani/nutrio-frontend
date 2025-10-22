import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/nutrio-frontend/", // This must exactly match your GitHub repo name
  plugins: [react(), tailwindcss()],
});
