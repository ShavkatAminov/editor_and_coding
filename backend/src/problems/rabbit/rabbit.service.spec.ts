import { Test, TestingModule } from '@nestjs/testing';
import { RabbitService } from './rabbit.service';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {RedisCacheService} from "../../core/redis.service";
import {CacheModule, CacheStore} from "@nestjs/cache-manager";
import {RedisClientOptions} from "redis";
import {redisStore} from "cache-manager-redis-store";

describe('RabbitService', () => {
  let service: RabbitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
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
      providers: [RabbitService, RedisCacheService],
    }).compile();

    service = module.get<RabbitService>(RabbitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
