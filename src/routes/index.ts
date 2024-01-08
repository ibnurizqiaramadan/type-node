import { Router } from 'express';
import index from '../handlers/index/Index';

// Create a new router instance
const route = Router();

/**
 * GET /
 * Description: This route handles the root endpoint.
 * Handler: index
 */
route.get('/', index);

// Export the router
export = route;
