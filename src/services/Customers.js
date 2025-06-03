class Customer {

    constructor() {
        this.allCustomers = [
            {
                "id": 1,
                "name": "Cris",
                "lastName": "Cut",
                "phone": "3136789087",
                "address": "street 12  # 34 - 65"
            },
            {
                "id": 2,
                "name": "Alex",
                "lastName": "Agudelo",
                "phone": "3176789083",
                "address": "street 34  # 63 - 78"
            },
        ];
    }

    async getAll() {
        const result = await this.allCustomers;
        return result;
    }
}

export default new Customer();