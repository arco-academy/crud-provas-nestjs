import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestionDTO } from './dto/create-questions.dto';
@Injectable()
export class QuestionService {
  private questions: CreateQuestionDTO[];
  constructor() {
    this.questions = [];
  }

  async listAllQuestions() {
    return this.questions;
  }

  async createQuestion(question: CreateQuestionDTO) {
    const existingQuestionIndex = this.questions.findIndex(
      (q) => q.id === question.id,
    );
    if (existingQuestionIndex !== -1) {
      this.questions[existingQuestionIndex] = question;
    } else {
      this.questions.push(question);
    }
    return question;
  }

  async searchQuestionById(id: string) {
    return this.questions.find((question) => question.id === id);
  }

  async updateQuestion(id: string, question: CreateQuestionDTO) {
    const selectedQuestion = await this.searchQuestionById(id);
    if (!selectedQuestion) {
      throw new NotFoundException();
    }

    this.questions = this.questions.map((q) => (q.id !== id ? q : question));
    return question;
  }

  async deleteQuestion(id: string) {
    const selectedQuestion = await this.searchQuestionById(id);
    if (!selectedQuestion) {
      throw new NotFoundException();
    }
    this.questions = this.questions.filter((q) => q.id !== id);
    return this.questions;
  }
}
