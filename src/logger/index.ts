/**
 * @author Pritesh Bhanderi
 *
 * different levels: error, warn, info, verbose, debug, silly
 */

import { get } from 'config';
import * as winston from 'winston';
const { combine, label, timestamp, printf } = winston.format;
const appName: string = get(`engineName`);
const options: winston.LoggerOptions = {
  level: get('level'),
  format: combine(label({ label: appName }), timestamp(), printf(info => JSON.stringify(info))),
  transports: [new winston.transports.Console()],
};
const logger = winston.createLogger(options);
export default logger;
