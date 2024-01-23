import { Injectable } from '@nestjs/common';
import { OrderDTO } from 'src/dto/order.dto';
import { Order } from 'src/frameworks/data-services/mongo/model/order.model';

@Injectable()
export class OrderFactoryService {
  createNewOrder(queuePosition: number): Order {
    const order = new Order();
    order.status = "Em Preparação";
    order.value = 0;
    order.queuePosition = queuePosition;
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
