import { Injectable } from '@nestjs/common';
import { OrderDTO } from 'src/dto/order.dto';
import { Order } from 'src/frameworks/data-services/mongo/model/order.model';

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
