import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class TestProblem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("longtext")
    input: string;

    @Column("longtext")
    output: string;

    @Column()
    problemId: number;
}
