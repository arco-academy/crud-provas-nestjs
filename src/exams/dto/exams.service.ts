import { Injectable } from '@nestjs/common';
import { CreateExamDTO } from './create-exams.dto';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class ExamService {
  private exams: CreateExamDTO[];
  constructor() {
    this.exams = [];
  }
  async listAllExams() {
    return this.exams;
  }

  async createExam(exam: CreateExamDTO) {
    const existingExamIndex = this.exams.findIndex((q) => q.id === exam.id);
    if (existingExamIndex !== -1) {
      this.exams[existingExamIndex] = exam;
    } else {
      this.exams.push(exam);
    }
    return exam;
  }
  async searchExamById(id: string) {
    return this.exams.find((exam) => exam.id === id);
  }

  async updateExam(id: string, exam: CreateExamDTO) {
    const selectedExam = await this.searchExamById(id);
    if (!selectedExam) {
      throw new NotFoundException();
    }

    this.exams = this.exams.map((q) => (q.id !== id ? q : exam));
    return exam;
  }

  async deleteExam(id: string) {
    const selectedExam = await this.searchExamById(id);
    if (!selectedExam) {
      throw new NotFoundException();
    }
    this.exams = this.exams.filter((q) => q.id !== id);
    return this.exams;
  }
}
