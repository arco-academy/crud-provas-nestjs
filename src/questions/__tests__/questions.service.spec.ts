import { Test, TestingModule } from '@nestjs/testing';
import { QuestionService } from '../questions.service';
import { CreateQuestionDTO } from '../dto/create-questions.dto';
import { BadRequestException } from '@nestjs/common';

describe('QuestionService: ', () => {
  let service: QuestionService;
  const questionMock = new CreateQuestionDTO('123', 'teste', 'Enunciado1', []);

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
      await service.createQuestion(questionMock);
      const result = await service.listAllQuestions();
      expect(result).toStrictEqual([questionMock]);
    });
  });

  describe('createQuestion: ', () => {
    it('should create a new question', async () => {
      const result = await service.createQuestion(questionMock);
      const expectedResult = questionMock;
      expect(result).toStrictEqual(expectedResult);
    });

    it('should return error when id exist', async () => {
      await service.createQuestion(questionMock);
      await expect(service.createQuestion(questionMock)).rejects.toThrowError(
        BadRequestException,
      );
    });
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
