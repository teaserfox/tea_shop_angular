import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../shared/services/cart.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogType} from "../../../../types/catalog.type";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product!: CatalogType;

  constructor(private cartService: CartService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.product = this.route.snapshot.data['product'];
  }

  addToCart(title: string): void {
    this.cartService.product = title;
    this.router.navigate(['/order'])
  }

}
