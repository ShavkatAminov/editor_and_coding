import {Controller, Get, Param} from '@nestjs/common';
import {ProblemsService} from './problems.service';
import {Problem} from "./entities/problem.entity";

@Controller('problems')
export class ProblemsController {
    constructor(private readonly problemsService: ProblemsService) {
    }

    @Get()
    findAll(): Promise<Problem[]> {
        return this.problemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Problem | null> {
        return this.problemsService.findOne(+id);
    }
}
