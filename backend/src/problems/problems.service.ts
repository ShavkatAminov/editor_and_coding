import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Problem} from "./entities/problem.entity";
import {Repository} from "typeorm";
import {ListDto} from "../basic/dto/listDto";

@Injectable()
export class ProblemsService {
  constructor(
      @InjectRepository(Problem)
      private problemRepository: Repository<Problem>,
  ) {}

  async findAll(listDto: ListDto): Promise<any> {
     const [data, count] = await this.problemRepository.findAndCount({
      take: listDto.perPage,
      skip: listDto.page * listDto.perPage,
    });
    return {
      data: data,
      count: count,
    }
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
