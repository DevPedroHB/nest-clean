import { AnswerAttachmentsRepository } from "@/domain/forum/application/repositories/answer-attachments-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaAnswerAttachmentsRepository
  implements AnswerAttachmentsRepository
{
  findManyByAnswerId(answerId: string) {
    throw new Error("Method not implemented.");
  }

  deleteManyByAnswerId(answerId: string) {
    throw new Error("Method not implemented.");
  }
}
