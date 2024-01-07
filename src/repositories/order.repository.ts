import { Injectable } from "@nestjs/common";
import { OrderDTO } from "src/dto/order.dto";
import { OrderEntity } from "src/entities/OrderEntity";
import { v4 as uuid } from 'uuid';

@Injectable()
export class OrderRepository {
  private orders: OrderEntity[] = [];

  async create(orderDTO: OrderDTO) {
    const order = new OrderEntity();
    order.id = uuid();
    order.products = orderDTO.products;
    order.paymentMethod = orderDTO.paymentMethod;
    order.status = orderDTO.status;
    order.value = orderDTO.value;
    // order.customer = orderDTO.customer;
    this.orders.push(order);
  }

  async findAll() {
    return this.orders;
  }

  async findById(id: string) {
    const order = this.orders.find(order => order.id === id);

    if (!order) {
      return {"message": "Order not found"};
    }

    return order;    
  }

  async update(id: string, orderDTO: Partial<OrderEntity>) {
    const orderUpdated = this.orders.find(order => order.id === id);

    if (!orderUpdated) {
      return {"message": "Order not found"};
    }

    Object.entries(orderDTO).forEach(([key, value]) => {
      if (key === 'id') return;
      orderUpdated[key] = value;
    });

    return orderUpdated;
  }

  async delete(id: string) {
    const order = this.orders.find(order => order.id === id);

    if (!order) {
      return {"message": "Order not found"};
    }

    this.orders = this.orders.filter(order => order.id !== id);
  }
}