import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {JwtModule} from "@nestjs/jwt";
import * as process from "process";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [TypeOrmModule.forFeature([User]),
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '2 days' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
