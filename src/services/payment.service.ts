import { Injectable } from '@nestjs/common';
import { PaymentDTO } from '../dto/payment.dto';

@Injectable()
export class PaymentService {
  create(createPaymentDTO: PaymentDTO) {
    return 'This action adds a new payment';
  }

  findAll() {
    return `This action returns all payment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDTO: PaymentDTO) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
