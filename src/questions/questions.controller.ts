import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
}
