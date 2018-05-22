import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart {
    public lines: CartLine[] = [];
}

export class CartLine {
    constructor(public product: Product,
        public quantity: number){
    }

    get lineTotal(): number {
        return this.quantity * this.product.price;
    }
}