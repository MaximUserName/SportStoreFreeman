import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { StoreComponent } from "./store.component";
import { ModelModule } from "../model/model.module";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";
import { OrderRepository } from "../model/order.repository";
import { Order } from "../model/order.model";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [
        StoreComponent, 
        CounterDirective, 
        CartSummaryComponent, 
        CartDetailComponent,
        CheckoutComponent
    ],
    providers: [OrderRepository, Order],
    exports: [StoreComponent]
})
export class StoreModule { }

