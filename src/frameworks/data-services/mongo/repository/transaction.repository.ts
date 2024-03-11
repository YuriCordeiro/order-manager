
import { Transaction } from '../model/transaction.model';
import { MongoGenericRepository } from '../mongo-generic-repository';

export class TransactionRepositoryImpl extends MongoGenericRepository<Transaction> {

  getTransactionByStatus(status: string) {
    return this._repository
      .find({ status: status })
      .exec();
  }
}
