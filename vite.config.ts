import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import WindiCSS from "vite-plugin-windicss";
// @ts-ignore
import svgr from '@honkhonk/vite-plugin-svgr'
// @ts-ignore
const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [WindiCSS(), svgr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@public":path.resolve(__dirname, "../public")
    },
  },
});
