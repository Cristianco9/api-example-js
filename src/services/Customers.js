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

    async getOne(userID) {
        const result = await this.allCustomers[0];
        return result;
    }

    async deleteOne(userID) {
        const result = await this.allCustomers[1];
        return result;
    }

    async updateOne(userID, newCustomerData) {
        const result = await this.allCustomers[0];
        return result;
    }

    async createOne(newCustomer) {
        this.allCustomers.push(newCustomer);
        const result = this.allCustomers[this.allCustomers.length - 1];
        return result;
    }

    async login(userName, password) {
        const result = 
        {
            customer: userName,
            loginStatus: true,
            token: "012323jdgshds7sfdhdsjs"
        };
        return result;
    }

}

export default new Customer();