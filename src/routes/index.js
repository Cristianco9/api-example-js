// Import the Router class from express
import { Router } from "express";
// Import the customers sub router
import { customersRouter } from './customersRouter.js';

// Define the main app router
const routerAPI = (app) => {

    // Create an express Router instance
    const expressRouter = Router();

    app.use('/api/v1', expressRouter);

    // Define the routes to response since the customers sub router
    expressRouter.use('/customers', customersRouter);
};


// Export the API router to use in the app.js module
export default routerAPI;