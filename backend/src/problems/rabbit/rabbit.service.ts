import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {RedisCacheService} from "../../core/redis.service";

@Injectable()
export class RabbitService {
    constructor(
        @Inject('rabbit-mq-module') private readonly client: ClientProxy,
        private redisService: RedisCacheService,
    ) {}
    public async send(pattern: string, data: any) {
        let cacheKey = Math.random().toString(36);
        this.redisService.setValue(cacheKey, "", 30000);
        data['redisKey'] = cacheKey;
        this.client.send(pattern, data).subscribe(res => {
            console.log(res);
        });
        return {cacheKey: cacheKey};

    }
}
