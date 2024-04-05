import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateQuestionDTO } from './dto/create-questions.dto';
@Injectable()
export class QuestionService {
  private questions: CreateQuestionDTO[];
  constructor() {
    this.questions = [];
  }

  async listAllQuestions(): Promise<CreateQuestionDTO[]> {
    return this.questions;
  }

  async createQuestion(question: CreateQuestionDTO) {
    console.log('question', question);
    const existingQuestionIndex = this.questions.findIndex(
      (q) => q.id === question.id,
    );
    if (existingQuestionIndex !== -1) {
      throw new BadRequestException('Id existente');
    } else {
      this.questions.push(question);
    }
    return question;
  }

  async searchQuestionById(id: string) {
    const questionSearchResult = this.questions.find(
      (question) => question.id === id,
    );
    if (questionSearchResult) {
      return questionSearchResult;
    } else {
      throw new NotFoundException();
    }
  }

  async updateQuestion(id: string, question: CreateQuestionDTO) {
    await this.searchQuestionById(id);
    this.questions = this.questions.map((q) => (q.id !== id ? q : question));
    return question;
  }

  async deleteQuestion(id: string) {
    await this.searchQuestionById(id);
    this.questions = this.questions.filter((q) => q.id !== id);
    return this.questions;
  }
}
