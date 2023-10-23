import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import * as process from "process";
import {User} from "../src/users/entities/user.entity";
import {Problem} from "../src/problems/entities/problem.entity";
import {TestProblem} from "../src/problems/entities/test.problem.entity";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {CacheModule, CacheStore} from "@nestjs/cache-manager";
import {RedisClientOptions} from "redis";
import {redisStore} from "cache-manager-redis-store";

export const imports = [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.HOST,
        port: 4307,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME_TEST,
        entities: [User, Problem, TestProblem],
        synchronize: true,
    }),
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
        store: <CacheStore><unknown>redisStore,
    }),
    TypeOrmModule.forFeature([Problem, User, TestProblem]),
]
