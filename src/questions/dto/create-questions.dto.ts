import { ApiProperty } from '@nestjs/swagger';

export class AnswerQuestion {
  @ApiProperty({
    example: '1',
    description: 'O ID da resposta',
  })
  id: string;
  @ApiProperty({
    example: false,
    description: 'Se a resposta é correta',
  })
  isCorrect: boolean;
  @ApiProperty({
    example: 'Branco',
    description: 'O texto da resposta',
  })
  answer: string;
  constructor(id: string, isCorrect: boolean, answer: string) {
    this.id = id;
    this.isCorrect = isCorrect;
    this.answer = answer;
  }
}

export class CreateQuestionDTO {
  @ApiProperty({
    example: '1',
    description: 'O ID da questão',
  })
  id: string;
  @ApiProperty({
    example: '1',
    description: 'O ID da atividade',
  })
  examId: string;
  @ApiProperty({
    example: 'Qual é a cor do cavalo branco de Napoleão?',
    description: 'O enunciado da questão',
  })
  enunciated: string;
  @ApiProperty({
    type: [AnswerQuestion],
    example: [
      {
        id: '1',
        isCorrect: false,
        answer: 'Branco',
      },
      {
        id: '2',
        isCorrect: true,
        answer: 'Preto',
      },
    ],
    description: 'O enunciado da questão',
  })
  answers: AnswerQuestion[];

  constructor(
    id: string,
    examId: string,
    enunciated: string,
    answers: AnswerQuestion[],
  ) {
    this.id = id;
    this.examId = examId;
    this.enunciated = enunciated;
    this.answers = answers;
  }
}
