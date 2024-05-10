import { Test, TestingModule } from '@nestjs/testing';
import { ExamsController } from '../exams.controller';
import { ExamService } from '../exams.service';
import { QuestionService } from '../../questions/questions.service';

describe('ExamsController', () => {
  let examsController: ExamsController;
  let examsService: ExamService;
  let questionService: QuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExamsController],
      providers: [ExamService, QuestionService],
    }).compile();

    examsController = module.get<ExamsController>(ExamsController);
    examsService = module.get<ExamService>(ExamService);
    questionService = module.get<QuestionService>(QuestionService);
  });

  test('should be defined', () => {
    expect(examsController).toBeDefined();
    expect(examsService).toBeDefined();
  });
});
