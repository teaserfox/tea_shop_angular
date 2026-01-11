import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/pages/main/main.component";
import {CatalogComponent} from "./components/pages/catalog/catalog.component";
import {OrderComponent} from "./components/pages/order/order.component";
import {ProductComponent} from "./components/pages/product/product.component";
import {TeaBagModalComponent} from "./components/ui/tea-bag-modal/tea-bag-modal.component";
import {ProductResolver} from "./components/services/product.resolver";
import {CatalogResolver} from "./components/services/catalog.resolver";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'catalog', component: CatalogComponent, resolve: {catalog: CatalogResolver}},
  {path: 'order', component: OrderComponent},
  {path: 'product/:id', component: ProductComponent, resolve: { product: ProductResolver}},
  {path: 'tea-bag-modal', component: TeaBagModalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top', anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
