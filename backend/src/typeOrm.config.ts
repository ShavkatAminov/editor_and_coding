
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import {User} from "./users/entities/user.entity";
import {Migration1688515712879} from "./migrations/1688515712879-migration";
import {Migration1688586276261} from "./migrations/1688586276261-migration";
import {Problem} from "./problems/entities/problem.entity";
import {Migration1693263098190} from "./migrations/1693263098190-migration";
import {TestProblem} from "./problems/entities/test.problem.entity";
import {Migration1693938041389} from "./migrations/1693938041389-migration";

config();


export default new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'editor',
    migrations: [Migration1688515712879, Migration1688586276261, Migration1693263098190, Migration1693938041389],
    migrationsTableName: 'migrations',
    entities: [User, Problem, TestProblem],
});
