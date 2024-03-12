import { CustomerRepositoryImpl } from 'src/frameworks/data-services/mongo/gateways/customer.repository';
import { IGenericRepository } from './generic-repository.abstract';
import { OrderRepositoryImpl } from 'src/frameworks/data-services/mongo/gateways/order.repository';
import { PaymentMethod } from 'src/frameworks/data-services/mongo/entities/payment.model';
import { ProductRepositoryImpl } from 'src/frameworks/data-services/mongo/gateways/product.repository';
import { Cart } from 'src/frameworks/data-services/mongo/entities/cart.model';
import { Transaction } from 'src/frameworks/data-services/mongo/entities/transaction.model';

export abstract class IDataServices {
  abstract customers: CustomerRepositoryImpl;
  abstract orders: OrderRepositoryImpl;
  abstract payments: IGenericRepository<PaymentMethod>;
  abstract products: ProductRepositoryImpl;
  abstract carts: IGenericRepository<Cart>;
  abstract transactions: IGenericRepository<Transaction>;
}
