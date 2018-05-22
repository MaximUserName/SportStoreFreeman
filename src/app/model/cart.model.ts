import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart {
    public lines: CartLine[] = [];

    get itemCount(): number {
        return this.lines.length;
    }

    get cartPrice(): number {
        let summ: number = 0;
        this.lines.forEach(line => summ += (line.product.price * line.quantity));
        return summ;
    }

    get isEmpty(): boolean {
        return this.lines.length == 0;
    }

    addLine(product: Product): void{
        var existingCartLine = this.lines.find(line => line.product.id == product.id);
        if(existingCartLine != null)
            existingCartLine.quantity++;
        else
            this.lines.push(new CartLine(product, 1));
    }
}

export class CartLine {
    constructor(public product: Product,
        public quantity: number){
    }

    get lineTotal(): number {
        return this.quantity * this.product.price;
    }
}