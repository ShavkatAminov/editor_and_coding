import {Body, Controller, Get, NotFoundException, Param, Post, Query} from '@nestjs/common';
import {ProblemsService} from './problems.service';
import {Problem} from "./entities/problem.entity";
import {ListDto} from "../basic/dto/listDto";
import {CheckDto} from "./dto/previous.check.dto";
import {RabbitService} from "./rabbit/rabbit.service";
import {RedisCacheService} from "../core/redis.service";

@Controller('problems')
export class ProblemsController {
    constructor(private readonly problemsService: ProblemsService,
                private readonly rabbitService: RabbitService,
                private readonly redisService: RedisCacheService,
                ) {
    }
    @Get('cache-result')
    cacheResult(@Query('cacheKey') cacheKey: string) {
        return this.redisService.getValue(cacheKey);
    }

    @Get()
    findAll(@Query('pageable') listDto: ListDto): Promise<[Problem[], number]> {
        return this.problemsService.findAll(listDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Problem | null> {
        const Problem = await this.problemsService.findOne(id);
        if (!Problem) {
            throw new NotFoundException('Problem does not exist!');
        } else {
            return Problem;
        }
    }

    @Post('previous-check')
    previousCheck(@Body() previousCheck: CheckDto) {
        return this.rabbitService.send('previous-check', previousCheck);
    }


}
