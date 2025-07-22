import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { media } from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'Kabar Bali Now Studio',

  projectId: 'your_project_id',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
})
