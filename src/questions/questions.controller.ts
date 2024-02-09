import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateQuestionDTO } from './dto/create-questions.dto';

@Controller('questions')
export class QuestionsController {
  private questions: CreateQuestionDTO[];
  constructor() {
    this.questions = [];
  }

  @Post()
  async createQuestions(
    @Body() data: CreateQuestionDTO,
  ): Promise<CreateQuestionDTO> {
    this.questions.push(data);
    return data;
  }

  @Get()
  async getAllQuestions(): Promise<CreateQuestionDTO[]> {
    return this.questions;
  }

  @Get(':id')
  async getQuestionById(
    @Param('id') id: string,
  ): Promise<CreateQuestionDTO | null> {
    return this.questions.find((question) => question.id === id);
  }

  @Put(':id')
  async updateFullQuestion(
    @Param('id') id: string,
    @Body() question: CreateQuestionDTO,
  ): Promise<CreateQuestionDTO> {
    const selectedQuestion = await this.getQuestionById(id);
    if (!selectedQuestion) {
      throw new NotFoundException();
    }

    this.questions = this.questions.map((q) => (q.id !== id ? q : question));
    return question;
  }

  @Delete(':id')
  async deleteFullQuestion(
    @Param('id') id: string,
  ): Promise<CreateQuestionDTO[]> {
    const selectedQuestion = await this.getQuestionById(id);
    if (!selectedQuestion) {
      throw new NotFoundException();
    }

    this.questions = this.questions.filter((q) => q.id !== id);
    return this.questions;
  }
}
