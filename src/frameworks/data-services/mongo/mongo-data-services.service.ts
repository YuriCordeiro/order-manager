import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { IDataServices } from "src/core/abstracts/data-services.abstract";
import { IGenericRepository } from "src/core/abstracts/generic-repository.abstract";
import { Customer, CustomerDocument } from "./model/customer.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { MongoGenericRepository } from "./mongo-generic-repository";
import { CustomerRepositoryImpl } from "./repository/customer.repository";

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap {
    
    //customers: IGenericRepository<Customer>;
    customers: CustomerRepositoryImpl;

    constructor(
        @InjectModel(Customer.name)
        private CustomerRepository: Model<CustomerDocument>
      ) {}

    onApplicationBootstrap() {
        //this.customers = new MongoGenericRepository<Customer>(this.CustomerRepository);
        this.customers = new CustomerRepositoryImpl(this.CustomerRepository);
      }
    
  }