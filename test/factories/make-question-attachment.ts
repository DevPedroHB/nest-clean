import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import {
  IQuestionAttachment,
  QuestionAttachment,
} from "@/domain/forum/enterprise/entities/question-attachment";

export function makeQuestionAttachment(
  override: Partial<IQuestionAttachment> = {},
  id?: UniqueEntityID
) {
  const question = QuestionAttachment.create(
    {
      questionId: new UniqueEntityID(),
      attachmentId: new UniqueEntityID(),
      ...override,
    },
    id
  );

  return question;
}
