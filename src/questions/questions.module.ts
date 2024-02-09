import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';

@Module({
  controllers: [QuestionsController],
  imports: [],
})
export class QuestionsModule {}
