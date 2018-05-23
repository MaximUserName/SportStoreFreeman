import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { RestDataSource } from './rest.datasource';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth.service';

@NgModule({
  providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository,
    {provide: StaticDataSource, useClass: RestDataSource },
    RestDataSource,
    AuthService
  ],
  imports: [HttpModule]
})
export class ModelModule { }
