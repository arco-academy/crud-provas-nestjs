import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateQuestionDTO } from './dto/create-questions.dto';
import connection from 'src/database/connection';
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
    connection.run(
      `INSERT INTO questions(examId, enunciated) VALUES (${question.examId}, "${question.enunciated}")`,
      function (error) {
        if (error) {
          console.log(error);
        }
        const results = connection.get('SELECT * FROM questions WHERE id = ?', [
          this.lastID,
        ]);

        return results;
      },
    );
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
