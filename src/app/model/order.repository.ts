import { StaticDataSource } from "./static.datasource";
import { Order } from "./order.model";
import { Observable } from "rxjs/Observable";

export class OrderRepository {
    private orders: Order[] = [];

    constructor(private dataSource: StaticDataSource){

    }

    getOrders(): Order[]{
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }
}