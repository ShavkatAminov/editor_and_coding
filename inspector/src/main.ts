import { NestFactory } from '@nestjs/core';
require('dotenv').config();
import { AppModule } from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqp://localhost:5672'
      ],
      queue: 'editor',
      // false = manual acknowledgement; true = automatic acknowledgment
      noAck: false,
      // Get one by one
      prefetchCount: 1
    }
  });
  await app.listen();
}
bootstrap();
