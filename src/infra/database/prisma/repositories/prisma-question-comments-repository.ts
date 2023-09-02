import { QuestionCommentsRepository } from "@/domain/forum/application/repositories/question-comments-repository";
import { QuestionComment } from "@/domain/forum/enterprise/entities/question-comment";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaQuestionCommentsRepository
  implements QuestionCommentsRepository
{
  findById(id: string) {
    throw new Error("Method not implemented.");
  }

  findManyByQuestionId(questionId: string, params: PaginationParams) {
    throw new Error("Method not implemented.");
  }

  create(questionComment: QuestionComment) {
    throw new Error("Method not implemented.");
  }

  delete(questionComment: QuestionComment) {
    throw new Error("Method not implemented.");
  }
}
