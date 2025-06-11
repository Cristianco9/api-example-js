// Import the express Router
import { Router } from "express";
// Import all customers controllers
import { getAllCustomers } from '../controllers/customers/getAll.js';
import { getOneCustomer } from '../controllers/customers/getOne.js';
import { createOneCustomer } from '../controllers/customers/createOne.js';
import { updateOneCustomer } from '../controllers/customers/updateOne.js';
import { deleteOneCustomer } from '../controllers/customers/deleteOne.js';
import { loginCustomer } from '../controllers/customers/authenticate.js';

// Define the router to response all request related with customers
export const customersRouter = Router();

// Define the corresponding routes and controllers
customersRouter.get("/", getAllCustomers);
customersRouter.post("/id", getOneCustomer);
customersRouter.post("/new", createOneCustomer);
customersRouter.post("/delete", deleteOneCustomer);
customersRouter.post("/update", updateOneCustomer);
customersRouter.post("/login", loginCustomer);