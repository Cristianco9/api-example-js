// Import the Customers services
import Customers from "../../services/Customers.js";

export const updateOneCustomer = async (req, res, next) => {
    try {
        const customerID = req.body;
        const newCustomerData = req.body;
        const customer = await Customers.updateOne(customerID, newCustomerData);
        res.status(201).json(
            {
                success: true,
                message: "Customer updated successfully",
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