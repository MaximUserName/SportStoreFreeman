import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';

@Component({
  selector: 'store',
  //moduleId: module.id,
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: ProductRepository) { }

  get products(): Product[]{
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[]{
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string){
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number){
    this.selectedPage = newPage;
  }

  changePageSize(newPageSize: number){
    this.productsPerPage = newPageSize;
    this.changePage(1);
  }

  get pageNumbers(): number[]{
    return Array(Math.ceil(this.repository
                  .getProducts(this.selectedCategory).length / this.productsPerPage))
                  .fill(0).map((x,i) => i + 1);
  }

  ngOnInit() {
  }

}
