import { Injectable } from "@nestjs/common";
import { IDataServices } from "src/core/abstracts/data-services.abstract";
import { TransactionDTO } from "src/dto/transaction.dto";
import { Transaction } from "src/frameworks/data-services/mongo/model/transaction.model";

@Injectable()
export class TransactionFactoryService {
    constructor(private dataServices: IDataServices) {}

    async createNewTransaction(transactionDTO: TransactionDTO, cartId: string): Promise<Transaction> {
        const foundPaymentMethod = await this.dataServices.payments.get(transactionDTO.paymentMethod);
        const foundCart = await this.dataServices.carts.get(cartId);
        const transaction = new Transaction();
        transaction.paymentMethod = foundPaymentMethod;
        transaction.total = foundCart.total;
        return transaction;
    }
}
