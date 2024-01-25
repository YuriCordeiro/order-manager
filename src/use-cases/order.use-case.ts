import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts/data-services.abstract';
import { OrderFactoryService } from './order-factory.service';
import { OrderDTO } from 'src/dto/order.dto';
import { Order } from 'src/frameworks/data-services/mongo/model/order.model';

@Injectable()
export class OrderUseCases {
  constructor(
    private dataServices: IDataServices,
    private orderFactoryService: OrderFactoryService
  ) { }

  /**
   * 
   * @returns All registered orders sorted by queuePosition field, asc
   */
  async getAllOrders(): Promise<Order[]> {
    return (await this.dataServices.orders.getAll())
      .sort(
        // Order by asc
        (a, b) => a.queuePosition - b.queuePosition
      );
  }

  getOrderById(id: string): Promise<Order> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      const orderProduct = this.dataServices.orders.get(id);

      if (orderProduct != null) {
        return orderProduct;
      } else {
        throw new NotFoundException(
          `Order with id: ${id} not found at database.`,
        );
      }
    } else {
      throw new BadRequestException(`'${id}' is not a valid ObjectID`);
    }
  }

  async createOrder(cartId: string): Promise<Order> {
    const newOrder = this.orderFactoryService.createNewOrder(cartId, await this.mapActualQueuePosition());
    return this.dataServices.orders.create(await newOrder);
  }

  async mapActualQueuePosition() {
    return (await this.dataServices.orders.getAll()).length + 1;
  }

  updateOrder(orderId: string, orderDTO: OrderDTO): Promise<Order> {
    const newOrder = this.orderFactoryService.updateOrder(orderDTO);
    return this.dataServices.orders.update(orderId, newOrder);
  }

  deleteOrder(orderId: string) {
    const foundOrder = this.getOrderById(orderId);
    this.dataServices.orders.delete(orderId);
  }
}
