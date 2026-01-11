import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogComponent} from "./catalog/catalog.component";
import {ProductComponent} from "./product/product.component";
import {SharedModule} from "../../shared/shared.module";
import {ProductsRoutingModule} from "./products-routing.module";

@NgModule({
  declarations: [
    CatalogComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
  ],
  exports: [
    CatalogComponent,
    ProductComponent,
  ]
})
export class ProductsModule { }
