import { CustomerRepositoryImpl } from 'src/frameworks/data-services/mongo/repository/customer.repository';
import { IGenericRepository } from './generic-repository.abstract';
import { OrderRepositoryImpl } from 'src/frameworks/data-services/mongo/repository/order.repository';
import { Product } from 'src/frameworks/data-services/mongo/model/product.model';
import { ProductRepositoryImpl } from 'src/frameworks/data-services/mongo/repository/product.repository';
//import { ProductRepositoryImpl } from 'src/frameworks/data-services/mongo/repository/product.repository';
//import { Order } from '../entities/order.entity';
//import { Product } from '../entities/product.entity';

export abstract class IDataServices {
  //abstract customers: IGenericRepository<Customer>;
  abstract customers: CustomerRepositoryImpl;
  abstract orders: OrderRepositoryImpl;
  abstract products: ProductRepositoryImpl;
}
