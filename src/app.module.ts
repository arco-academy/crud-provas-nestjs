import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionsModule } from './questions/questions.module';
import { ExamsModule } from './exams/exams.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    QuestionsModule,
    ExamsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
