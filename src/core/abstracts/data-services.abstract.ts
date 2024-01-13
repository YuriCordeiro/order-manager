import { CustomerRepositoryImpl } from 'src/frameworks/data-services/mongo/repository/customer.repository';
import { IGenericRepository } from './generic-repository.abstract';
import { OrderRepositoryImpl } from 'src/frameworks/data-services/mongo/repository/order.repository';
import { Product } from 'src/frameworks/data-services/mongo/model/product.model';
import { Payment } from 'src/frameworks/data-services/mongo/model/payment.model';

export abstract class IDataServices {
  abstract customers: CustomerRepositoryImpl;
  abstract orders: OrderRepositoryImpl;
  abstract products: IGenericRepository<Product>;
  abstract payments: IGenericRepository<Payment>
}
