import {Component, OnInit} from '@angular/core';
import {Roller} from "../../../utils/types/roller.type";
import {RollerService} from "../../../utils/services/roller.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  rollers: Roller[] = [];

  constructor(private rollerService: RollerService) {}

  ngOnInit() {
    this.rollers = this.rollerService.rollers;
  }

  remove(roller: Roller) {
    this.rollerService.remove(roller);
  }


}
