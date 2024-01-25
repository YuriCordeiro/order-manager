import { Module } from "@nestjs/common";
import { DataServicesModule } from "src/services/data-services.module";
import { CartFactoryService } from "./cart-factory.service";
import { CartUseCases } from "./cart.use-case";

@Module({
    imports: [DataServicesModule],
    providers: [CartFactoryService, CartUseCases],
    exports: [CartFactoryService, CartUseCases]
})
export class CartUseCaseModule {
};
