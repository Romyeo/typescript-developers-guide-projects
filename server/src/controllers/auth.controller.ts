import { Response } from 'express';

import { RequestBody } from './interfaces';

import { get, controller, validator, post } from './decorators';

@controller('/auth')
class AuthController {
  @get('/login')
  getLogin(req: RequestBody, res: Response): void {
    res.send(`
      <form method="post">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    `);
  }

  @post('/login')
  @validator('email', 'password')
  postLogin(req: RequestBody, res: Response): void {
    req.session = { loggedIn: true };
    res.redirect('/');
    return;
  }

  @get('/logout')
  getLogout(req: RequestBody, res: Response) {
    req.session = undefined;
    res.redirect('/');
    return;
  }
}
