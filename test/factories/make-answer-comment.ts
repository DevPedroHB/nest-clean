import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import {
  AnswerComment,
  IAnswerComment,
} from "@/domain/forum/enterprise/entities/answer-comment";
import { faker } from "@faker-js/faker";

export function makeAnswerComment(
  override: Partial<IAnswerComment> = {},
  id?: UniqueEntityID
) {
  const answer = AnswerComment.create(
    {
      authorId: new UniqueEntityID(),
      answerId: new UniqueEntityID(),
      content: faker.lorem.text(),
      ...override,
    },
    id
  );

  return answer;
}
