import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { UsersModule } from './users/users.module';
import {User} from "./users/entities/user.entity";
import { ProblemsModule } from './problems/problems.module';
import {Problem} from "./problems/entities/problem.entity";
import { AdminModule } from './admin/admin.module';
import {RouterModule} from "@nestjs/core";
import {TestProblem} from "./problems/entities/test.problem.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'editor',
      entities: [User, Problem, TestProblem],
      synchronize: true,
    }),
    UsersModule,
    ProblemsModule,
    AdminModule,
    RouterModule.register([
      {
        path: 'admin',
        module: AdminModule,
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
