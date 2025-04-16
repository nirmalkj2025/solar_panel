import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

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
  server: {
    port: process.env.VITE_PORT || 4174, // Use VITE_PORT from .env or fallback to 4174
  },
  preview: {
    host: "0.0.0.0",
    port: process.env.VITE_PORT || 4174, // Same here for preview, use VITE_PORT
    allowedHosts: [
      "solar-panel-uq2z.onrender.com",
      "localhost",
      "solar-panel1.onrender.com"  // Add the Render host here
    ]
  }
});
