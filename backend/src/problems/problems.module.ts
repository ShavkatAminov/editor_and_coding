import { Module } from '@nestjs/common';
import { ProblemsService } from './problems.service';
import { ProblemsController } from './problems.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Problem} from "./entities/problem.entity";
import {RabbitService} from "./rabbit/rabbit.service";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {CacheModule, CacheStore} from "@nestjs/cache-manager";
import {RedisClientOptions} from "redis";
import { redisStore } from 'cache-manager-redis-store';
import {RedisCacheService} from "../core/redis.service";

@Module({
  imports: [TypeOrmModule.forFeature([Problem]),
    ClientsModule.register([
      {
        name: 'rabbit-mq-module',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqp://localhost:5672',
          ],
          queue: 'editor',
        },
      },
    ]),
    CacheModule.register<RedisClientOptions>({
      store: <CacheStore> <unknown>redisStore,
    })
  ],
  controllers: [ProblemsController],
  providers: [ProblemsService, RabbitService, RedisCacheService]
})
export class ProblemsModule {}
