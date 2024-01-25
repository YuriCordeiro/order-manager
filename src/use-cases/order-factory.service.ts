import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts/data-services.abstract';
import { OrderDTO } from 'src/dto/order.dto';
import { Order } from 'src/frameworks/data-services/mongo/model/order.model';
import { DataServicesModule } from 'src/services/data-services.module';

@Injectable()
export class OrderFactoryService {
  constructor(private dataServices: IDataServices) {}

  async createNewOrder(cartId: string, queuePosition: number): Promise<Order> {
    const foundCart = await this.dataServices.carts.get(cartId);
    const order = new Order();
    order.customer = foundCart.customer;
    order.products = foundCart.products;
    order.paymentMethod = foundCart.paymentMethod;
    order.value = foundCart.total;
    order.status = "Em Preparação";
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
