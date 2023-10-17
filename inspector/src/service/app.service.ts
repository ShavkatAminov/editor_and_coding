import { Injectable } from '@nestjs/common';
import {CodeDto} from "../models/code.dto";
import * as fs from "fs";
import { exec } from 'child_process';
import {TestService} from "./test.service";
import {TestProblem} from "../models/test.problem.entity";
import * as stream from "stream";
import {RedisCacheService} from "./redis.service";

@Injectable()
export class AppService {

  constructor(
      private testService: TestService,
      private redisService: RedisCacheService,
              ) {}

  private createFileCode(code: string) {
    let path = 'codes/example' + '.cpp';
    fs.writeFileSync(path, code);
    return path;
  }

  private build(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      exec('g++ -o codes/example ' + path + '', (error, stdout, stderr) => {
        if(error) {
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
        if(error) {
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

  private async checkTests(problemId: number) {
    if(problemId) {
      let tests: TestProblem[] =  await this.testService.find(problemId);
      console.log('tests');
      tests.forEach((test: TestProblem) => {
        this.runTest(test).then(res => {
          console.log(test);
          console.log('res', res);
        }).catch(err => {
          console.log(test);
          console.log('err ',err);
        });
      })
    }
  }

  check(code: CodeDto) {
    this.build(this.createFileCode(code.content)).then(res => {
      if(code.problemId) {
        this.checkTests(code.problemId);
      }
      else {
        this.redisService.setValue(code.redisKey, {success: 'success'})
      }
    }).catch(err => {
      this.redisService.setValue(code.redisKey, {
        error: err.message,
      })
    });
  }
}
