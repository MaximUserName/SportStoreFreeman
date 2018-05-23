import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent {

  editing: boolean = false;
  product: Product = new Product();

  constructor(private repository: ProductRepository,
    private router: Router,
    private activeRoute: ActivatedRoute) { 
      this.editing = activeRoute.snapshot.params["mode"] == "edit";
      if(this.editing){
        Object.assign(this.product,
          repository.getProduct(activeRoute.snapshot.params["id"]));
      }
    }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl("/admin/main/products");
  }

}
