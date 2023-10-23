import { Test, TestingModule } from '@nestjs/testing';
import { ProblemsController } from './problems.controller';
import { ProblemsService } from './problems.service';
import {RabbitService} from "./rabbit/rabbit.service";
import {RedisCacheService} from "../core/redis.service";
import {Repository} from "typeorm";
import {Problem} from "./entities/problem.entity";
import {getRepositoryToken} from "@nestjs/typeorm";
import {imports} from "../../test/testing.module";

describe('ProblemsController', () => {
  let controller: ProblemsController;
  let problemRepository: Repository<Problem>;
  let problemRepositoryToken: string | Function = getRepositoryToken(Problem);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: imports,
      controllers: [ProblemsController],
      providers: [ProblemsService, RabbitService, RedisCacheService,
        {
          provide: problemRepositoryToken,
          useValue: problemRepository,
        }
      ],
    }).compile();

    controller = module.get<ProblemsController>(ProblemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
