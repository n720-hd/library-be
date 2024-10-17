import express,{ Express, Request, Response } from "express";

const app: Express = express();
const port = 4100;
app.use(express.json()) // Body Parser = Supaya dapat mengambil data dari request

app.get('/', (req: Request, res: Response) => {
    // Do anything here
    res.send('<h1>Welcome to Express Typescript Server</h1>');
});
import router from "./routers";
app.use(router)


app.listen(port, () => {
    console.log(`卐✋ᛋᛋ卍[server]: Server is running at http://localhost:${port}`);
});