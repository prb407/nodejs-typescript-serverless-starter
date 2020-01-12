/**
 * @author Pritesh Bhanderi
 */


import app from './src';
import logger from './src/logger';

const awsServerlessExpress = require('aws-serverless-express');

const server = awsServerlessExpress.createServer(app, () => {
    logger.info('nodejs server started with serverless');
});

exports.handler = (event, context) => {
    // logger.info('**event=', event);
    // logger.info('**context=', context);

    awsServerlessExpress.proxy(server, event, context);
};
