import { CustomerRepositoryImpl } from 'src/frameworks/data-services/mongo/repository/customer.repository';
import { IGenericRepository } from './generic-repository.abstract';
import { OrderRepositoryImpl } from 'src/frameworks/data-services/mongo/repository/order.repository';
import { PaymentMethod } from 'src/frameworks/data-services/mongo/model/payment.model';
import { ProductRepositoryImpl } from 'src/frameworks/data-services/mongo/repository/product.repository';
import { Cart } from 'src/frameworks/data-services/mongo/model/cart.model';
import { Transaction } from 'src/frameworks/data-services/mongo/model/transaction.model';

export abstract class IDataServices {
  abstract customers: CustomerRepositoryImpl;
  abstract orders: OrderRepositoryImpl;
  abstract payments: IGenericRepository<PaymentMethod>;
  abstract products: ProductRepositoryImpl;
  abstract carts: IGenericRepository<Cart>;
  abstract transactions: IGenericRepository<Transaction>;
}
