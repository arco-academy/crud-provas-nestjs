import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateQuestionDTO } from './dto/create-questions.dto';
import { QuestionService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  async createQuestions(
    @Body() data: CreateQuestionDTO,
  ): Promise<CreateQuestionDTO> {
    this.questionService.createQuestion(data);
    return data;
  }

  @Get()
  async getAllQuestions(): Promise<CreateQuestionDTO[]> {
    return this.questionService.listAllQuestions();
  }

  @Get(':id')
  async getQuestionById(
    @Param('id') id: string,
  ): Promise<CreateQuestionDTO | null> {
    return this.questionService.searchQuestionById(id);
  }

  @Put(':id')
  async updateFullQuestion(
    @Param('id') id: string,
    @Body() question: CreateQuestionDTO,
  ): Promise<CreateQuestionDTO> {
    return this.questionService.updateQuestion(id, question);
  }

  @Delete(':id')
  async deleteFullQuestion(
    @Param('id') id: string,
  ): Promise<CreateQuestionDTO[]> {
    return this.questionService.deleteQuestion(id);
  }
}
