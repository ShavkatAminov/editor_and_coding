import { Controller } from '@nestjs/common';
import {Ctx, MessagePattern, Payload, RmqContext} from "@nestjs/microservices";
import {CodeDto} from "./models/code.dto";
import {AppService} from "./service/app.service";

@Controller()
export class AppController {
  constructor(
      private appService: AppService,
  ) {}
  @MessagePattern('previous-check')
  public async execute(
      @Payload() data: CodeDto,
      @Ctx() context: RmqContext
  ) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    console.log(data);
    this.appService.check(data);

    channel.ack(originalMessage);
  }
}
