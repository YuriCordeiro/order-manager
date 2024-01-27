import { Module } from "@nestjs/common";
import { DataServicesModule } from "src/services/data-services.module";
import { CartFactoryService } from "./cart-factory.service";
import { CartUseCases } from "./cart.use-case";
import { ProductUseCaseModule } from "./product.use-cases.module";

@Module({
    imports: [DataServicesModule, ProductUseCaseModule],
    providers: [CartFactoryService, CartUseCases, ProductUseCaseModule],
    exports: [CartFactoryService, CartUseCases]
})
export class CartUseCaseModule {
};
