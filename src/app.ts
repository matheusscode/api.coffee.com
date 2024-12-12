import Server from "./core/server";

class Application {
  private server: Server;
  private readonly port: number;

  public constructor() {
    this.server = new Server();
    this.port = 8080;
  }

  public initialize(): void {
    this.server.start(this.port);
  }
}

new Application().initialize();
