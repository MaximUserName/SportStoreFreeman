import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';

@NgModule({
  providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository],
  imports: []
})
export class ModelModule { }
