import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts/data-services.abstract';
import { IGenericRepository } from 'src/core/abstracts/generic-repository.abstract';
import { Customer, CustomerDocument } from './model/customer.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoGenericRepository } from './mongo-generic-repository';
import { CustomerRepositoryImpl } from './repository/customer.repository';
import { OrderRepositoryImpl } from './repository/order.repository';
import { Product, ProductDocument } from './model/product.model';
import { Order, OrderDocument } from './model/order.model';
import { PaymentMethod, PaymentMethodDocument } from './model/payment.model';
import { ProductRepositoryImpl } from './repository/product.repository';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap {
  customers: CustomerRepositoryImpl;
  products: ProductRepositoryImpl;
  orders: OrderRepositoryImpl;
  payments: IGenericRepository<PaymentMethod>

  constructor(
    @InjectModel(Customer.name)
    private CustomerRepository: Model<CustomerDocument>,
    @InjectModel(Product.name)
    private ProductRepository: Model<ProductDocument>,
    @InjectModel(Order.name)
    private OrderRepository: Model<OrderDocument>,
    @InjectModel(PaymentMethod.name)
    private PaymentRepository: Model<PaymentMethodDocument>
  ) { }

  onApplicationBootstrap() {
    this.customers = new CustomerRepositoryImpl(this.CustomerRepository);
    this.products = new ProductRepositoryImpl(this.ProductRepository);
    this.orders = new OrderRepositoryImpl(this.OrderRepository);
    this.payments = new MongoGenericRepository(this.PaymentRepository);
  }
}
