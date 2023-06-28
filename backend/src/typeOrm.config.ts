
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import {User} from "./users/entities/user.entity";
import {Migration1687910012976} from "./migrations/1687910012976-migration";

config();


export default new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'editor',
    migrations: [Migration1687910012976],
    migrationsTableName: 'migrations',
    entities: [User],
});
