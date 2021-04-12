import { MigrationInterface, QueryRunner } from 'typeorm';

export class routeInit1617897116657 implements MigrationInterface {
  name = 'routeInit1617897116657';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "customer" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "phone" character varying NOT NULL, "address1" character varying NOT NULL, "address2" character varying NOT NULL, CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `INSERT INTO "public"."customer"("id","fullName","phone","address1","address2")
      VALUES(1,E'Tracy McDonald',E'+17789188954',E'1400 Columbia St, San Diego, CA',E'NULL')`,
    );
    await queryRunner.query(
      `CREATE TABLE "stop" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "eta" character varying NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "PK_df01674281c44fc10ddd0465d28" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `INSERT INTO "public"."stop"("id","name","address","eta","phone")
      VALUES(1,E'Tracy McDonald',E'1400 Columbia St, San Diego, CA',E'09:10',E'+17789188954')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "customer"`);
    await queryRunner.query(`DROP TABLE "stop"`);
  }
}
