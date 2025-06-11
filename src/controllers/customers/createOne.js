// Import the Customers services
import Customers from "../../services/Customers.js";

export const createOneCustomer = async (req, res, next) => {
    try {
        const { newCustomer } = req.body;
        const customer = await Customers.createOne(newCustomer);
        res.status(201).json(
            {
                success: true,
                message: "Customer created successfully",
                data: customer
            }
        )

    } catch (err) {
        res.status(500).json(
            {
                success: false,
                message: "Internal server error.",
                data: []
            }
        )
    }
}