import {Component, OnInit} from '@angular/core';
import {Roller} from "../../../utils/types/roller.type";
import {RollerService} from "../../../utils/services/roller.service";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  rollers$?: Observable<Roller[]>;

  constructor(private rollerService: RollerService) {}

  ngOnInit() {
    this.getRollers();
  }

  remove(roller: Roller) {
    this.rollerService.remove(roller)?.subscribe({
      next: () => this.getRollers()
    });
  }

  getRollers() {
    this.rollers$ = this.rollerService.getAll();
  }

}
