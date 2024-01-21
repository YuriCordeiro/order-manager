import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderDTO } from 'src/dto/order.dto';
import { Order } from 'src/frameworks/data-services/mongo/model/order.model';
import { OrderUseCases } from 'src/use-cases/order.use-case';

@ApiTags('Orders')
@Controller('/orders')
export class OrderController {
  private readonly logger = new Logger(OrderController.name);

  constructor(private orderUseCases: OrderUseCases) { }

  @Post()
  async createOrder(@Body() orderDTO: OrderDTO): Promise<Order> {
    this.logger.log(`createOrder(OrderDTO) - Start`);
    return this.orderUseCases.createOrder(orderDTO);
  }

  @Get()
  async getAllOrders() {
    this.logger.log(`getAllOrders() - Start`);
    return this.orderUseCases.getAllOrders();
  }

  @Get('/id/:orderId')
  async getOrderById(@Param('orderId') orderId: string): Promise<Order> {
    this.logger.log(`getOrderById(string) - Start`);
    return this.orderUseCases.getOrderById(orderId);
  }

  @Put('/:orderId')
  async updateOrder(
    @Param('orderId') orderId: string,
    @Body() orderDTO: OrderDTO,
  ): Promise<Order> {
    this.logger.log(`updateOrder(string, OrderDTO) - Start`);
    return this.orderUseCases.updateOrder(orderId, orderDTO);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:orderId')
  async deleteOrder(@Param('orderId') orderId: string): Promise<void> {
    this.logger.log(`deleteOrder(String) - Start`);
    return this.orderUseCases.deleteOrder(orderId);
  }
}
