import express from 'express';

export class App {
  public app: express.Application;
  // public corOptions: cors.CorsOptions = {
  //   origin: "http://localhost:3030",
  // };

  constructor() {

    this.app = express();
    this.setMiddlewares();
    this.setRoutes();

  }

  private setMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private setRoutes() {

    this.app.get("/", (req, res) => {
      res.json("Welcome to Demo Template");
    });
  }

}