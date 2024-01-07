import { CustomerRepositoryImpl } from "src/frameworks/data-services/mongo/repository/customer.repository";
import { Customer } from "../entities/customer.entity";
import { IGenericRepository } from "./generic-repository.abstract";

export abstract class IDataServices {
    //abstract customers: IGenericRepository<Customer>;
    customers: CustomerRepositoryImpl;
}