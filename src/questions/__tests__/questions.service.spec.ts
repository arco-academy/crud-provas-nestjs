import { Test, TestingModule } from '@nestjs/testing';
import { QuestionService } from '../questions.service';
import { CreateQuestionDTO } from '../dto/create-questions.dto';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('QuestionService: ', () => {
  let service: QuestionService;
  const questionMock = new CreateQuestionDTO('123', 'teste', 'Enunciado1', []);
  const updatedQuestionMock = new CreateQuestionDTO(
    '123',
    'teste',
    'updated question',
    [],
  );
  const existingId = '123';
  const unexistingId = '321';

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
    beforeEach(async () => {
      await service.createQuestion(questionMock);
    });

    it('search question by specific id', async () => {
      const result = await service.searchQuestionById(existingId);
      const expectedResult = questionMock;
      expect(result).toStrictEqual(expectedResult);
    });

    it('throw error when id doesnt exists', async () => {
      await expect(
        service.searchQuestionById(unexistingId),
      ).rejects.toThrowError(NotFoundException);
    });
  });

  describe('updateQuestion should : ', () => {
    beforeEach(async () => {
      await service.createQuestion(questionMock);
    });
    it('update existing question', async () => {
      const result = await service.updateQuestion(
        existingId,
        updatedQuestionMock,
      );
      expect(result).toStrictEqual(updatedQuestionMock);
    });

    it('throw error when id doesnt exists', async () => {
      await expect(
        service.updateQuestion(unexistingId, updatedQuestionMock),
      ).rejects.toThrowError(NotFoundException);
    });
  });

  describe('deleteQuestion should : ', () => {
    beforeEach(async () => {
      await service.createQuestion(questionMock);
    });
    it('delete existing question', async () => {
      await service.deleteQuestion(existingId);
      const result = await service.listAllQuestions();
      const expectedResult = [];
      expect(result).toStrictEqual(expectedResult);
    });
    it('throw error when id doesnt exists', async () => {
      await expect(service.deleteQuestion(unexistingId)).rejects.toThrowError(
        NotFoundException,
      );
    });
  });
});
