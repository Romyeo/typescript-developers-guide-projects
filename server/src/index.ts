import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import './controllers/auth.controller';
import './controllers/root.controller';

// Routes
import { AppRouter } from './AppRouter';

class Server {
  app: express.Express = express();

  constructor() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cookieSession({ keys: ['cookie'] }));
    this.app.use(AppRouter.instance);
  }

  start(): void {
    this.app.listen(3000, () => {
      console.log('Listening on port 3000');
    });
  }
}

const server = new Server();
server.start();
