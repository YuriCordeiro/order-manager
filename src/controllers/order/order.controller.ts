import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { OrderDTO } from "src/dto/order.dto";
import { ProductDTO } from "src/dto/product.dto";
import { ProductEntity } from "src/entities/ProductEntity";
import { OrderRepository } from "src/repositories/order.repository";
import { ProductRepository } from "src/repositories/product.repository";
import { v4 as uuid } from 'uuid';

@Controller('/orders')
export class OrderController {
  constructor(private orderRepository: OrderRepository) {}
  
  @Post()
  async createOrder(@Body() orderDTO: OrderDTO) {
    await this.orderRepository.create(orderDTO);
    return "success";
  }

  @Get()
  async getAllOrders() {
    const orders = await this.orderRepository.findAll();
    return orders;
  }

  @Get()
  async getOrderById(@Param('orderId') orderId: string) {
    const order = await this.orderRepository.findById(orderId);
    return order;
  }

  @Put('/:orderId')
  async updateOrder(@Param('orderId') orderId: string, @Body() orderDTO: OrderDTO) {
    await this.orderRepository.update(orderId, orderDTO);
    return {order: orderId, message: "Order updated successfully"};
  }

  @Delete('/:orderId')
  async deleteOrder(@Param('orderId') orderId: string) {
    await this.orderRepository.delete(orderId);
    return {order: orderId, message: "Order deleted successfully"};
  }
}