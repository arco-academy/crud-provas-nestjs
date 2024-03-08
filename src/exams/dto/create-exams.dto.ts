import { CreateQuestionDTO } from 'src/questions/dto/create-questions.dto';

export class CreateExamDTO {
  id: string;
  name: string;
  description: string;
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
