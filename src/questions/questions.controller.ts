import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateQuestionDTO } from './dto/create-questions.dto';

@Controller('questions')
export class QuestionsController {
  @Post()
  async createQuestions(
    @Body() data: CreateQuestionDTO,
  ): Promise<CreateQuestionDTO> {
    return data;
  }
}
