import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {ProblemsService} from './problems.service';
import {Problem} from "./entities/problem.entity";
import {ListDto} from "../basic/dto/listDto";
import {PreviousCheckDto} from "./dto/previous.check.dto";
import {MessagePattern} from "@nestjs/microservices";
import {RabbitService} from "./rabbit/rabbit.service";

@Controller('problems')
export class ProblemsController {
    constructor(private readonly problemsService: ProblemsService,
                private readonly rabbitService: RabbitService,) {
    }

    @Get()
    findAll(@Query('pageable') listDto: ListDto): Promise<[Problem[], number]> {
        return this.problemsService.findAll(listDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Problem | null> {
        return this.problemsService.findOne(+id);
    }

    @Post('previous-check')
    previousCheck(@Body() previousCheck: PreviousCheckDto) {
        this.rabbitService.send('previous-check', previousCheck.content);
    }
}
