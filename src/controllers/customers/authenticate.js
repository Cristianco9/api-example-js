// Import the Customers services
import Customers from "../../services/Customers.js";

export const loginCustomer = async (req, res, next) => {
    try {

        const username = req.body;
        const password = req.body;

        const customer = await Customers.login(username, password);
        res.status(200).json(
            {
                success: true,
                message: "Customer logged successfully",
                data: customer
            }
        )

    } catch (err) {
        console.log(err);
        
        res.status(500).json(
            {
                success: false,
                message: "Internal server error.",
                data: []
            }
        )
    }
}