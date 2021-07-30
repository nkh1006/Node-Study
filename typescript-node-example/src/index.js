"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var add = function (x) {
    return x.a + x.b;
};
app.get('/', function (req) {
    add({ a: 1, b: 5 });
});
app.listen(3001, function () {
    console.log('started');
});
