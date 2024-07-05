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
import { ApiParam, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';

@ApiTags('questions')
@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionService: QuestionService) {}
  @ApiResponse({
    status: 201,
    schema: {
      $ref: getSchemaPath(CreateQuestionDTO),
    },
  })
  @Post()
  async createQuestions(
    @Body() data: CreateQuestionDTO,
  ): Promise<CreateQuestionDTO> {
    this.questionService.createQuestion(data);
    return data;
  }

  @ApiResponse({
    status: 200,
    isArray: true,
    schema: {
      type: 'array',
      $ref: getSchemaPath(CreateQuestionDTO),
    },
  })
  @Get()
  async getAllQuestions(): Promise<CreateQuestionDTO[]> {
    return this.questionService.listAllQuestions();
  }

  @ApiResponse({
    status: 200,
    schema: {
      $ref: getSchemaPath(CreateQuestionDTO),
    },
  })
  @ApiParam({
    name: 'id',
    description: 'O ID da questão a ser buscada',
    type: String,
  })
  @Get(':id')
  async getQuestionById(
    @Param('id') id: string,
  ): Promise<CreateQuestionDTO | null> {
    return this.questionService.searchQuestionById(id);
  }

  @ApiParam({
    name: 'id',
    description: 'O ID da questão a ser editada',
    type: String,
  })
  @Put(':id')
  async updateFullQuestion(
    @Param('id') id: string,
    @Body() question: CreateQuestionDTO,
  ): Promise<CreateQuestionDTO> {
    return this.questionService.updateQuestion(id, question);
  }

  @ApiResponse({
    status: 200,
    isArray: true,
    schema: {
      $ref: getSchemaPath(CreateQuestionDTO),
    },
  })
  @ApiParam({
    name: 'id',
    description: 'O ID da questão a ser buscada',
    type: String,
  })
  @Delete(':id')
  async deleteFullQuestion(
    @Param('id') id: string,
  ): Promise<CreateQuestionDTO[]> {
    return this.questionService.deleteQuestion(id);
  }
}
