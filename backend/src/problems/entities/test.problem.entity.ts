import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Problem} from "./problem.entity";

@Entity()
export class TestProblem {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Problem, (problem) => problem.tests)
    problem: Problem;

    @Column("longtext")
    input: string;

    @Column("longtext")
    output: string;
}
