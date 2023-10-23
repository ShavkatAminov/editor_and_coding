import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import {imports} from "../../test/testing.module";
import {JwtService} from "@nestjs/jwt";
import {Repository} from "typeorm";
import {getRepositoryToken} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
describe('UsersService', () => {
  let service: UsersService;
  let userRepository: Repository<User>;
  let userRepositoryToken: string | Function = getRepositoryToken(User);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: imports,
      providers: [UsersService, JwtService,
        {
          provide: userRepositoryToken,
          useValue: userRepository,
        }
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
