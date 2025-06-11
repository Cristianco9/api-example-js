// Import the Customers services
import Customers from "../../services/Customers.js";

export const getOneCustomer = async (req, res, next) => {
    try {
        const customerID  = req.body;
        const customer = await Customers.getOne(customerID);
        res.status(200).json(
            {
                success: true,
                message: "Customer retrieved successfully",
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