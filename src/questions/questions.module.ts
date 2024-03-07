import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import { QuestionService } from './questions.service';

@Module({
  controllers: [QuestionsController],
  imports: [],
  providers: [QuestionService],
})
export class QuestionsModule {}
