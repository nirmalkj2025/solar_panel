import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const PORT = Number(process.env.VITE_PORT) || 4174;

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 2000,
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, "src/app"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: PORT,
    allowedHosts: [
      "solar-panel-uq2z.onrender.com",
      "localhost",
      "solar-panel1.onrender.com",
    ],
  },
});
