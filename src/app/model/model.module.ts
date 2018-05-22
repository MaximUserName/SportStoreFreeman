import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';

@NgModule({
  providers: [ProductRepository, StaticDataSource, Cart],
  imports: []
})
export class ModelModule { }
