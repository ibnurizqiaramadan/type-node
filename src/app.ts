import express from 'express';
import fs from 'fs';
import testHandler from './middleware/testHandler';

const app = express();
const port = 3000;

// Use the testHandler middleware
app.use(testHandler);

// Read the files in the './src/routes' directory
fs.readdirSync('./src/routes')
    .filter((file) => file.endsWith('.ts'))
    .forEach((file: any) => {
      const routeName = file.split('.')[0];
      const routePath = `./routes/${routeName}`;

      // Log that the route is loaded
      // eslint-disable-next-line no-undef
      console.log(`Route ${routeName} loaded`);

      // Mount the route
      app.use(`/${routeName === 'index' ? '' : routeName}`, require(routePath));
    });

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line no-undef
  console.log(`Example app listening on port ${port}`);
});
