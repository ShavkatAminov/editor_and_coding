import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {TestProblem} from "../models/test.problem.entity";


export class TestService {
    constructor(@InjectRepository(TestProblem) private testRepository: Repository<TestProblem>) {}

    find(problemId: number): Promise<TestProblem[]> {
        return this.testRepository.find({
            where: {problemId: problemId},
        });
    }
}
