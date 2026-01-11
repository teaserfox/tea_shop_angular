import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {TruncateTextPipe} from "./pipes/truncate-text.pipe";
import {TeaBagModalComponent} from "./ui/tea-bag-modal/tea-bag-modal.component";
import {RouterLinkWithHref, RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TruncateTextPipe,
    TeaBagModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    TruncateTextPipe,
    HeaderComponent,
    TeaBagModalComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
