// src/index.ts

import { GraphQLServer } from 'graphql-yoga';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import TaskResolver from './resolvers/TaskResolver';

async function bootstrap() {
  const options = {
    port: 4444,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground'
  };

  const schema = await buildSchema({
    resolvers: [TaskResolver],
    emitSchemaFile: true
  });

  const server = new GraphQLServer({
    schema
  });

  server.start(options, ({ port }) => console.log(`Server is running on http://localhost:${port}`));
}

bootstrap();
