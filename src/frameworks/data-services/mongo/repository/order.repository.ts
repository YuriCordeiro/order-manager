import { Order } from 'src/core/entities/order.entity';
import { MongoGenericRepository } from '../mongo-generic-repository';

export class OrderRepositoryImpl extends MongoGenericRepository<Order> {
  getOrderByStatus(status: string) {
    return (
      this._repository
        //.find((user) => user.cpf == customerCPF)
        .find({ status: status })
        .populate(this._populateOnFind)
        .exec()
    );
  }
}
