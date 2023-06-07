import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 8080;

app.get('/', (req: Request, res: Response) => console.log('Hello World'));

app.listen(port, () => console.log(`Server running on port ${port}`));