"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 4100;
app.use(express_1.default.json()); // Body Parser = Supaya dapat mengambil data dari request
app.get('/', (req, res) => {
    // Do anything here
    res.send('<h1>Welcome to Express Typescript Server</h1>');
});
const routers_1 = __importDefault(require("./routers"));
app.use(routers_1.default);
app.listen(port, () => {
    console.log(`卐✋ᛋᛋ卍[server]: Server is running at http://localhost:${port}`);
});
