import "reflect-metadata";
import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "password",
    database: process.env.DB_NAME || "test1",
    entities: [
        __dirname + "/../models/**/*{.ts,.js}"
    ],
    migrations: [
        __dirname + "/../migrations/**/*{.ts,.js}"
    ],
    cli: {
        migrationsDir: "src/migrations",
    },
    // migrationsRun: true,
    // ssl: true,
    // extra: {
    //   ssl: {
    //     rejectUnauthorized: false
    //   }
    // },
    // logging : true,
    // synchronize: true,
};

export default config;
