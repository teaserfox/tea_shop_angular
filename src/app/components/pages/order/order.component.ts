import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {AbstractControl, FormBuilder, ValidationErrors, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {OrderResponseType} from "../../types/order.response.type";

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  signInForm = this.fb.group(
    {
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ]+$/)]],
      last_name: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ]+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{11}$/)]],
      country: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ0-9\s\-\/]+$/)]],
      zip: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      address:['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ0-9\s\/.,-]+$/)]],
      product: [{ value: '', disabled: true }, Validators.required],
      comment: ['',],
    },
    {
      validators: this.productRequiredValidator
    }
  );

  productRequiredValidator(control: AbstractControl): ValidationErrors | null {
    const product = control.get('product')?.value;
    return product ? null : { productRequired: true };
  }

  constructor(private  cartService: CartService, private fb: FormBuilder, private http: HttpClient) { }

  formValues = {
    product: ''
  }

  orderSuccess = false;
  orderError = false;
  loading = false;

  ngOnInit(): void {
    if (this.cartService.product) {
      this.signInForm.patchValue({
        product: this.cartService.product
      });
    }
  }

  signIn (): void {
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.orderError = false;

    const payload = this.signInForm.getRawValue();

    this.http.post<OrderResponseType>(
      'https://testologia.ru/order-tea',
      payload
    ).subscribe({
      next: (response) => {
        if (response?.success === 1) {
          this.orderSuccess = true;
        } else {
          this.orderError = true;
        }
      },
      error: () => {
        this.orderError = true;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
