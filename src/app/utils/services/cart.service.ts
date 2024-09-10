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
    this.length$.next(this.articles.length);
    this.rollerService.changeStock(article, -1).subscribe()
  }

  remove(articleId: number) {
    const quantity = this.articles.find(a => a.id === articleId)?.quantity || 0;
    this.articles = this.articles.filter(a => a.id !== articleId);
    this.saveCart();
    this.length$.next(this.articles.length);
    this.rollerService.getById(articleId).subscribe(
      {next: (roller) => this.rollerService.changeStock(roller, quantity).subscribe() }
    )
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
