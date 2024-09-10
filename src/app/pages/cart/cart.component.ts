import { Component } from '@angular/core';
import {Roller} from "../../utils/types/roller.type";
import {CartService} from "../../utils/services/cart.service";
import {Cart, CartItem} from "../../utils/types/cart.type";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cart: Cart = [];
  total: number = 0;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.articles;
    this.total = this.cartService.getTotal();
  }

  remove(roller: CartItem) {
    this.cartService.remove(roller.id);
    this.cart = this.cartService.articles;
    this.total = this.cartService.getTotal();
  }

}
