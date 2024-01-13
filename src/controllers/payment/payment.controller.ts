import { Controller, Get, Post, Body, Patch, Param, Delete, Logger } from '@nestjs/common';
import { PaymentDTO } from '../../dto/payment.dto';
import { PaymentUseCases } from 'src/use-cases/payment.use-case';

@Controller('payment')
export class PaymentController {

  private readonly logger = new Logger(PaymentController.name);

  constructor(private paymentUseCases: PaymentUseCases) { }

  @Post()
  create(@Body() createPaymentDto: PaymentDTO) {
    return this.paymentUseCases.createPayment(createPaymentDto);
  }

  @Get()
  findAll() {
    return this.paymentUseCases.getAllPayments();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentUseCases.getPaymentById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentDto: PaymentDTO) {
    return this.paymentUseCases.updatePayment(id, updatePaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentUseCases.delete(id);
  }
}
