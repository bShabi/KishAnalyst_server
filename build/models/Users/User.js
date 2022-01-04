"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var Model_1 = require("./Model");
var Attributes_1 = require("./Attributes");
var ApiSync_1 = require("./ApiSync");
var Eventing_1 = require("./Eventing");
var Collection_1 = require("./Collection");
var rootUrl = 'http://localhost:3000/users';
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.buildUser = function (attrs) {
        return new User(new Attributes_1.Attributes(attrs), new Eventing_1.Eventing(), new ApiSync_1.ApiSync(rootUrl));
    };
    User.buildUserCollection = function () {
        return new Collection_1.Collection(rootUrl, function (json) {
            return User.buildUser(json);
        });
    };
    User.prototype.setRandomAge = function () {
        var age = Math.round(Math.random() * 100);
        this.set({ age: age });
    };
    return User;
}(Model_1.Model));
exports.User = User;
