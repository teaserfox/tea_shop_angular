import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CatalogResolver} from "../../shared/services/catalog.resolver";
import {ProductResolver} from "../../shared/services/product.resolver";
import {CatalogComponent} from "./catalog/catalog.component";
import {ProductComponent} from "./product/product.component";

const routes: Routes = [
  {path: '', component: CatalogComponent, resolve: {catalog: CatalogResolver}},
  {path: ':id', component: ProductComponent, resolve: { product: ProductResolver}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
