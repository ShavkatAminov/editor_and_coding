import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {JwtService} from "@nestjs/jwt";
import {Repository} from "typeorm";
import {User} from "./entities/user.entity";
import {getRepositoryToken} from "@nestjs/typeorm";
import {imports} from "../../test/testing.module";
describe('UsersController', () => {
  let controller: UsersController;
  let userRepository: Repository<User>;
  let userRepositoryToken: string | Function = getRepositoryToken(User);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: imports,
      controllers: [UsersController],
      providers: [UsersService, JwtService,
        {
          provide: userRepositoryToken,
          useValue: userRepository,
        }
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
