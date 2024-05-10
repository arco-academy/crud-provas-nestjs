import { Module } from '@nestjs/common';
import { ExamsController } from './exams.controller';
import { ExamService } from './exams.service';
import { QuestionsModule } from '../questions/questions.module';

@Module({
  controllers: [ExamsController],
  imports: [QuestionsModule],
  providers: [ExamService],
})
export class ExamsModule {}
