import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {CartService} from "../../utils/services/cart.service";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  cartSize: number = 0;

  constructor(private cartService: CartService) {
    this.cartService.length$.subscribe({
      next: val => this.cartSize = val
    })
  }

  protected readonly length = length;
}
