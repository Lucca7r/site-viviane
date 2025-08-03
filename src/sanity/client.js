// src/sanity/client.js
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: false, // Manter como false para desenvolvimento
  apiVersion: '2024-08-01',
  // Adiciona o token para garantir a autenticação
  token: "skwzHwwd1CyQRZPxGgnvFBIZ03MLGlpJ9C703yLJkxEo5mq7iUINC9p9X59jg1NFwtIv9pI3WDyRaaLCgc91BLnxzq2JpQLNfZ1RWXhhgcBo88RYErQLqEXZB0x3iIHoixrZBr9QcBKW4efuVHfdMTm8zuIfHqOeZ9n25ZdY7KVqZgc1IuLg",
  
  ignoreBrowserTokenWarning: true, 
});
