"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import { router } from './routes/loginRoutes'; // requllar express route
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRouter_1 = require("./AppRouter");
require("./controllers/rootController");
require("./controllers/LoginController");
var app = (0, express_1.default)();
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cookie_session_1.default)({ keys: ['laskdjf'] }));
// app.use(router);
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
