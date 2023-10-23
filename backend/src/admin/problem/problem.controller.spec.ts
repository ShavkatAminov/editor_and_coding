import { Test, TestingModule } from '@nestjs/testing';
import { ProblemController } from './problem.controller';
import {ProblemsService} from "../../problems/problems.service";
import {Repository} from "typeorm";
import {Problem} from "../../problems/entities/problem.entity";
import {getRepositoryToken} from "@nestjs/typeorm";
import {imports} from "../../../test/testing.module";


describe('ProblemController', () => {
  let controller: ProblemController;
  let problemRepository: Repository<Problem>;
  let problemRepositoryToken: string | Function = getRepositoryToken(Problem);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: imports,
      controllers: [ProblemController],
      providers: [ProblemsService,
        {
          provide: problemRepositoryToken,
          useValue: problemRepository,
        }],
    }).compile();

    controller = module.get<ProblemController>(ProblemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
