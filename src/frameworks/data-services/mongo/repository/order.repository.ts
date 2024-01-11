import { Order } from '../model/order.model';
import { MongoGenericRepository } from '../mongo-generic-repository';

//TODO: Remove and use IGenericRepository
export class OrderRepositoryImpl extends MongoGenericRepository<Order> {
  getOrderByStatus(status: string) {
    return this._repository
      .find({ status: status })
      .exec();
  }
}
