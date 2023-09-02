import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import {
  IQuestion,
  Question,
} from "@/domain/forum/enterprise/entities/question";
import { faker } from "@faker-js/faker";

export function makeQuestion(
  override: Partial<IQuestion> = {},
  id?: UniqueEntityID
) {
  const question = Question.create(
    {
      authorId: new UniqueEntityID(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
      ...override,
    },
    id
  );

  return question;
}
