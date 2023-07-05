import { Injectable } from '@nestjs/common';
import {Repository} from "typeorm";
import {User} from "./entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {SignInDto} from "./dto/sign-in.dto";

@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(User)
      private usersRepository: Repository<User>
  ) {}
  async signIn(signInDto: SignInDto) {
      let user = new User();
      user.email = signInDto.email;
      user.firstname = signInDto.firstname;
      user.username = signInDto.username;
      user.lastname = signInDto.lastname;
      user.password = signInDto.password;
      await this.usersRepository.save(
          this.usersRepository.create(signInDto)
      );
  }
}
