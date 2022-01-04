"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
var decorators_1 = require("./decorators");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    /**
     *
     * TODO:
     * 1 build login page with tsc
     *
     */
    // @use(loger)
    LoginController.prototype.getLogin = function (req, res) {
        res.send("\n      <form method=\"POST\">\n        <div>\n          <label>Email</label>\n          <input name=\"email\" />\n        </div>\n        <div>\n          <label>Password</label>\n          <input name=\"password\" type=\"password\" />\n        </div>\n        <button>Submit</button>\n      </form>\n    ");
    };
    LoginController.prototype.postLogin = function (req, res) {
        res.header('Access-Control-Allow-Origin', '*');
        var _a = req.body, email = _a.email, password = _a.password;
        console.log('testtttt');
        console.log(req.body);
        if (email === 'benshabi@outlook.com' && password === '123456') {
            //  mark this person logged in
            req.session = { IsLogged: true };
            //  redirect them on the root  route
            res.redirect('/');
            res.status(200);
        }
        else {
            res.send("invalid email or password");
            res.status(201);
        }
    };
    // @use(loger)
    LoginController.prototype.getRegister = function (req, res) {
        res.send("\n      <form method=\"POST\">\n      <h1>Register</h1>\n      <div>\n        <label>Full name:</label>\n        <input name=\"fullName\" />\n      </div>\n\n        <div>\n          <label>Email</label>\n          <input name=\"email\" />\n        </div>\n        <div>\n        <label>Team Name</label>\n        <input name=\"teamName\" />\n      </div>\n        <div>\n          <label>Password</label>\n          <input name=\"password\" type=\"password\" />\n        </div>\n        <button>Submit</button>\n      </form>\n    ");
    };
    LoginController.prototype.postRegister = function (req, res) {
        var _a = req.body, fullName = _a.fullName, email = _a.email, password = _a.password, nameTeam = _a.nameTeam;
        console.log(req.body);
        res.send("<div>Hii</div>");
    };
    LoginController.prototype.getLogout = function (req, res) {
        req.session = undefined;
        res.redirect('/');
    };
    __decorate([
        (0, decorators_1.get)('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogin", null);
    __decorate([
        (0, decorators_1.post)('/login'),
        (0, decorators_1.bodyValidtor)('email', 'password'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "postLogin", null);
    __decorate([
        (0, decorators_1.get)('/register'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getRegister", null);
    __decorate([
        (0, decorators_1.post)('/register'),
        (0, decorators_1.bodyValidtor)('fullName', 'email', 'nameTeam', 'password'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "postRegister", null);
    __decorate([
        (0, decorators_1.get)('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogout", null);
    LoginController = __decorate([
        (0, decorators_1.controller)('/auth')
    ], LoginController);
    return LoginController;
}());
exports.LoginController = LoginController;
