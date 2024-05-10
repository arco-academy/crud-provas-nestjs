import { ApiProperty } from '@nestjs/swagger';
import { CreateQuestionDTO } from '../../questions/dto/create-questions.dto';

export class CreateExamDTO {
  @ApiProperty({
    description: 'ID da atividade',
    type: CreateExamDTO,
  })
  id: string;
  @ApiProperty({
    description: 'Nome da atividade',
    type: CreateExamDTO,
  })
  name: string;
  @ApiProperty({
    description: 'Descrição da atividade',
    type: CreateExamDTO,
  })
  description: string;
  @ApiProperty({
    description: 'Lista de questões',
    type: CreateExamDTO,
  })
  questions: CreateQuestionDTO[];

  constructor(
    id: string,
    name: string,
    description: string,
    questions: CreateQuestionDTO[],
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.questions = questions;
  }
}
