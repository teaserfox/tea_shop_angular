import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeaBagModalComponent } from "./shared/ui/tea-bag-modal/tea-bag-modal.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
      { path: 'order', loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule) },
      { path: 'catalog', loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule) },
      { path: 'product/:id', loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule) },
    ]
  },
  { path: 'tea-bag-modal', component: TeaBagModalComponent },
  { path: '**', redirectTo: '' } // wildcard на случай неизвестных URL
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
