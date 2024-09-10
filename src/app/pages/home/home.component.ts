import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {Roller} from "../../utils/types/roller.type";
import {RollerService} from "../../utils/services/roller.service";
import {CardComponent} from "../../components/card/card.component";
import {FormsModule} from "@angular/forms";
import {FilterPipe} from "../../utils/pipe/filter.pipe";
import {SearchPipe} from "../../utils/pipe/search.pipe";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CardComponent,
    FormsModule,
    FilterPipe,
    SearchPipe,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  articles$?: Observable<Roller[]>;
  search: string = '';
  order: 'asc' | 'desc' = 'asc';

  constructor(private rollerService: RollerService) {}

  ngOnInit() {
    this.rollerService.getAll().subscribe();
    this.articles$ = this.rollerService.rollers$;
  }
}
