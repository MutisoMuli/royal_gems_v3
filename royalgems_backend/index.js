const express = require('express');
const https = require('https');
const fs = require('fs');
const { GracefulShutdownServer } = require('medusa-core-utils');
const loaders = require('@medusajs/medusa/dist/loaders/index').default;



(async () => {
  async function start() {
    const app = express();
    const directory = process.cwd();

    try {
      const { container } = await loaders({ directory, expressApp: app });
      const configModule = container.resolve('configModule');
      const port = process.env.PORT ?? configModule.projectConfig.port ?? 9000;

      // Define HTTPS server options
      const options = {
        key: fs.readFileSync('royal_gems_v3/server.key'),
        cert: fs.readFileSync('royal_gems_v3/server.cert'),
      };

      // Create HTTPS server
      const server = https.createServer(options, app).listen(port, (err) => {
        if (err) {
          return;
        }
        console.log(`Server is ready on https://localhost:${port}`);
      });

      // Create GracefulShutdownServer instance with HTTPS server
      const gracefulShutdownServer = GracefulShutdownServer.create(server);

      // Handle graceful shutdown
      const gracefulShutDown = () => {
        gracefulShutdownServer
          .shutdown()
          .then(() => {
            console.info('Gracefully stopping the server.');
            process.exit(0);
          })
          .catch((e) => {
            console.error('Error received when shutting down the server.', e);
            process.exit(1);
          });
      };

      process.on('SIGTERM', gracefulShutDown);
      process.on('SIGINT', gracefulShutDown);
    } catch (err) {
      console.error('Error starting server', err);
      process.exit(1);
    }
  }

  await start();
})();