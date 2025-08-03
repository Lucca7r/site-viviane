// src/sanity/client.js
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2025-08-03', 
  token: import.meta.env.VITE_SANITY_API_TOKEN, 
  
  useCdn: false, 
  
  
  ignoreBrowserTokenWarning: true, 
});
