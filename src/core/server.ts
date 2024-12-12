import express, { Application } from "express";
import morgan from "morgan";
import path from "path";
import { corsMiddleware } from "./cors";
import { errorMiddleware } from "./error";
import { router } from "./routes";

class Server {
  public express: Application;

  public constructor() {
    this.express = express();
    this.initialize();
  }

  private initialize(): void {
    this.express.use(corsMiddleware);
    this.express.use(morgan("dev"));
    this.express.use(express.static(path.join(__dirname, "..", "docs")));
    this.express.use(express.json({ limit: "1mb" }));
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use("/rest", router);
    this.express.use(errorMiddleware);
  }

  public start(port: number): void {
    this.express.listen(port, () =>
      console.log(`Server running in http://localhost:${port} 🚀`),
    );
  }
}

export default Server;
