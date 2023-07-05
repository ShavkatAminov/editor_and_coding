
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import {User} from "./users/entities/user.entity";
import {Migration1688515712879} from "./migrations/1688515712879-migration";

config();


export default new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'editor',
    migrations: [Migration1688515712879],
    migrationsTableName: 'migrations',
    entities: [User],
});
