import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.use((_request: Request, response: Response) => {
	return response.status(404).json({
		messages: ["Recurso não encontrado!"],
	});
});

export { app };