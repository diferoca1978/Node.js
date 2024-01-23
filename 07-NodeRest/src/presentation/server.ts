import express, { Router } from 'express';
import path from 'path';

interface Options {
  port: number;
  public_path?: string;
  routes: Router;
}

export class Server {
  private app = express();
  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;

  constructor(options: Options) {
    const { routes, port, public_path = 'public' } = options;
    this.port = port;
    this.publicPath = public_path;
    this.routes = routes;
  }

  async start() {
    //* Middlewares
    this.app.use(express.json()); // raw/json
    this.app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded

    //* Making the public folder as a static resource

    this.app.use(express.static(this.publicPath));

    //* Defining routes

    this.app.use(this.routes);

    //* The code below are allowing to our server can pass to any route not defined. This help to apps like SPA.

    this.app.get('*', (req, res) => {
      const indexPath = path.join(
        __dirname + `../../../${this.publicPath}/index.html`
      );
      res.sendFile(indexPath);
      return;
    });

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
