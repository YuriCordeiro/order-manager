import { Customer } from "../model/customer.model";
import { MongoGenericRepository } from "../mongo-generic-repository";

export class CustomerRepositoryImpl extends MongoGenericRepository<Customer> {

    getCustomerByCPF(customerCPF: string) {
        return this._repository
            .find({ "cpf": customerCPF })
            .exec();
    }


}