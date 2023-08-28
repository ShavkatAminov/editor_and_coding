import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1693263098190 implements MigrationInterface {
    name = 'Migration1693263098190'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`problem\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fullName\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, \`status\` int NOT NULL, \`timeLimit\` int NOT NULL, \`memoryLimit\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`problem\``);
    }

}
