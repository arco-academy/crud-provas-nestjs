export class CreateQuestionDTO {
  id: string;
  examId: string;
  enunciated: string;
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

export class AnswerQuestion {
  id: string;
  isCorrect: boolean;
  answer: string;
  constructor(id: string, isCorrect: boolean, answer: string) {
    this.id = id;
    this.isCorrect = isCorrect;
    this.answer = answer;
  }
}
