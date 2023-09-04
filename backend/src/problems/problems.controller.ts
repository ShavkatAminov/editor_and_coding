import {Controller, Get, Param, Query} from '@nestjs/common';
import {ProblemsService} from './problems.service';
import {Problem} from "./entities/problem.entity";
import {ListDto} from "../basic/dto/listDto";

@Controller('problems')
export class ProblemsController {
    constructor(private readonly problemsService: ProblemsService) {
    }

    @Get()
    findAll(@Query('pageable') listDto: ListDto): Promise<[Problem[], number]> {
        return this.problemsService.findAll(listDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Problem | null> {
        return this.problemsService.findOne(+id);
    }
}
