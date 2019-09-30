import { Response, NextFunction } from 'express';

import { RequestBody } from './interfaces';

import { get, controller, use } from './decorators';

function requireAuth(req: RequestBody, res: Response, next: NextFunction) {
  if (!req.session || !req.session.loggedIn) {
    res.status(403);
    res.send('Not permitted');
    return;
  }

  next();
  return;
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: RequestBody, res: Response) {
    if (!req.session || !req.session.loggedIn) {
      res.send(`
        <div>
          <div>You are not logged in</div>
          <a href="/auth/login">Login</a>
        </div>
      `);
      return;
    }

    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/auth/logout">Logout</a>
      </div>
    `);
    return;
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: RequestBody, res: Response) {
    res.send('Welcome to protected route, logged in user');
    return;
  }
}
