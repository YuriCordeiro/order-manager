import { CustomerRepositoryImpl } from 'src/frameworks/data-services/mongo/repository/customer.repository';
import { IGenericRepository } from './generic-repository.abstract';
import { OrderRepositoryImpl } from 'src/frameworks/data-services/mongo/repository/order.repository';
import { PaymentMethod } from 'src/frameworks/data-services/mongo/model/payment.model';
import { ProductRepositoryImpl } from 'src/frameworks/data-services/mongo/repository/product.repository';

export abstract class IDataServices {
  abstract customers: CustomerRepositoryImpl;
  abstract orders: OrderRepositoryImpl;
  abstract payments: IGenericRepository<PaymentMethod>
  abstract products: ProductRepositoryImpl;
}
