import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { RouterModule } from "@angular/router";
import { StoreComponent } from "./store/store.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { CheckoutComponent } from "./store/checkout.component";
import { StoreFirstGuard } from "./store-first.guard";
import { AuthComponent } from "./admin/auth.component";
import { ProductEditorComponent } from './admin/product-editor.component';
import { OrderTableComponent } from './admin/order-table.component';

@NgModule({
    imports: [
        BrowserModule,
        StoreModule,
        RouterModule.forRoot([
            { path: "store", component: StoreComponent, canActivate: [StoreFirstGuard] },
            { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
            { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
            {
                path: "admin",
                loadChildren: "src/app/admin/admin.module#AdminModule",
                canActivate: [StoreFirstGuard]
            },
            { path: "**", redirectTo: "/store" }
        ], {
            enableTracing: false,
        })
    ],
    providers: [StoreFirstGuard],
    declarations: [AppComponent, ProductEditorComponent, OrderTableComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
