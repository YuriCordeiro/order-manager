import { Module } from "@nestjs/common";
import { OrderController } from "src/controllers/order/order.controller";
import { OrderRepository } from "src/repositories/order.repository";

@Module({
  controllers: [OrderController],
  providers: [OrderRepository],
})
export class OrderModule {
};