import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      workbox: { clientsClaim: true, skipWaiting: true }
    })
  ],
  build: {
    chunkSizeWarningLimit: 2000
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, "src/app")
    }
  },
  preview: {
    host: "0.0.0.0",
    port: parseInt(process.env.PORT) || 4173,
    allowedHosts: [
      "solar-panel-uq2z.onrender.com", // 👈 Add your Render domain here
      "localhost"
    ]
  }
});
