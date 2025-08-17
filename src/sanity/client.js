// src/sanity/client.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'; // 1. Importe o builder

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2025-08-03', 
  token: import.meta.env.VITE_SANITY_API_TOKEN, 
  
  useCdn: true, 
  
  
  ignoreBrowserTokenWarning: true, 
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}