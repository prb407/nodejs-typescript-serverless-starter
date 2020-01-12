/**
 * @author Pritesh Bhanderi
 */


import express, { Request, Response, NextFunction } from "express";
import logger from "./logger";
import bodyParser from "body-parser";

const server = express();

/**
 * added body-parser to set body if you are sending json
 */
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

/**
 * add middleware to your server
 * @TODO : you can move callback function to another middleware folder ( Ex. ./middleware )
 */
server.use((request: Request, response: Response, next: NextFunction) => {

    /**
     * Middleware will get executed on each request
     */
    logger.debug(`inside middleware`)


    /** 
     * Sending request to next function 
    */
    logger.debug(`Sending request to next function `)
    next()
})


/**
 * add routing to your server
 * @TODO : you can move callback function to another folder ( Ex. ./fulfillment )
 */
server.get(`/index`, (request: Request, response: Response) => {
    logger.debug(`inside index callback function`)
    response.status(200).json({
        message: `successful served to /index`
    })
})
export default server;