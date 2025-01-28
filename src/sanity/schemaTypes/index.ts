import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import hero from './hero'
import about from './about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, hero, about],
}



