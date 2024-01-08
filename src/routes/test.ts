import { Request, Response, Router } from 'express';

/**
 * Handles the root GET request.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const handleRootGetRequest = (req: Request, res: Response) => {
  res.send('Hello test!');
};

const route = Router();

route.get('/', handleRootGetRequest);

export = route;
