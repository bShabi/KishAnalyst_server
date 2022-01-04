import { NextFunction, Request, Response } from 'express';
import { controller, get, use, bodyValidtor, post } from './decorators';

// function loger(req: Request, res: Response, next: NextFunction) {
//   res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
// }

interface RegisterProps extends RequestWithBody {
  fullName: string;
  email: string;
  teamName: string;
  password: string;
}
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}
@controller('/auth')
export class LoginController {
  /**
   *
   * TODO:
   * 1 build login page with tsc
   *
   */
  @get('/login')
  // @use(loger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  }
  @post('/login')
  @bodyValidtor('email', 'password')
  postLogin(req: Request, res: Response) {
    res.header('Access-Control-Allow-Origin', '*');

    const { email, password } = req.body;

    console.log('testtttt');
    console.log(req.body);
    if (email === 'benshabi@outlook.com' && password === '123456') {
      //  mark this person logged in
      req.session = { IsLogged: true };
      //  redirect them on the root  route
      res.redirect('/');
      res.status(200);
    } else {
      res.send(`invalid email or password`);
      res.status(201);
    }
  }

  @get('/register')
  // @use(loger)
  getRegister(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
      <h1>Register</h1>
      <div>
        <label>Full name:</label>
        <input name="fullName" />
      </div>

        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
        <label>Team Name</label>
        <input name="teamName" />
      </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  }
  @post('/register')
  @bodyValidtor('fullName', 'email', 'nameTeam', 'password')
  postRegister(req: RequestWithBody, res: Response) {
    const { fullName, email, password, nameTeam } = req.body;
    console.log(req.body);
    res.send(`<div>Hii</div>`);
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
