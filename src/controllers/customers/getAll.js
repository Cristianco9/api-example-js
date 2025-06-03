// Import the Customers services
import Customers from "../../services/Customers.js";

export const getAllCustomers = async (req, res) => {

    try {
        const customers = await Customers.getAll();
        res.status(200).json(
            {
                success: true,
                message: "Customers retrieved successfully",
                data: customers
            }
        );
    } catch (err) {
        res.status(500).json(
            {
                success: false,
                message: "Internal server error.",
                data: [],
            }
        )
    }

};