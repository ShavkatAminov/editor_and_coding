import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query} from '@nestjs/common';
import {ProblemsService} from "../../problems/problems.service";
import {Problem} from "../../problems/entities/problem.entity";
import {ListDto} from "../../basic/dto/listDto";

@Controller('problem')
export class ProblemController {
    constructor(private readonly problemsService: ProblemsService) {}

    @Get()
    async findAll(@Query('pageable') listDto: ListDto = new ListDto()): Promise<[Problem[], number]> {
        return this.problemsService.findAll(listDto);
    }

    //get Problem by id
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Problem> {
        const Problem = await this.problemsService.findOne(id);
        if (!Problem) {
            throw new NotFoundException('Problem does not exist!');
        } else {
            return Problem;
        }
    }

    //create Problem
    @Post()
    async create(@Body() Problem: Problem): Promise<Problem> {
        return this.problemsService.create(Problem);
    }

    //update Problem
    @Put(':id')
    async update (@Param('id') id: number, @Body() Problem: Problem): Promise<any> {
        return this.problemsService.update(id, Problem);
    }

    //delete Problem
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
        //handle error if Problem does not exist
        const Problem = await this.problemsService.findOne(id);
        if (!Problem) {
            throw new NotFoundException('Problem does not exist!');
        }
        return this.problemsService.delete(id);
    }
}
