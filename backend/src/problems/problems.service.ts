import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Problem} from "./entities/problem.entity";
import {Repository} from "typeorm";

@Injectable()
export class ProblemsService {
  constructor(
      @InjectRepository(Problem)
      private problemRepository: Repository<Problem>,
  ) {}

  async findAll(): Promise<Problem[]> {
    return this.problemRepository.find();
  }

  async findOne(id: number): Promise<Problem | null> {
    return this.problemRepository.findOne({ where: { id } });
  }

  async create(Problem: Partial<Problem>): Promise<Problem> {
    const newProblem = this.problemRepository.create(Problem);
    return this.problemRepository.save(newProblem);
  }

  async update(id: number, Problem: Partial<Problem>): Promise<Problem | null> {
    await this.problemRepository.update(id, Problem);
    return this.problemRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.problemRepository.delete(id);
  }
}
