import {Column, PrimaryGeneratedColumn} from "typeorm";


export class Problem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    content: string;

    @Column()
    status: number;

    @Column()
    timeLimit: number;

    @Column()
    memoryLimit: number;

}
