import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import {SignInDto} from "./dto/sign-in.dto";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() singInDto: SignInDto) {
    return this.usersService.signIn(singInDto);
  }
}
