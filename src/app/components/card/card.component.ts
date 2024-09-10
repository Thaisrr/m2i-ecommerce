import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Roller} from "../../utils/types/roller.type";
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
export class CardComponent implements OnChanges{
  @Input() article!: Roller;
  loading = false;

  constructor(private cartService: CartService) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  addToCart() {
    this.cartService.add(this.article);
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  }

}
