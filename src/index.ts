// src/index.ts

import { GraphQLServer } from 'graphql-yoga';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import TaskResolver from './resolvers/TaskResolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [ TaskResolver],
    emitSchemaFile: true
  });

  const server = new GraphQLServer({
    schema
  });

  server.start(() => console.log('Server is running on http://localhost:4000'));
}

bootstrap();
