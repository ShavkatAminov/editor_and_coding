import { Module } from '@nestjs/common';
import { ProblemController } from './problem/problem.controller';
import {ProblemsService} from "../problems/problems.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Problem} from "../problems/entities/problem.entity";
import {TestProblem} from "../problems/entities/test.problem.entity";

@Module({
  controllers: [ProblemController],
  providers: [ProblemsService],
  imports: [TypeOrmModule.forFeature([Problem, TestProblem])],
})
export class AdminModule {}
