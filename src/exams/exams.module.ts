import { Module } from '@nestjs/common';
import { ExamsController } from './exams.controller';
import { ExamService } from './dto/exams.service';

@Module({
  controllers: [ExamsController],
  imports: [],
  providers: [ExamService],
})
export class ExamsModule {}
