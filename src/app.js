// Import the Express library
// Common JavaScript syntax:
// const express = require('express');
// ES6 syntax:
import express from 'express';
// Import the morgan library
import morgan from 'morgan';
// Import the path module
import path from 'path';
// Import the fileURLToPath module
import { fileURLToPath } from 'url';
// Import the machine IP address
import { theIPAddress } from './libraries/netConfig.js';
// Import the port module
import { port } from './libraries/netConfig.js';
// Import the express router
import routerAPI from './routes/index.js';

// create a HTTP server with express
// create an express applications instance 
const app = express();

// Define __dirname to get current directory
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Settings
app.set("port", port);

// Middleware

// Use morgan to record the HTTP request in development mode
app.use(morgan("dev"));
// Middleware to manage HTML form data
app.use(express.urlencoded( { extended: false } ));

// Routes
// User the routerAPI function as main API router and express application
// pass such as parameters
routerAPI(app);

// Immediately Invoked Function Expression (IIFE) to run the server
(
    async () => {
        // Await the app to start listening on the specified IP address and port
        const createApp = await app.listen(port, theIPAddress, (req, res) => {
            // Log the server start information to the console
            console.log(`Server running on port http://${theIPAddress}:${port}`);
        });
    }
)();

export default app;