import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import faq from './schemaTypes/faq'

export default defineConfig({
  name: 'default',
  title: 'viviane.radiestesista.site',

  projectId: 'np75d61o',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],
  schema: {
        types: [...schemaTypes, faq], // 2. Adicione-o aqui
      },
})
