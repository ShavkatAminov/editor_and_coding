import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import {SignUpDto} from "./dto/sign-up.dto";
import {LoginDto} from "./dto/login.dto";
import {Public} from "../core/public.decarator";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post('sign-up')
  sign(@Body() singUpDto: SignUpDto) {
    return this.usersService.signIn(singUpDto);
  }
  @Public()
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.usersService.login(loginDto);
  }
}
