import { Request, Response, NextFunction } from 'express';

/**
 * Middleware to log user access URL and check for authorization token.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function.
 */
const testHandler = (req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-next-line no-undef
  console.log(`User access url: ${req.url}`);

  const token = req.headers.authorization;
  if (!token) {
    return res.send({
      statusCode: 401,
      message: 'Unauthorized',
    });
  }

  next();
};

export default testHandler;
