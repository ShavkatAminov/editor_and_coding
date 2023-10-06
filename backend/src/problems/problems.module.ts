import { Module } from '@nestjs/common';
import { ProblemsService } from './problems.service';
import { ProblemsController } from './problems.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Problem} from "./entities/problem.entity";
import {RabbitService} from "./rabbit/rabbit.service";
import {ClientsModule, Transport} from "@nestjs/microservices";

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
    ]),],
  controllers: [ProblemsController],
  providers: [ProblemsService, RabbitService]
})
export class ProblemsModule {}
