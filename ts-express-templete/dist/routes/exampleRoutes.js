"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var exampleControllers_1 = require("../controllers/exampleControllers");
var router = (0, express_1.Router)();
router.get("/", exampleControllers_1.getExample);
exports.default = router;
