import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './service/app.service';
import * as process from "process";
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TestProblem} from "./models/test.problem.entity";
import {TestService} from "./service/test.service";
import {CacheModule} from "@nestjs/cache-manager";
import {redisStore} from "cache-manager-redis-store";
import {RedisClientOptions} from "redis";
import {CacheStore} from "@nestjs/cache-manager/dist/interfaces/cache-manager.interface";
import {RedisCacheService} from "./service/redis.service";

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
          entities: [TestProblem],
      }),
      TypeOrmModule.forFeature([TestProblem]),
      CacheModule.register<RedisClientOptions>({
          store: <CacheStore> <unknown>redisStore,
      })
  ],
  controllers: [AppController],
  providers: [AppService, TestService, RedisCacheService],
})
export class AppModule {}
