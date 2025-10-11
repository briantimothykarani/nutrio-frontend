// This file connects your GitHub Pages frontend to your Railway backend API.
// It is written in TypeScript for better integration with your project.

// --- LIVE RAILWAY CONNECTION ---
// The URL below is the public domain for your nutrio-backend Express service
// deployed on Railway.
export const API_BASE_URL: string =
  "https://nutrio-backend-production.up.railway.app/api/";

// Example of a resulting fetch request in your frontend code:
// fetch(`${API_BASE_URL}v1/status/`) // or whatever specific endpoint you create
