import {Component, Input, OnInit} from '@angular/core';
import {Roller} from "../../utils/types/roller.type";
import {RollerService} from "../../utils/services/roller.service";
import {NgOptimizedImage} from "@angular/common";
import {CartService} from "../../utils/services/cart.service";

@Component({
  selector: 'app-card[article]',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input() article!: Roller;

  constructor(private cartService: CartService) {}

  ngOnInit() {
  }

  addToCart() {
    this.cartService.add(this.article);
  }

}
