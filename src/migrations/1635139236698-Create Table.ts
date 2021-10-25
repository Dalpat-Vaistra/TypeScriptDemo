import { User } from "../models";
import { MigrationInterface, QueryRunner, getRepository } from "typeorm";

export class CreateTable1635139236698 implements MigrationInterface {
    name = 'CreateTable1635139236698'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);

        this.seed();
    }
    private async seed(): Promise<void> {
        await getRepository(User).save([
            {
                username: 'Vaistra',
                firstname: 'Vaistra',
                lastname: 'Technologies',
                email: "admin@gmail.com",
                password: "admin@01"
            },
        ] as User[]);
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
