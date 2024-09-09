import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  imgUrl = "https://www.montaz.com/cache/imgcatalogue/2022/800x800/sl/impala-quad-skate-pastel-fade_f.jpg";

}
