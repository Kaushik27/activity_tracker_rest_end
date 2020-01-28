import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export default class Task {
  @Field(type => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  completed: boolean;

  @Field()
  status: boolean;
}
