import { Injectable } from "@angular/core";
import { Http, Request, RequestMethod } from "@angular/http";
import { Product } from "./product.model";
import { Order } from "./order.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
    baseUrl: string;

    constructor(private http: Http) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts(): Observable<Product[]> {
        // return this.sendRequest(RequestMethod.Get, "products");
        return this.http.request(new Request({
            method: RequestMethod.Get,
            url: this.baseUrl + "products",
            body: null
        })).map(response => response.json())
    }

    getOrders(): Observable<Order[]> {
        // return this.sendRequest(RequestMethod.Get, "orders");
        return this.http.request(new Request({
            method: RequestMethod.Get,
            url: this.baseUrl + "orders",
            body: null
        })).map(response => response.json())
    }

    saveOrder(order: Order): Observable<Order> {
        // return this.sendRequest(RequestMethod.Post, "orders", order);
        return this.http.request(new Request({
            method: RequestMethod.Post,
            url: this.baseUrl + "orders",
            body: order
        })).map(response => response.json())
    }

    private sendRequest(verb: RequestMethod,
        url: string, body?: Product | Order): Observable<Product | Order> {
        return this.http.request(new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        })).map(response => response.json());
    }
}