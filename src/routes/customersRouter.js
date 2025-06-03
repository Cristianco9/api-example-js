// Import the express Router
import { Router } from "express";
// Import all customers controllers
import { getAllCustomers } from '../controllers/customers/getAll.js';

// Define the router to response all request related with customers
export const customersRouter = Router();

// Define the corresponding routes and controllers
customersRouter.get("/", getAllCustomers);