import { Injectable } from "@nestjs/common";
import { Cart } from "../frameworks/data-services/mongo/model/cart.model";

@Injectable()
export class CartFactoryService {

    createNewCart() {
        const newCart = new Cart();
        newCart.total = 0;
        return newCart;
    }
}