import { Test, TestingModule } from '@nestjs/testing';
import { QuestionsController } from '../questions.controller';
import { QuestionService } from '../questions.service';
import { CreateQuestionDTO } from '../dto/create-questions.dto';
import { BadRequestException } from '@nestjs/common';

describe('QuestionController: ', () => {
  let controller: QuestionsController;
  let service: QuestionService;
  const questionMock = new CreateQuestionDTO('123', 'teste', 'Enunciado1', []);
  const existingId = '123';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionsController],
      providers: [QuestionService],
    }).compile();

    controller = module.get<QuestionsController>(QuestionsController);
    service = module.get<QuestionService>(QuestionService);
  });

  test('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('getAllQuestions:', () => {
    it('should return an empty list', async () => {
      const expectedReturn = [];
      const spyService = jest.spyOn(service, 'listAllQuestions');
      spyService.mockResolvedValue(expectedReturn);
      const response = await controller.getAllQuestions();

      expect(spyService).toHaveBeenCalled();
      expect(response).toEqual(expectedReturn);
    });
  });

  describe('createQuestion:', () => {
    it('should create new question', async () => {
      const expectedReturn = questionMock;
      const spyService = jest.spyOn(service, 'createQuestion');
      spyService.mockResolvedValue(expectedReturn);
      const response = await controller.createQuestions(questionMock);

      expect(spyService).toHaveBeenCalled();
      expect(response).toEqual(expectedReturn);
    });
  });

  describe('getQuestionById:', () => {
    it('should return question by id', async () => {
      const expectedReturn = questionMock;
      const spyService = jest.spyOn(service, 'searchQuestionById');
      spyService.mockResolvedValue(expectedReturn);
      const response = await controller.getQuestionById(existingId);

      expect(spyService).toHaveBeenCalled();
      expect(response).toEqual(expectedReturn);
    });
  });

  describe('updateFullQuestion:', () => {
    it('should update existing question', async () => {
      const expectedReturn = questionMock;
      const spyService = jest.spyOn(service, 'updateQuestion');
      spyService.mockResolvedValue(expectedReturn);
      const response = await controller.updateFullQuestion(
        existingId,
        questionMock,
      );

      expect(spyService).toHaveBeenCalled();
      expect(response).toEqual(expectedReturn);
    });
  });

  describe('deleteQuestion', () => {
    it('should delete question', async () => {
      const expectedReturn = [questionMock];
      const spyService = jest.spyOn(service, 'deleteQuestion');
      spyService.mockResolvedValue(expectedReturn);
      const response = await controller.deleteFullQuestion(existingId);

      expect(spyService).toHaveBeenCalled();
      expect(response).toEqual(expectedReturn);
    });
  });
});
