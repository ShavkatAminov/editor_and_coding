import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {TestProblem} from "./test.problem.entity";

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

    @Column()
    pretestCount: number;

    @OneToMany(() => TestProblem, (test => test.problem))
    tests: TestProblem[];
}
