import express, { Request, Response } from 'express';
// import { router } from './routes/loginRoutes'; // requllar express route
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/rootController';
import './controllers/LoginController';

const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieSession({ keys: ['laskdjf'] }));
// app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
