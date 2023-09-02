import { PaginationParams } from "@/core/repositories/pagination-params";
import { AnswersRepository } from "@/domain/forum/application/repositories/answers-repository";
import { Answer } from "@/domain/forum/enterprise/entities/answer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaAnswersRepository implements AnswersRepository {
  findById(id: string) {
    throw new Error("Method not implemented.");
  }

  findManyByQuestionId(questionId: string, params: PaginationParams) {
    throw new Error("Method not implemented.");
  }

  create(answer: Answer) {
    throw new Error("Method not implemented.");
  }

  save(answer: Answer) {
    throw new Error("Method not implemented.");
  }

  delete(answer: Answer) {
    throw new Error("Method not implemented.");
  }
}