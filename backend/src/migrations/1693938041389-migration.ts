import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1693938041389 implements MigrationInterface {
    name = 'Migration1693938041389'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`test_problem\` (\`id\` int NOT NULL AUTO_INCREMENT, \`input\` longtext NOT NULL, \`output\` longtext NOT NULL, \`problemId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`problem\` ADD \`pretestCount\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`test_problem\` ADD CONSTRAINT \`FK_6a01750fd2776ded69336641d7c\` FOREIGN KEY (\`problemId\`) REFERENCES \`problem\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`test_problem\` DROP FOREIGN KEY \`FK_6a01750fd2776ded69336641d7c\``);
        await queryRunner.query(`ALTER TABLE \`problem\` DROP COLUMN \`pretestCount\``);
        await queryRunner.query(`DROP TABLE \`test_problem\``);
    }

}
