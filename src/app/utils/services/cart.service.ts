import { Injectable } from '@angular/core';
import {Roller} from "../types/roller.type";
import {Cart, CartItem} from "../types/cart.type";
import {RollerService} from "./roller.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  articles: Cart = [];
  length$ = new BehaviorSubject(0);

  constructor(private rollerService: RollerService) {
    this.retrieveCart();
  }

  add(article: Roller) {
    const existing = this.articles.find(a => a.id === article.id);
    if (existing) {
      existing.quantity += 1;
      existing.total = existing.quantity * existing.price;
    } else {
      let cartItem: CartItem = {
        ...article,
        quantity: 1,
        total: article.price
      }
      this.articles.push(cartItem);
    }
    this.saveCart();
    this.rollerService.changeStock(article, -1)
    this.length$.next(this.articles.length);
  }

  remove(article: Roller) {
    this.articles = this.articles.filter(a => a.id !== article.id);
    this.rollerService.changeStock(article, 1)
    this.saveCart();
    this.length$.next(this.articles.length);
  }

  getTotal() {
    return this.articles.reduce((acc, item) => acc + item.total, 0);
  }

  retrieveCart() {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.articles = JSON.parse(cart);
      this.length$.next(this.articles.length)
    }
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.articles));
  }
}
