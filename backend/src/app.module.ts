import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { UsersModule } from './users/users.module';
import {User} from "./users/entities/user.entity";
import { ProblemsModule } from './problems/problems.module';
import {Problem} from "./problems/entities/problem.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'editor',
      entities: [User, Problem],
      synchronize: true,
    }),
    UsersModule,
    ProblemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
