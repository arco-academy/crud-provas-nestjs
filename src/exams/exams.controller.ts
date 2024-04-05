import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateExamDTO } from './dto/create-exams.dto';
import { ExamService } from './dto/exams.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('exams')
@Controller('exams')
export class ExamsController {
  constructor(private readonly examService: ExamService) {}

  @Post()
  async createExam(@Body() data: CreateExamDTO): Promise<CreateExamDTO> {
    this.examService.createExam(data);
    return data;
  }

  @Get()
  async getAllExams(): Promise<CreateExamDTO[]> {
    return this.examService.listAllExams();
  }

  @Get(':id')
  async getExamById(@Param('id') id: string): Promise<CreateExamDTO | null> {
    return this.examService.searchExamById(id);
  }

  @Put(':id')
  async updateFullExam(
    @Param('id')
    id: string,
    @Body() question: CreateExamDTO,
  ): Promise<CreateExamDTO> {
    return this.examService.updateExam(id, question);
  }

  @Delete(':id')
  async deleteFullExam(@Param('id') id: string): Promise<CreateExamDTO[]> {
    return this.examService.deleteExam(id);
  }
}
