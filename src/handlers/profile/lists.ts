import { Request, Response } from 'express';

/**
 * Handles the request to list the profile.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const listProfile = (req: Request, res: Response) => {
  res.send('lists porofile');
};

export default listProfile;
