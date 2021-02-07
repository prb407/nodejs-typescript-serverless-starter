/**
 * @author Pritesh Bhanderi
 */


import server from "./src";
import logger from "./src/logger";
server.listen(3000, () => {
logger.info(`instance running on port ${3000}`)
});
