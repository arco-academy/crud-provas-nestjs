import { Test, TestingModule } from '@nestjs/testing';
import { QuestionService } from '../questions.service';
import { CreateQuestionDTO } from '../dto/create-questions.dto';

describe('QuestionService: ', () => {
  let service: QuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionService],
    }).compile();
    service = module.get<QuestionService>(QuestionService);
  });

  test('it should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('listAllQuestions should: ', () => {
    it('start with empty list', async () => {
      const result = await service.listAllQuestions();
      const expectedResult = [];
      expect(result).toStrictEqual(expectedResult);
    });

    it('return a list after a question is created', async () => {
      const questionMock = new CreateQuestionDTO(
        '123',
        'teste',
        'Enunciado1',
        [],
      );
      await service.createQuestion(questionMock);
      const result = await service.listAllQuestions();
      expect(result).toStrictEqual([questionMock]);
    });
  });

  describe('createQuestion should: ', () => {
    test.todo('create a new question');
  });

  describe('searchQuestionById should: ', () => {
    test.todo('search for a question by ID');
  });

  describe('updateQuestion should : ', () => {
    test.todo('update a question');
  });

  describe('deleteQuestion should : ', () => {
    test.todo('delete a question');
  });
});
