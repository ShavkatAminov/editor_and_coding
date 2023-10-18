import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Problem} from "../models/problem.entity";

@Injectable()
export class ProblemsService {
  constructor(
      @InjectRepository(Problem)
      private problemRepository: Repository<Problem>,
  ) {}


  async findOne(id: number): Promise<Problem | null> {
    return this.problemRepository.findOne({
      where: { id },
    });
  }

}
