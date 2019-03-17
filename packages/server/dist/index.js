"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = 3001;
app.get("/", function (req, res) { return res.send("Hello World !"); });
app.get("/products", function (req, res) {
    return res.status(200).json([{ test: "toto" }, { test: "hello" }]);
});
app.get("/name", function (req, res) { return res.status(200).json("gabin"); });
app.listen(PORT, function () { return console.log("Listening on port " + PORT + "."); });
