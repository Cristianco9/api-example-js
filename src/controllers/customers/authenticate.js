// Import the Customers services
import Customers from "../../services/Customers.js";

export const loginCustomer = async (req, res, next) => {
    try {

        const { userName, password } = req.body.credencials;

        const customer = await Customers.login(userName, password);
        res.status(200).json(
            {
                success: true,
                message: "Customer logged successfully",
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