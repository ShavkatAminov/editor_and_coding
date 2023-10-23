import { Test, TestingModule } from '@nestjs/testing';
import { ProblemsService } from './problems.service';
import {imports} from "../../test/testing.module";
import {Problem} from "./entities/problem.entity";
import {getRepositoryToken} from "@nestjs/typeorm";

describe('ProblemsService', () => {
  let service: ProblemsService;
  let module: TestingModule;
  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: imports,
      providers: [ProblemsService]
    }).compile();
    getRepositoryToken(Problem);
    service = module.get<ProblemsService>(ProblemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  function newProblem() {
    let problem = new Problem();
    problem.content = "content";
    problem.memoryLimit = 1000;
    problem.timeLimit = 1000;
    problem.status = 1;
    problem.fullName = 'full name';
    return problem;
  }

  it('should create problem', async () => {
    let problem = await service.create(newProblem());
    expect(problem.pretestCount).toBe(0);
    expect(problem.content).toBe("content");
    expect(problem.timeLimit).toBe(1000);
    expect(problem.memoryLimit).toBe(1000);
    expect(problem.fullName).toBe('full name');
  });

  it('should update problem', async () => {
    let problem: any = await service.create(newProblem());
    problem.status = 2;
    problem.memoryLimit = 20000;
    problem = await service.update(problem.id, problem);
    expect(problem).toBeDefined();
    expect(problem?.memoryLimit).toBe(20000);
    expect(problem?.status).toBe(2);
  });

  it('should delete problem', async () => {
    let problem: any = await service.create(newProblem());
    await service.delete(problem.id);
    problem = await service.findOne(problem.id);
    expect(problem).toBe(null);
  });



});
