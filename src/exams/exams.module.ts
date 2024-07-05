import { Module } from '@nestjs/common';
import { ExamsController } from './exams.controller';
import { ExamService } from './exams.service';
import { QuestionsModule } from '../questions/questions.module';
import { QuestionService } from 'src/questions/questions.service';

@Module({
  controllers: [ExamsController],
  imports: [QuestionsModule],
  providers: [ExamService, QuestionService],
})
export class ExamsModule {}
