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
import * as process from "process";
import {ConfigModule} from "@nestjs/config";
import {RedisCacheService} from "./core/redis.service";
import {CacheModule, CacheStore} from "@nestjs/cache-manager";
import {RedisClientOptions} from "redis";
import {redisStore} from "cache-manager-redis-store";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 1000,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User, Problem, TestProblem],
    }),
    UsersModule,
    ProblemsModule,
    AdminModule,
    RouterModule.register([
      {
        path: 'admin',
        module: AdminModule,
      }
    ]),
    CacheModule.register<RedisClientOptions>({
      store: <CacheStore> <unknown>redisStore,
    })
  ],
  controllers: [AppController],
  providers: [AppService, RedisCacheService],
})
export class AppModule {}
