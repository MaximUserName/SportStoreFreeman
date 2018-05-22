import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart {
    public lines: CartLine[] =[];
    public itemCount: number = 0;
    public cartPrice: number = 0;

    constructor() {
        // For development only
        /*
        this.lines = <Product[]>[{
            id: 1, name: "Kayak", category: "Watersports",
            description: "A boat for one person", price: 275
        },
        {
            id: 2, name: "Lifejacket", category: "Watersports",
            description: "Protective and fashionable", price: 48.95
        },
        {
            id: 3, name: "Soccer Ball", category: "Soccer",
            description: "FIFA-approved size and weight", price: 19.50
        }].map(p => new CartLine(p, p.id)) as CartLine[];
        */
    }

    // get itemCount(): number {
    //     return this.lines.length;
    // }

    // get cartPrice(): number {
    //     let summ: number = 0;
    //     this.lines.forEach(line => summ += (line.product.price * line.quantity));
    //     return summ;
    // }

    get isEmpty(): boolean {
        return this.lines.length == 0;
    }

    addLine(product: Product): void{
        var existingCartLine = this.lines.find(line => line.product.id == product.id);
        if(existingCartLine != undefined)
            existingCartLine.quantity++;
        else
            this.lines.push(new CartLine(product, 1));
        this.recalculate();
    }

    removeLine(id: number) {
        let index = this.lines.findIndex(line => line.product.id == id);
        this.lines.splice(index, 1);
        this.recalculate();
    }

    updateQuantity(product: Product, quantity: number): void {
        var lineToUpdate = this.lines.find(line => line.product.id == product.id);
        if(quantity <= 0 )
            throw new Error("Wrong quantity");
        lineToUpdate.quantity = quantity;
        this.recalculate();
    }

    clear(){
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }

    private recalculate(): void {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(line => {
            this.itemCount += line.quantity;
            this.cartPrice += (line.quantity * line.product.price)
        })
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