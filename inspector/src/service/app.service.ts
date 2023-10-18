import {Injectable} from '@nestjs/common';
import {CodeDto} from "../models/code.dto";
import * as fs from "fs";
import {exec} from 'child_process';
import {TestService} from "./test.service";
import {TestProblem} from "../models/test.problem.entity";
import * as stream from "stream";
import {RedisCacheService} from "./redis.service";
import {ProblemsService} from "./problems.service";

@Injectable()
export class AppService {

    constructor(
        private testService: TestService,
        private redisService: RedisCacheService,
        private problemsService: ProblemsService,
    ) {
    }

    private createFileCode(code: string) {
        let path = 'codes/example' + '.cpp';
        fs.writeFileSync(path, code);
        return path;
    }

    private build(path: string): Promise<any> {
        return new Promise((resolve, reject) => {
            exec('g++ -o codes/example ' + path + '', (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                    console.log(error);
                }
                resolve(stdout ? stdout : stderr);
            });
        })
    }

    runTest(test: TestProblem): Promise<any> {
        return new Promise((resolve, reject) => {
            let child = exec('"codes/example.exe"', {
                timeout: 1000,
            }, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                }
                resolve(stdout ? stdout : stderr);
            });
            let stdinStream = new stream.Readable();
            stdinStream.push(test.input);  // Add data to the internal queue for users of the stream to consume
            stdinStream.push(null);   // Signals the end of the stream (EOF)
            stdinStream.pipe(child.stdin);
        })
    }

    private async checkTests(problemId: number, count: number) {
        let tests: TestProblem[] = await this.testService.find(problemId, count);
        let successTests: number = 0;
        for (const test of tests) {
            let res = await this.runTest(test);
            if (res == test.output) {
                successTests++;
            } else {
                break;
            }
        }
        return successTests;
    }

    check(code: CodeDto) {
        this.build(this.createFileCode(code.content)).then(async res => {
            if (code.problemId) {
                let problem = await this.problemsService.findOne(code.problemId);
                let count = problem.pretestCount;
                if (code.fullTest) {
                    count = 100000;
                }
                let successTests = await this.checkTests(code.problemId, count);
                if (successTests == count) {
                    this.redisService.setValue(code.redisKey, {success: successTests});
                } else {
                    this.redisService.setValue(code.redisKey, {error: successTests + 1});
                }
            } else {
                this.redisService.setValue(code.redisKey, {success: 'success'})
            }
        }).catch(err => {
            this.redisService.setValue(code.redisKey, {
                error: err.message,
            })
        });
    }
}
