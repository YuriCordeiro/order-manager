import { Customer } from "src/core/entities/customer.entity";
import { MongoGenericRepository } from "../mongo-generic-repository";

export class CustomerRepositoryImpl extends MongoGenericRepository<Customer> {

    getCustomerByCPF(customerCPF: string) {
        return this._repository
            //.find((user) => user.cpf == customerCPF)
            .find({ "cpf": customerCPF })
            .populate(this._populateOnFind)
            .exec();
    }


}