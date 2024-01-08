import { Router } from 'express';
import handler from '../handlers/profile';

/**
 * Express router
 * @type {Router}
 */
const route: Router = Router();

/**
 * List all profiles
 * @route GET /
 */
route.get('/', handler.listProfile);

/**
 * Get profile details
 * @route GET /detail
 */
route.get('/detail', handler.detailProfile);

/**
 * Get profile details (alternative)
 * @route GET /detail2
 */
route.get('/detail2', handler.detailProfile2);

export = route;
