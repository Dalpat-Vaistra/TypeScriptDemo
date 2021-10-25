import { createConnection } from "typeorm";
import config from "./config/dbConfig";
import * as dotenv from "dotenv";

import { App } from './app';

dotenv.config();

const Port = process.env.PORT || 3030;

const app = new App().app;

createConnection(config)
    .then(async () => {
        app.listen(Port, () => {
            // tslint:disable-next-line: no-console
            console.log("Server Is Running On Port : 3030");
        })
    })
    .catch(err => {
        // tslint:disable-next-line: no-console
        console.log("Connection Failed!" + err);
        process.exit(1);
    });
