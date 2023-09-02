import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import {
  AnswerAttachment,
  IAnswerAttachment,
} from "@/domain/forum/enterprise/entities/answer-attachment";

export function makeAnswerAttachment(
  override: Partial<IAnswerAttachment> = {},
  id?: UniqueEntityID
) {
  const answer = AnswerAttachment.create(
    {
      answerId: new UniqueEntityID(),
      attachmentId: new UniqueEntityID(),
      ...override,
    },
    id
  );

  return answer;
}
