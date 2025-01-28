import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import hero from './hero'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, hero],
}
