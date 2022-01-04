"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_errors_1 = __importDefault(require("http-errors"));
var exampleRoutes_1 = __importDefault(require("./routes/exampleRoutes"));
var app = (0, express_1.default)();
app.use("/", exampleRoutes_1.default);
app.use(function () {
    throw (0, http_errors_1.default)(404, "Route not found");
});
var errorHandler = function (err, req, res, next) {
    console.log(err.message, err.statusCode);
    if (res.headersSent) {
        return next(err);
    }
    res.status(err.statusCode || 500).json({ message: err.message || "An Unknown Error" });
};
app.listen(9000, function () {
    console.log("Server Started on port 9000");
});
console.log("Hello 2");
