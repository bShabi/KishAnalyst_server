"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetadataKey_1 = require("./MetadataKey");
function routerBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKey_1.Metadatakey.path, path, target, key);
            Reflect.defineMetadata(MetadataKey_1.Metadatakey.methmod, method, target, key);
        };
    };
}
//Rest api for route
exports.get = routerBinder(Methods_1.Methods.get);
exports.post = routerBinder(Methods_1.Methods.post);
exports.put = routerBinder(Methods_1.Methods.put);
exports.del = routerBinder(Methods_1.Methods.del);
exports.patch = routerBinder(Methods_1.Methods.patch);
