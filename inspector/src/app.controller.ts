import { Controller, Get } from '@nestjs/common';
import {Ctx, MessagePattern, Payload, RmqContext} from "@nestjs/microservices";
import { exec } from 'child_process';

@Controller()
export class AppController {
  constructor() {}


  @MessagePattern('previous-check')
  public async execute(
      @Payload() data: any,
      @Ctx() context: RmqContext
  ) {
    const channel = context.getChannelRef();
    const orginalMessage = context.getMessage();
    console.log('data', data);
    channel.ack(orginalMessage);
    exec('')
  }
}
