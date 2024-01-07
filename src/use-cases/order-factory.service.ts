import { Injectable } from '@nestjs/common';
import { Order } from 'src/core/entities/order.entity';
import { OrderDTO } from 'src/dto/order.dto';

@Injectable()
export class OrderFactoryService {
  createNewOrder(orderDTO: OrderDTO): Order {
    const order = new Order();
    order.products = orderDTO.products;
    order.paymentMethod = orderDTO.paymentMethod;
    order.status = orderDTO.status;
    order.value = orderDTO.value;
    return order;
  }

  updateOrder(orderDTO: OrderDTO): Order {
    const updatedOrder = new Order();

    Object.entries(orderDTO).forEach(([key, value]) => {
      if (key === 'id') return;
      updatedOrder[key] = value;
    });
    return updatedOrder;
  }
}
