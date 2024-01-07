import { CustomerRepositoryImpl } from 'src/frameworks/data-services/mongo/repository/customer.repository';
import { Customer } from '../entities/customer.entity';
import { IGenericRepository } from './generic-repository.abstract';
import { OrderRepositoryImpl } from 'src/frameworks/data-services/mongo/repository/order.repository';
import { ProductRepositoryImpl } from 'src/frameworks/data-services/mongo/repository/product.repository';

export abstract class IDataServices {
  //abstract customers: IGenericRepository<Customer>;
  customers: CustomerRepositoryImpl;
  orders: OrderRepositoryImpl;
  products: ProductRepositoryImpl;
}
