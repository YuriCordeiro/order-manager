import { Order } from 'src/core/entities/order.entity';
import { MongoGenericRepository } from '../mongo-generic-repository';

export class OrderRepositoryImpl extends MongoGenericRepository<Order> {
  getOrderByStatus(orderStatus: string) {
    return (
      this._repository
        //.find((user) => user.cpf == customerCPF)
        .find({ status: orderStatus })
        .populate(this._populateOnFind)
        .exec()
    );
  }
}
