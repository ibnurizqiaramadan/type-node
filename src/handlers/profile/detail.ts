import { Request, Response } from 'express';

/**
 * Handles the detail profile request.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const detailProfile = (req: Request, res: Response) => {
  res.send('detail profile');
};

export default detailProfile;
