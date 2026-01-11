import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { ProductComponent } from './components/pages/product/product.component';
import { OrderComponent } from './components/pages/order/order.component';
import { TeaBagModalComponent } from './components/ui/tea-bag-modal/tea-bag-modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./components/pages/header/header.component";
import {FooterComponent} from "./components/pages/footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import { TruncateTextPipe } from './pipes/truncate-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CatalogComponent,
    ProductComponent,
    OrderComponent,
    TeaBagModalComponent,
    HeaderComponent,
    FooterComponent,
    TruncateTextPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
