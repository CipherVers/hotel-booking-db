import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'hotel-booking-db',

  projectId: 'kmwe7r3w',
  dataset: 'dev',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
