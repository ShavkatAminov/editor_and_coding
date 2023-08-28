import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
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
