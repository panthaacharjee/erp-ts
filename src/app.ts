import express, { Application, Request, Response } from 'express';

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello TypeScript Express!');
});

export default app;